import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-48 pl-15 relative z-20">
        <MovieList title={"Indian Cinema"} movies={movies.indianMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"TV Shows"} movies={movies.tvShows}/>
        <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Up Coming"} movies={movies.upComingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
      {/**
       * Movie List - Popular
          - Movie Card * N
       * Movie List - Now Playing
       * Moive List - Trending
       */}
    </div>
  );
};

export default SecondaryContainer;
