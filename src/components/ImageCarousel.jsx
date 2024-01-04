import React, { useState,useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const ImageCarousel = ({ images, links }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1000px)");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
    setCurrentLinkIndex((currentLinkIndex + 1) % links.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1) % images.length);
    setCurrentLinkIndex((currentLinkIndex - 1) % links.length);
  };
  
  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [currentImageIndex, currentLinkIndex]);

  
  return (
    <div>
      {isAboveLarge && images.length > 1  ? (
        <div className="flex items-center">
          <button
            className="p-4 bg-blue-500 text-white"
            onClick={prevImage}
          >
            <img className="h-20" src="../assets/left.svg" alt="prev" />
          </button>
          <div className="w-[90vw] flex justify-center">
            <a
              className="hover:opacity-50 transition duration-500"
              href={`${links[currentLinkIndex]}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-auto h-[95vh] px-2 "
                src={images[currentImageIndex]}
                alt="Carousel"
              />
            </a>
          </div>
          <button
            className="p-4 bg-blue-500 text-white"
            onClick={nextImage}
          >
            <img className="h-20" src="../assets/right.svg" alt="next" />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          {images.map((image, index) => (
            <div key={index} className="py-2">
              <a
                className="hover:opacity-50 transition duration-500"
                href={links[index]}
                target="_blank"
                rel="noreferrer"
              >
                <img
                className="w-screen h-auto"
                src={image}
                alt={`Carousel ${index}`}
              />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
