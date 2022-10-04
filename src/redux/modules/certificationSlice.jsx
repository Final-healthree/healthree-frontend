import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serverAxios from "../../components/axios/server.axios";

export const __addCertification = createAsyncThunk(
  "post/CERTIFICATION",
  async (payload, thunkAPI) => {
    try{
      const response = await serverAxios.post(
      `/api/videos/${payload.number}`,
      payload.formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }

    )
    return 'day'+payload.number;
    }
    catch(err){
      console.log(err)
      alert(err.response.data.message);
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
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

export const __loadMainGoal = createAsyncThunk("user/MAINGOAL", 
  async (payload, thunkAPI) => {
    const response = await serverAxios.get("/api/goals/progress");
    return response.data;
});

const certificationSlice = createSlice({
  name: "certification",
  initialState: {
    list: [],
    status: "",
    toggle: false,
    errmsg: [],
    order: ["","",""],
  },
  reducers: {
    ModalDoor: (state, action) => {
      state.list = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(__addCertification.fulfilled, (state, {payload}) => {
        state.list.result[payload].uploaded = true;
        state.status = "";
        state.toggle = true;
      })
      .addCase(__addCertification.rejected, (state, action) => {
        state.status = action.payload;
        state.errmsg = action.payload;
        state.order = action.payload.number;
        console.log(action.payload);
        // state.order[action.payload.number] = action.payload.message
      })
      .addCase(__addCertification.pending, (state, action) => {
        state.status = "영상을 처리 중입니다...";
      })
      .addCase(__addFail.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(__addFail.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(__addFail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(__loadMainGoal.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "";
      })
      .addCase(__loadMainGoal.rejected, (state, action) => {
        state.status = "false";
      })
      .addCase(__loadMainGoal.pending, (state, action) => {
        state.status = "Loading";
      });
  },
});

export const { ModalDoor } = certificationSlice.actions;
export default certificationSlice.reducer;
