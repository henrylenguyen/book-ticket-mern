import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    danhSachBanner: [],
  },
  reducers: {
    layDanhSachBanner(){},
    GanDanhSachBanner: (state,{payload})=>{
      return{
        ...state,
        danhSachBanner: payload
      }
    }
  }
})
export const {layDanhSachBanner,GanDanhSachBanner} = bannerSlice.actions;
export default bannerSlice.reducer;