import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addIndianMovies } from "../utils/moviesSlice";

const useIndianCinema = () => {
  const dispatch = useDispatch();
  const indianMovies = useSelector((store) => store.movies.indianMovies);
  useEffect(() => {
    !indianMovies && getIndianMovies();
  }, []);

  const getIndianMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=IN",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addIndianMovies(json.results));
  };
};

export default useIndianCinema;
