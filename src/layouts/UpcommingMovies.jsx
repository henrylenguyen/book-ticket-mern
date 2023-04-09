import React from 'react';

const UpcommingMovies = () => {
  return (
    <>
      <div className="my-5 leading-7">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg"
          alt=""
          className="rounded-xl h-[200px]"
        />
        <div className="content mt-5">
          <h3 className="font-bold uppercase">Người nhện: Không còn nhà</h3>
          <span className="text-[15px]">Dự kiến khởi chiếu: 25/05/2023</span>
          <p className="text-[#7B7B7B] text-[13px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius nam
            fuga animi pariatur deserunt vel quos? Sunt, ad? Voluptatem
            veritatis asperiores quod ut nesciunt incidunt reiciendis quas!
            Nesciunt, voluptas omnis.
          </p>
        </div>
      </div>
    </>
  );
};

export default UpcommingMovies;