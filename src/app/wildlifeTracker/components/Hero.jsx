import React from "react";
import heroCover from "../assets/deforestation-watch.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-48">
        <div className="absolute z-20 w-full h-full">
          <div className="flex flex-col w-full h-full justify-center items-center text-center">
            <div className="flex flex-col text-white w-full md:w-1/2 lg:w-5/12 h-full justify-center gap-10">
              <div className="flex flex-col gap-1">
                <p className="text-lg sm:text-lg md:text-2xl font-semibold tracking-wider">
                  ~ Wildlife Tracker ~
                </p>
                <p className="text-sm tracking-wide text-neutral-300 leading-relaxed">
                  Embark on a journey of wildlife discovery, identifying and
                  monitoring species to preserve biodiversity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 w-full h-full bg-black opacity-60"></div>
        <div className="absolute z-0 w-full">
          <img
            src={heroCover}
            alt="hero cover"
            className="object-cover w-full h-48"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
