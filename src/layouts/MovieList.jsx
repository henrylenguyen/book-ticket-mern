import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MovieCard from "./MovieCard";
import {Keyboard } from "swiper";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const MovieList = ({title}) => {
  // const navigate = Navigate();
  const {danhSachPhimDangChieu} = useSelector(state=>state.film)
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
      {danhSachPhimDangChieu?.map(item=>(
        <SwiperSlide key={item.maPhim}>
          <MovieCard hinhAnh={item.hinhAnh} tenPhim={item.tenPhim} danhGia={item.danhGia} ngayKhoiChieu={item.ngayKhoiChieu}></MovieCard>
        </SwiperSlide>
      ))}
        
      </Swiper>
    </div>
  );
};

export default MovieList;
