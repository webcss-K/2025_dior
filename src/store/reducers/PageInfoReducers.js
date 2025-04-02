import { createSlice } from '@reduxjs/toolkit';

  // 초기설정
  const initialState = {
    PageValue: {
      key: '', // 페이지 고유 ID
    }
  };

  // 이벤트설정
export const PageInfoReducers = createSlice({
  name: "PageValue",
  initialState,
  reducers: {
    PageValue: (state, action) => {
      state.PageValue = action.payload
    }
  },
});

export const { PageValue } = PageInfoReducers.actions;
export default PageInfoReducers.reducer;