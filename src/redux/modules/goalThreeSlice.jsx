import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serverAxios from "../../components/axios/server.axios";

export const __loadMainGoalthree = createAsyncThunk("user/MAINGOAL", 
  async (payload, thunkAPI) => {
    console.log(payload)
    const response = 
    await serverAxios.get(`/api/goals/progress?goal_id=${payload.goalThirdResult}`, 
    payload.goalThirdResult)
    return response.data;
});
const goalSlice = createSlice({
  name: "goalThree",
  initialState: {
    list: [],
    status: "",
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(__loadMainGoalthree.fulfilled, (state, action) => {
        // console.log(action)
        // state.loading = false;
        // state.session = true;
        state.list = action.payload;
        state.status = "complete";
      })
      .addCase(__loadMainGoalthree.rejected, (state, action) => {
        state.status = "false";
      })
      .addCase(__loadMainGoalthree.pending, (state, action) => {
        state.status = "Loading";
      });
  },
});

export default goalSlice.reducer;
