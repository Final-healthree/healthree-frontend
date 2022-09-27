import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { __loadMainGoal } from "./goalSlice";
import serverAxios from "../../components/axios/server.axios";

export const __addCertification = createAsyncThunk(
  "post/CERTIFICATION",
  async (payload, thunkAPI) => {
    const response = await serverAxios.post(
      `/api/videos/${payload.number}`,
      payload.formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    thunkAPI.dispatch(__loadMainGoal());
    return response.data;
  }
);

export const __addFail = createAsyncThunk(
  "goal/FAIL",
  async (payload, thunkAPI) => {
    const response = await serverAxios.patch(
      `api/goals/fail/${payload}`,
      payload
    );
    return response.data;
  }
);

const certificationSlice = createSlice({
  name: "certification",
  initialState: {
    list: [],
    status: "",
  },
  reducers: {
    ModalDoor: (state, action) => {
      state.list = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(__addCertification.fulfilled, (state, action) => {
        // state.list = [action.payload, ...state.list];
        state.list = action.payload;
        state.status = "complete";
      })
      .addCase(__addCertification.rejected, (state, action) => {
        state.status = "false";
      })
      .addCase(__addCertification.pending, (state, action) => {
        state.status = "동영상을 합치는 중입니다...";
      })
      .addCase(__addFail.fulfilled, (state, action) => {
        // state.list = [action.payload, ...state.list];
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(__addFail.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(__addFail.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export const { ModalDoor } = certificationSlice.actions;
export default certificationSlice.reducer;
