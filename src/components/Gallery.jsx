import React from "react";
import { useState, useEffect } from "react";
import GalleryVideo from "./GalleryVideo";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  const videos = [
    { src: "/gallery-vid1.mp4", poster: "/gallery-photo1.JPG" },
    { src: "/gallery-vid2.mp4", poster: "/gallery-photo1.JPG" },
    { src: "/gallery-vid3.mp4", poster: "/gallery-photo1.JPG" },
    { src: "/gallery-vid4.mp4", poster: "/gallery-photo1.JPG" },
    { src: "/gallery-vid5.mp4", poster: "/gallery-photo1.JPG" },
    { src: "/gallery-vid6.mp4", poster: "/gallery-photo1.JPG" },
  ];
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [currentIndex]);

  return (
    <section className="w-full h-full">
      <h3>Gallery</h3>
      <div
        className=" grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-14
          justify-items-center"
      >
        {videos.map((video, index) => (
          <GalleryVideo
            onClick={() => setCurrentIndex(index)}
            key={index}
            src={video.src}
            poster={video.poster}
          />
        ))}
      </div>
      {currentIndex !== null && (
        <div className="w-full h-full fixed inset-0 bg-transparent backdrop-blur-md flex items-center justify-center z-50">
          <div className="relative w-[600px] h-full flex items-center justify-center">
            <button
              className="cursor-pointer"
              onClick={() => setCurrentIndex(null)}
            >
              <FaTimes className="absolute right-7 top-7 text-3xl" />
            </button>
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + videos.length) % videos.length
                )
              }
            >
              <FaArrowLeft className="absolute top-1/2 left-5 text-3xl " />
            </button>
            <div className="w-[80%] h-[90%]">
              <video
                className="max-w-full max-h-full rounded-l"
                src={videos[currentIndex].src}
                autoPlay
                loop
                muted
                playsInline
              ></video>
            </div>
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev + 1 + videos.length) % videos.length
                )
              }
            >
              <FaArrowRight className="absolute top-1/2 right-5 text-3xl " />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
