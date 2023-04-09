import { layDanhSachBanner } from "reduxs/slice/bannerSlice"
import bannerHandle from "../handle/bannerHandleSaga"
import { takeLatest } from "redux-saga/effects"

function* bannerWatcher(){
  yield takeLatest(layDanhSachBanner.type,bannerHandle)
}
export default bannerWatcher