import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: "",
  last: "",
};

const regSlice = createSlice({
  name: "registerday",
  initialState,
  reducers: {
    // 리듀서 안에서 만든 함수 자체가 리듀서의 로직이자, 액션크리에이터가 된다.
    register: (state, action) => {
      state.start = action.payload[0];
      state.last = action.payload[1];
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { register } = regSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default regSlice.reducer;
