import { takeLatest } from "redux-saga/effects"
import { getDanhSachPhimSapChieu } from "reduxs/slice/filmSlice"
import filmHandle from "../handle/filmHandleSage"
import { layDanhSachPhimDangChieu } from "reduxs/slice/filmSlice"

function* filmWatcher(){
  yield takeLatest(getDanhSachPhimSapChieu.type,filmHandle.PhimSapChieu)
  yield takeLatest(layDanhSachPhimDangChieu.type,filmHandle.PhimDangChieu)
}
export default filmWatcher