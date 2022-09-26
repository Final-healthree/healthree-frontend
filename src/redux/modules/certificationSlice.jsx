import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";
import { __loadMainGoal } from "./goalSlice";


export const __addCertification = createAsyncThunk(
  "post/CERTIFICATION",
  async (payload, thunkAPI) => {
    console.log(payload)
    const response = await api.post(`/api/videos/${payload.number}`, payload.formData, 
    {
      headers: {
      "Content-Type": "multipart/form-data",
      },
    }
      );
    thunkAPI.dispatch(__loadMainGoal())
    return response.data;
  }
);

const certificationSlice = createSlice({
  name: "certification",
  initialState: {
    list: [],
  },
  reducers: {
    ModalDoor: (state, action) => {
      state.value = action.payload;
    },
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
      });
  },
});

export const { ModalDoor } = certificationSlice.actions;
export default certificationSlice.reducer;
