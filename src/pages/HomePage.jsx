
import Footer from 'layouts/Footer';
import LeftHomePage from 'layouts/LeftHomePage';
import RightHomePage from 'layouts/RightHomePage';
import React from 'react';
import gradient from "assets/Gradient.svg"
const HomePage = () => {
  return (
    <div className="container mx-auto relative">
      <div className=" flex gap-x-10 my-10 overflow-y-auto">
        <LeftHomePage></LeftHomePage>
        <RightHomePage></RightHomePage>
      <img src={gradient} alt="gradient" className="absolute z-[-1] opacity-[0.5] inset-0" />
      </div>
      
    </div>
  );
};

export default HomePage;