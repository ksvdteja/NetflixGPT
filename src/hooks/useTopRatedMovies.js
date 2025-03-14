import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  //Fetch data from TMDB API and update the store with video data
  const dispatch = useDispatch();

  useEffect(() => {
    !getTopRatedMovies && topRatedMovies();
  }, []);

  const getTopRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const topRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
