import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import registerday from "../modules/regday";
import certificationReducer from "../modules/certificationSlice";
import goalReducer from "../modules/goalSlice";
// import getToken from "../modules/getToken";

const middlewares = [thunk];
const rootReducer = combineReducers({
  registerday,
  certification: certificationReducer,
  goal: goalReducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: [...middlewares],
});

export default store;
