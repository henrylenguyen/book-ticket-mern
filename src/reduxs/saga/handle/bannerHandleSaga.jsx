
import bannerAPI from "API/bannerAPI";
import { SUCCESS } from "constants/status";
import {call,put} from "redux-saga/effects"
import { GanDanhSachBanner } from "reduxs/slice/bannerSlice";

function* bannerHandle(){
  try {
    let res = yield call(bannerAPI.layDanhSachBanner)
    if(res.status ===SUCCESS){
      yield put(GanDanhSachBanner( res.data.content))
    }
  } catch (error) {
    console.log(error)
  }
}
export default bannerHandle;