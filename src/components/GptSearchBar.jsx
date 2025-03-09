import React, { useRef } from "react";

const GptSearchBar = () => {

  const searchText = useRef(null);

  const handleGptSearchClick = () => {
    console.log(searchText.current.value);
  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black opacity-80 grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 h-10 bg-white rounded-sm"
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
