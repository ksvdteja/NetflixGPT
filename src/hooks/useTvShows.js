import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTvShows } from "../utils/moviesSlice";

const useTvShows = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTvShows();
  }, []);

  const getTvShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvShows(json.results));
  };
};

export default useTvShows;
