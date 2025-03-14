import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  console.log(movieNames);
  console.log(movieResults);
  // Check if movieNames or movieResults are null or undefined
  if (!movieNames || !movieResults) {
    return (
      <div className="p-4 m-4 rounded-md bg-black text-white">
        No suggestions available.
      </div>
    );
  }

  return (
    <div className="p-4 m-4 rounded-md bg-black opacity-90 text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
