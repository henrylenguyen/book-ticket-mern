import { combineReducers } from "@reduxjs/toolkit";
import bannerSlice from "./bannerSlice";

const rootReducer = combineReducers({
  banner:bannerSlice
})
export default rootReducer;