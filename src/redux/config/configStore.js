import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import registerday from "../modules/regday";

const middlewares = [thunk];
const rootReducer = combineReducers({
  registerday,
});


// const store = configureStore({
//   reducer: rootReducer,

//   middleware: [...middlewares],
// });

// export default store;
