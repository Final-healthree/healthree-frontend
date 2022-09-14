import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import registerday from "../modules/regday";
import certificationReducer from "../modules/certificationSlice";

const middlewares = [thunk];
const rootReducer = combineReducers({
  registerday,
  certification: certificationReducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: [...middlewares],
});

export default store;
