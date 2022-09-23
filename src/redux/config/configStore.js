import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import registerday from "../modules/regday";
import existgoal from "../modules/existgoal";
import certificationReducer from "../modules/certificationSlice";
import goalReducer from "../modules/goalSlice";

const middlewares = [thunk];
const rootReducer = combineReducers({
  registerday,
  existgoal,
  certification: certificationReducer,
  goal: goalReducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: [...middlewares],
});

export default store;
