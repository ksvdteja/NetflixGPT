import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-44 p-2">
      <img className="h-[240px]" src={IMG_CDN_URL + posterPath} alt="movie-card-img" />
    </div>
  );
};

export default MovieCard;
