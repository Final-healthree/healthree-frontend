import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";

export const __addCertification = createAsyncThunk(
  "post/CERTIFICATION",
  async (payload) => {
    console.log(payload)
    const response = await api.post(`/api/main/video/${payload.goalnumber}`, payload.formdata);
    return response.data;
  }
);

export const __getMainGoal = createAsyncThunk(
  "user/MAINGOAL",
  async (payload) => {
    console.log(payload)
    const response = await api.get("/api/main/Goal_day/1", payload);
    return response.data;
  }
);

const certificationSlice = createSlice({
  name: "certification",
  initialState:{},
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(__addCertification.fulfilled, (state, action) => {
        // state.list = [action.payload, ...state.list];
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(__addCertification.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(__addCertification.pending, (state, action) => {
        state.loading = true;
      })

  },
});

export default certificationSlice.reducer;