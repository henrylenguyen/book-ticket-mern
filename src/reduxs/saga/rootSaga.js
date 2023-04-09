import {all,fork} from "redux-saga/effects"
import bannerWatcher from "./watcher/bannerWatcher";
import filmWatcher from "./watcher/filmWatcher";
// import bannerHandle from "./handle/bannerHandleSaga";
function* rootSaga(){
  yield all([fork(bannerWatcher),fork(filmWatcher)])
}
export default rootSaga;