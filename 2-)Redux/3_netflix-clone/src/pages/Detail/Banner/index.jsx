import React from "react";
import imageUrl from "../../../constants";

const Banner = ({ movie }) => {
  return (
    <div className="h-[20vh] md:h-[30vh] relative drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] ">
      <img
        src={imageUrl + movie.backdrop_path}
        className="size-full object-cover rounded-sm"
        alt=""
      />

      <div className="absolute inset-0  grid place-items-center bg-black  p-3 opacity-40">
        <h2 className="text-3xl md:text-4xl font-mono font-semibold text-center">
          {movie.title}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
