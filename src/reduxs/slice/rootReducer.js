import { combineReducers } from "@reduxjs/toolkit";
import bannerSlice from "./bannerSlice";
import filmSlice from "./filmSlice";

const rootReducer = combineReducers({
  banner:bannerSlice,
  film:filmSlice
})
export default rootReducer;