// jshint esversion:9
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'; //must import every reducer

export default configureStore({
  reducer: {
    counter: counterReducer, //<= Makes the store available to all components in the application
  },
});
