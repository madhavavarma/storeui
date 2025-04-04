import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    Cart: CartSlice.reducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
