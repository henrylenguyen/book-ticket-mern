import moment from "moment/moment";
import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper";
import MovieCard from "./MovieCard";

const UpcommingMovies = () => {
  const { danhSachPhimSapChieu } = useSelector((state) => state.film);
  return (
    <>
      <div className="hidden lg:block">
        {danhSachPhimSapChieu.map((item) => (
          <div key={item.maPhim} className="my-5 leading-7">
            <img src={item.hinhAnh} alt="" className="rounded-xl h-[200px]" />
            <div className="content mt-5">
              <h3 className="font-bold uppercase">{item.tenPhim}</h3>
              <span className="text-[15px]">
                Dự kiến khởi chiếu:{" "}
                {moment(item.ngayKhoiChieu).format("DD/MM/YYYY")}
              </span>
              <p className="text-[#7B7B7B] text-[13px]">{item.moTa}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden mt-5">
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
      {danhSachPhimSapChieu?.map(item=>(
        <SwiperSlide key={item.maPhim}>
          <MovieCard hinhAnh={item.hinhAnh} tenPhim={item.tenPhim} danhGia={item.danhGia} ngayKhoiChieu={item.ngayKhoiChieu}></MovieCard>
        </SwiperSlide>
      ))}
        
      </Swiper>
     
      </div>
    </>
  );
};

export default UpcommingMovies;
