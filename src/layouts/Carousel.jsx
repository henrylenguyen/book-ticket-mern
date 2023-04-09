import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Keyboard, Pagination } from "swiper";
import { useSelector } from "react-redux";
const Carousel = () => {
  const { danhSachBanner } = useSelector((state) => state.banner);
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={2}
      centeredSlides={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      keyboard={{
        enabled: true,
      }}
      loop={true}
      grabCursor={true}
      modules={[Autoplay, Navigation, Keyboard, Pagination]}
      className="select-none CarouselSwiper"
    >
      {danhSachBanner?.map((item) => (
        <SwiperSlide key={item?.chiTietPhim?.maPhim}>
          <div
            className={`relative bg-cover bg-center bg-no-repeat bg-gray-300 h-[400px] rounded-3xl p-10 overflow-hidden`}
            style={{ backgroundImage: `url(${item.hinhAnh_background})` }}
          >
            <div className="overlay absolute inset-0 bg-[rgba(0,0,0,0.4)]"></div>
            <div className="content grid grid-cols-3 h-full gap-x-2 relative ">
              <div className="poster  overflow-hidden">
                <img
                  src={item?.chiTietPhim?.hinhAnh}
                  alt=""
                  className="rounded-xl h-full  object-cover"
                />
              </div>
              <div className="text p-8 col-span-2 flex flex-col gap-5">
                <h2 className="capitalize text-[25px] font-bannerFont font-semibold">
                  {item?.chiTietPhim?.tenPhim}
                </h2>
                <p className="desc text-[13px] italic">
                  {item?.chiTietPhim?.moTa}
                </p>
                <div>
                  {item?.chiTietPhim?.thongTinPhim?.theLoai?.map((tl, i) => (
                    <span
                      key={i}
                      className="px-5 py-3 bg-[rgba(255,255,255,0.1)] inline-block text-center rounded-sm mr-5"
                    >
                      {tl}
                    </span>
                  ))}
                </div>
                <div className="flex mt-5 justify-between font-semibold">
                  <button className="btnSecondary">Trailer</button>
                  <button className="btnThird">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
