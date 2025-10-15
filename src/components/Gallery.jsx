import React from "react";
import { useState, useEffect } from "react";
import GalleryVideo from "./GalleryVideo";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";

import { Pagination, Navigation } from "swiper/modules";

const Gallery = () => {
  const videos = [
    { src: "/IMG_3641.mp4", poster: "/IMG_3654.JPG" },
    { src: "/gallery-vid3.mp4", poster: "/gallery-photo1.JPG" },
    { src: "/IMG_3637.mp4", poster: "/IMG_3639.JPG" },
    { src: "/gallery-vid6.mp4", poster: "/IMG_3650.JPG" },
    { src: "/IMG_3653.mp4", poster: "/IMG_3648.jpg" },
    { src: "/gallery-vid2.mp4", poster: "/IMG_3644.JPG" },
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
    <section
      id="galeria"
      className="w-full h-full py-15 md:py-30 flex flex-col justify-center items-center "
    >
      <h2 className="font-bold text-5xl">Galeria</h2>
      <div className="w-[100%] md:w-[80%] ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="relative w-full h-[600px] "
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <GalleryVideo
                onClick={() => setCurrentIndex(index)}
                src={video.src}
                poster={video.poster}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {currentIndex !== null && (
        <div
          onClick={() => setCurrentIndex(null)}
          className="w-full h-full fixed inset-0 bg-transparent backdrop-blur-md flex items-center justify-center z-50"
        >
          <button
            className="cursor-pointer"
            onClick={() => setCurrentIndex(null)}
          >
            <FaTimes className="absolute right-5 top-5 text-4xl z-40" />
          </button>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="relative w-[450px] md:w-[800px] h-auto flex items-center justify-center "
          >
            <button
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + videos.length) % videos.length
                )
              }
            >
              <MdArrowBackIos className="absolute top-1/2 left-2 text-4xl cursor-pointer  hover:text-white/70" />
            </button>
            <div className="w-[85%]  flex items-center justify-center">
              <video
                className=" w-full h-full rounded-lg max-h-[80vh] "
                src={videos[currentIndex].src}
                autoPlay
                loop
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
              <MdArrowForwardIos className="absolute top-1/2 right-0 text-4xl  cursor-pointer  hover:text-white/70" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
