import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-44 p-2">
      <img
        className="h-[160px] md:h-[240px]"
        src={IMG_CDN_URL + posterPath}
        alt="movie-card-img"
      />
    </div>
  );
};

export default MovieCard;
