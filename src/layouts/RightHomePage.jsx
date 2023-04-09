import React from 'react';
import UpcommingMovies from './UpcommingMovies';
import popCorn from "assets/images/popcorn.png"
const RightHomePage = () => {
  return (
    <div className=" upcomming md:w-[25%] overflow-auto flex-grow">
      <div className=" h-screen">
        <div className="flex justify-between">
          <div className='flex'>
            <h2 className="text-title">Phim Sắp Chiếu</h2>
            <img src={popCorn} alt="popCorn" className="w-[20px]" />
          </div>
          <button className="italic text-[13px]" >
          Xem tất cả
        </button>
          </div>
        <UpcommingMovies></UpcommingMovies>
       
      </div>
    </div>
  );
};

export default RightHomePage;