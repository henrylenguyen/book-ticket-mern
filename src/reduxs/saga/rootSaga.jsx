import {all,fork} from "redux-saga/effects"
import bannerWatcher from "./watcher/bannerWatcher";
// import bannerHandle from "./handle/bannerHandleSaga";
function* rootSaga(){
  yield all([fork(bannerWatcher)])
}
export default rootSaga;