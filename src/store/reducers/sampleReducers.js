import { createSlice } from '@reduxjs/toolkit';

  // 초기설정
  const initialState = {
    userValue: {
      offair: '',
      name: '',
      phoneCode: '',
      phone: '',
      nextURL: '',
    },
    nameType: '이름',
    numberType: 0,
  };

  // 이벤트설정
export const SampleReducers = createSlice({
  name: "defaultValue",
  initialState,
  reducers: {
    fromValue: (state, action) => {
      state = action.payload.data
    },
    userValue: (state, action) => {
      state.userValue = action.payload;
    },
    numberTypeUp: (state) => {
      state.numberType += 1
    },
    numberTypeDown: (state) => {
      state.numberType -= 1
    },
  },
});

export const { fromValue, userValue, numberTypeUp, numberTypeDown } = SampleReducers.actions;
export default SampleReducers.reducer;