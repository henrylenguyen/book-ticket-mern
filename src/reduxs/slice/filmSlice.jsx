import { createSlice } from "@reduxjs/toolkit";


const filmSlice = createSlice({
  name: "film",
  initialState: {
    danhSachPhimSapChieu: [],
  },
  reducers: {
    getDanhSachPhimSapChieu(){},
    setDanhSachPhimSapChieu: (state,{payload})=>{
      return{
        ...state,
        danhSachPhimSapChieu: payload
      }
    }
  }
})
export const {getDanhSachPhimSapChieu,setDanhSachPhimSapChieu} = filmSlice.actions;
export default filmSlice.reducer;