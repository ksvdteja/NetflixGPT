import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-80 px-16 absolute text-white bg-transparent">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/5">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 px-12 mx-2 text-2xl font-bold cursor-pointer rounded-md hover:bg-gray-300">
          {/* <img
            className="w-10 h-10 bg-white px-10"
            src="https://miro.medium.com/v2/da:true/resize:fit:768/1*IDJ4x4E-bOypnEZdA5TGHQ.gif"
            alt=""
          /> */}
          Play
        </button>
        <button className="bg-gray-300 opacity-50 text-white p-2 px-12 mx-2 text-2xl font-bold cursor-pointer rounded-md hover:bg-gray-200">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
