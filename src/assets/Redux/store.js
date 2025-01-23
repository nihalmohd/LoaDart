import { configureStore } from '@reduxjs/toolkit';
import transporterReducer from "./TransporterSlice/TranporterSlice.js"

export const store = configureStore({
  reducer: {
    transporterData: transporterReducer,
  },
});

export default store;
