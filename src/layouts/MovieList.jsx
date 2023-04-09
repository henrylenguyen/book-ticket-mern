import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MovieCard from "./MovieCard";
import {Keyboard } from "swiper";
import { Navigate } from "react-router-dom";
const MovieList = ({title}) => {
  // const navigate = Navigate();
  return (
    <div className="movie-list my-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-title">{title}</h2>
        <button className="italic text-[13px]" >
          Xem tất cả
        </button>
      </div>
      <Swiper
        grabCursor={true}
        spaceBetween={40}
        slidesPerView={"auto"}
        keyboard={{
          enabled: true,
        }}
        loop={true}
        modules={[Keyboard]}
      >
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
