
import React from 'react';
import { Carousel } from "@material-tailwind/react";

const Hero = () => {
    return (
    <div className="flex justify-center items-center h-300 bg-white">
      <Carousel
        className="max-w-screen-xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 rounded-xl">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="/slider02.svg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/slider06.svg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="/slider03.svg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default Hero;
