import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 md:pt-80 px-8 md:px-16 absolute text-white bg-transparent">
      <h1 className="text-2xl md:text-6xl p-2 md:p-0 font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-2/5">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-1 md:p-2 px-8 md:px-12 mx-1 md:mx-2 text-2xl font-bold cursor-pointer rounded-md hover:bg-gray-300">
          {/* <img
            className="w-10 h-10 bg-white px-10"
            src="https://miro.medium.com/v2/da:true/resize:fit:768/1*IDJ4x4E-bOypnEZdA5TGHQ.gif"
            alt=""
          /> */}
          Play
        </button>
        <button className="bg-gray-600 opacity-70 text-white p-1 md:p-2 px-6 md:px-12 mx-1 md:mx-2 text-2xl font-bold cursor-pointer rounded-md hover:bg-gray-200">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
