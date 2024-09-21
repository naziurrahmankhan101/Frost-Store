import React, { useState, useEffect } from "react";

export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fa41a267479915.5b3c3e178d903.jpg",
    },
    {
      imgelink:
        "https://i.pinimg.com/originals/e3/e0/73/e3e07399487d39279a7f2440d6022f86.jpg",
    },
    {
      imgelink:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/afe980102152387.5f302fbf2fc20.jpg",
    },
    {
      imgelink:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ff871f110895621.5ff7694a30ccb.jpg",
    },
    {
      imgelink:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e1e85718858907.5603f46ab2966.jpg",
    },
    {
        imgelink:
          "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5ffe2531767843.565f77eac3879.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [data.length]);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full px-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px] transition duration-500 ease-in-out transform hover:scale-105"
              src={data[activeIndex].imgelink}
              alt=""
            />
          </div>
          <div className="grid grid-cols-6 gap-2">
            {data.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  onClick={() => handleThumbnailClick(index)}
                  src={imgelink}
                  className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center transition duration-300 ease-in-out transform hover:scale-105 ${
                    index === activeIndex ? "border-2 border-blue-500" : ""
                  }`}
                  alt="gallery-thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
