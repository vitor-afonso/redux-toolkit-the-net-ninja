//jshint esversion:9
// this file have the state, the actions and the reducers all in one place
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// to be imported and used in the components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// to be imported and added to the store
export default counterSlice.reducer;
