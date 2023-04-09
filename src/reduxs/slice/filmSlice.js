import { createSlice } from "@reduxjs/toolkit";


const filmSlice = createSlice({
  name: "film",
  initialState: {
    danhSachPhimSapChieu: [],
    danhSachPhimDangChieu: [],
  },
  reducers: {
    getDanhSachPhimSapChieu(){},
    setDanhSachPhimSapChieu: (state,{payload})=>{
      return{
        ...state,
        danhSachPhimSapChieu: payload
      }
    },
    layDanhSachPhimDangChieu(){},
    setDanhSachPhimDangChieu: (state,{payload})=>{
      return{
        ...state,
        danhSachPhimDangChieu: payload
      }
    },
  }
})
export const {getDanhSachPhimSapChieu,setDanhSachPhimSapChieu,layDanhSachPhimDangChieu,setDanhSachPhimDangChieu} = filmSlice.actions;
export default filmSlice.reducer;