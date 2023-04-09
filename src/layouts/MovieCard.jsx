
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
//npm i prop-types
const MovieCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="movie-card rounded-lg bgPrimary select-none">
      <img
        src={props.hinhAnh}
        className="h-[300px] rounded-2xl"
        alt=""
      />
      <div className="text-white mt-2 movie-content p-3">
        <h3 className="title font-bold whitespace-nowrap overflow-hidden overflow-ellipsis capitalize">
        {props.tenPhim}
        </h3>
        <div className="flex justify-between my-5 text-[12px]">
          <span className="font-semibold">{moment(props.ngayKhoiChieu).format("DD/MM/YYYY")}</span>
          <span className="font-semibold">
            {props.danhGia}
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
