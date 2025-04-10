import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import ProductSlice from "./ProductSlice";
import CategorySlice from "./CategorySlice";

export const store = configureStore({
  reducer: {
    Cart: CartSlice.reducer,
    Products: ProductSlice.reducer,
    Categories: CategorySlice.reducer
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
