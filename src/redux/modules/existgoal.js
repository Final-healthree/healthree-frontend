import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exist: false,
};

const existgoalSlice = createSlice({
  name: "existgoal",
  initialState,
  reducers: {
    // 리듀서 안에서 만든 함수 자체가 리듀서의 로직이자, 액션크리에이터가 된다.
    existgoal: (state, action) => {
      state.exist = action.payload.exist;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { existgoal } = existgoalSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default existgoalSlice.reducer;
