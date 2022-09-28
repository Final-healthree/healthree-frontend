import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";
import serverAxios from "../../components/axios/server.axios";

export const __loadMainGoal = createAsyncThunk("user/MAINGOAL", 
  async (payload, thunkAPI) => {
    const response = await serverAxios.get("/api/goals/progress");
    return response.data;
});


const goalSlice = createSlice({
  name: "goal",
  initialState: {
    list: [],
    status: "",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(__loadMainGoal.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'complete';
      })
      .addCase(__loadMainGoal.rejected, (state, action) => {
        state.status = 'false';
      })
      .addCase(__loadMainGoal.pending, (state, action) => {
        state.status = 'Loading';
      });
  },
});

export default goalSlice.reducer;
