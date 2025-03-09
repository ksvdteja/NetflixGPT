import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BACK_GROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img className="absolute -z-10" src={NETFLIX_BACK_GROUND_IMG} alt="netflix-back-ground-img" />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
