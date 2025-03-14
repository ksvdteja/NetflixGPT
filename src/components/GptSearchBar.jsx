import React, { useRef } from "react";
import { geminiAI } from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // const handleGptSearchClick = async () => {
  //   console.log(searchText.current.value);
  //   //Make an api call to get the movie results
  //   const gptQuery =
  //     "Act as a Movie Recommendation system and suggest some movies for the query: " +
  //     searchText.current.value +
  //     ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Pushpa, Bahubali, RRR, Animal, Kabir Singh";
  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(gptResults.choices);
  // };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //Make an api call to get the movie results
    const aiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query and if the query gives a movie name then search for that movie and give the first name as that movie in result: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Pushpa, KGF, Interstellar, Animal, Avengers: End Game";
    const model = geminiAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // const prompt = "Explain how AI works";

    const aiResults = await model.generateContent(aiQuery);
    //console.log(aiResults.response.text());

    if (!aiResults.response.text()) {
      // TODO: Write Error Handling
    }

    const aiMovies = aiResults.response.text().split(", ");
    // -> this will return 5 movies in an array

    //console.log(aiMovies);
    //For each movie search for TMDB API
    const promiseArray = aiMovies.map((movie) => searchMovieTMDB(movie));
    // -> this will give an array of 5 promises like this [Promise, Promise, Promise, Promise, Promise]
    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: aiMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black opacity-85 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 h-10 text-xl bg-white rounded-sm"
          placeholder="What would you like to watch today ?"
        />
        <button
          onClick={() => handleGptSearchClick()}
          className="py-2 px-4 m-4 col-span-3 h-10 bg-red-600 rounded-sm cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
