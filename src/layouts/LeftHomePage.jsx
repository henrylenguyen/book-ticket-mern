import React, { useEffect, useRef } from "react";
import Carousel from "./Carousel";
import MovieList from "./MovieList";
import { useDispatch } from "react-redux";
import { layDanhSachBanner } from "reduxs/slice/bannerSlice";
import { getDanhSachPhimSapChieu } from "reduxs/slice/filmSlice";
import { layDanhSachPhimDangChieu } from "reduxs/slice/filmSlice";

const LeftHomePage = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
 useEffect(() => {
   const height = ref.current.offsetHeight;
   dispatch(layDanhSachBanner())
   dispatch(getDanhSachPhimSapChieu())
   dispatch(layDanhSachPhimDangChieu())
 }, []);
  return (
    <div className=" leftHomePage p-5 w-full lg:w-[75%]" ref={ref}>
      <Carousel></Carousel>
      <MovieList title={"Phim đang chiếu"}></MovieList>
      <MovieList title={"Đề xuất cho bạn"}></MovieList>
    </div>
  );
};

export default LeftHomePage;
