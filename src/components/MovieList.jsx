import React from "react";
import MovieCard from "./MovieCard";
import "../utils/Scroll.css";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="">
      <h1 className="text-2xl pl-2 text-white pb-2">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
