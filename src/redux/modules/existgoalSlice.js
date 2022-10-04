import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serverAxios from "../../components/axios/server.axios";

const initialState = {
  exist: false,
  isLoading: false,
  error: null,
};

export const __existGoal = createAsyncThunk(
  "main/existgoal",
  async (payload, thunkAPI) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      const data = await serverAxios.get(`api/goals/exist`);
      console.log(data.data.result);
      return thunkAPI.fulfillWithValue(data.data.result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const existgoalSlice = createSlice({
  name: "existgoal",
  initialState,
  reducers: {
    // 리듀서 안에서 만든 함수 자체가 리듀서의 로직이자, 액션크리에이터가 된다.
    existgoal: (state, action) => {
      state.exist = action.payload;
    },
  },
  extraReducers: {
    [__existGoal.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__existGoal.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.exist = action.payload; // Store에 있는 exist 서버에서 가져온 exist 넣습니다.
    },
    [__existGoal.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { existgoal } = existgoalSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default existgoalSlice.reducer;
