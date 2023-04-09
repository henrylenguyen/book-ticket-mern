
import phimAPI from "API/filmAPI";
import { SUCCESS } from "constants/status";
import {call,put} from "redux-saga/effects"
import { setDanhSachPhimDangChieu } from "reduxs/slice/filmSlice";
import { setDanhSachPhimSapChieu } from "reduxs/slice/filmSlice";

const filmHandle = {
  PhimSapChieu: function* PhimSapChieuHandle(){
    try {
      let res = yield call(phimAPI.layDanhSachPhimSapChieu)
      if(res.status ===SUCCESS){
        yield put(setDanhSachPhimSapChieu( res.data.content))
      }
    } catch (error) {
      console.log(error)
    }
  },
  PhimDangChieu: function* PhimDangChieuHandle(){
    try {
      let res = yield call(phimAPI.layDanhSachPhimDangChieu)
      console.log("file: filmHandleSage.js:21 ~ res:", res)
      if(res.status ===SUCCESS){
        yield put(setDanhSachPhimDangChieu( res.data.content))
      }
    } catch (error) {
      console.log(error)
    }
  }
}
export default filmHandle;