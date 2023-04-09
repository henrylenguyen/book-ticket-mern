import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/rootSaga";
import rootReducer from "./slice/rootReducer";
// tạo middleware saga
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  composeEnhancers,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware)

})
sagaMiddleware.run(rootSaga);
export default store;