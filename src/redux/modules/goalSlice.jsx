import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const __loadMainGoal = createAsyncThunk(
  "user/MAINGOAL",
  async () => {
    const response = await api.get("/api/main/Goal_day");
    return response.data;
  }
);

const goalSlice = createSlice({
  name: "goal",
  initialState:{
    list: [],
  },
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(__loadMainGoal.fulfilled, (state, action) => {
        // console.log(action)
        // state.loading = false;
        state.list = action.payload;
        // state.session = true;
      })

  },
});

export default goalSlice.reducer;