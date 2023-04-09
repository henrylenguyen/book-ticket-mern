
import React from "react";
import { useNavigate } from "react-router-dom";
//npm i prop-types
const MovieCard = () => {
  const navigate = useNavigate();
  return (
    <div className="movie-card rounded-lg bgPrimary select-none">
      <img
        src="https://upload.wikimedia.org/wikipedia/vi/2/2d/Avengers_Endgame_bia_teaser.jpg"
        className="h-[300px] rounded-2xl"
        alt=""
      />
      <div className="text-white mt-2 movie-content p-3">
        <h3 className="title font-bold whitespace-nowrap overflow-hidden overflow-ellipsis capitalize">
          Người nhện: Không còn nhà
        </h3>
        <div className="flex justify-between my-5 text-[12px]">
          <span className="font-semibold">1 giờ 40 phút</span>
          <span className="font-semibold">
            8.0
            <i className="fas  fa-star ml-2 text-yellow-400"></i>
          </span>
        </div>
        <button className="btnPrimary" onClick={()=>navigate("/danh-sach-phim")}>
          Đặt vé
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
