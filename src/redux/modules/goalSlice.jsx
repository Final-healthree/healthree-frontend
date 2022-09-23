import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../../shared/api";
import serverAxios from "../../components/axios/server.axios";

export const __loadMainGoal = createAsyncThunk("user/MAINGOAL", async () => {
  const response = await serverAxios.get("/api/goals/progress");
  return response.data;
});

const goalSlice = createSlice({
  name: "goal",
  initialState: {
    list: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(__loadMainGoal.fulfilled, (state, action) => {
        // console.log(action)
        // state.loading = false;
        state.list = action.payload;
        // state.session = true;
      })
      .addCase(__loadMainGoal.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(__loadMainGoal.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default goalSlice.reducer;
