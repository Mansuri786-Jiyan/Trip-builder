import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import tourReducer from "./slices/tourSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    tour: tourReducer,
  },
});
