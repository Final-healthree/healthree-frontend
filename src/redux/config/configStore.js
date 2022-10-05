import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import registerday from "../modules/regday";
import existgoalSlice from "../modules/existgoalSlice";
import certificationReducer from "../modules/certificationSlice";
import goalReducer from "../modules/goalSlice";

const middlewares = [thunk];
const rootReducer = combineReducers({
  registerday,
  existgoalSlice,
  certification: certificationReducer,
  goal: goalReducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: [...middlewares],
});

export default store;
