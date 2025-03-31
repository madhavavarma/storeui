import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState } from "./interfaces/ICart";
import { IProduct } from "@/interfaces/IProduct";

const initialState: ICartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const formatPrice = (price: number) => parseFloat(price.toFixed(2));

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: ICartState, action: PayloadAction<IProduct>) => {
      const existingItem = state.cartItems.find(item => item.product.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = formatPrice(existingItem.totalPrice + action.payload.price);
      } else {
        state.cartItems.push({ 
          product: action.payload, 
          quantity: 1, 
          totalPrice: formatPrice(action.payload.price) 
        });
      }
      state.totalQuantity += 1;
      state.totalPrice = formatPrice(state.totalPrice + action.payload.price);
    },
    removeItem: (state: ICartState, action: PayloadAction<number>) => {
      const itemIndex = state.cartItems.findIndex(item => item.product.id === action.payload);
      if (itemIndex !== -1) {
        state.totalQuantity -= state.cartItems[itemIndex].quantity;
        state.totalPrice = formatPrice(state.totalPrice - state.cartItems[itemIndex].totalPrice);
        state.cartItems.splice(itemIndex, 1);
      }
    },
    increaseQuantity: (state: ICartState, action: PayloadAction<number>) => {
      const item = state.cartItems.find(item => item.product.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.totalPrice = formatPrice(item.totalPrice + item.product.price);
        state.totalQuantity += 1;
        state.totalPrice = formatPrice(state.totalPrice + item.product.price);
      }
    },
    decreaseQuantity: (state: ICartState, action: PayloadAction<number>) => {
      const item = state.cartItems.find(item => item.product.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = formatPrice(item.totalPrice - item.product.price);
        state.totalQuantity -= 1;
        state.totalPrice = formatPrice(state.totalPrice - item.product.price);
      }
    },
    clearCart: (state: ICartState) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

// Export actions
export const CartActions = CartSlice.actions;

// Export reducer
export default CartSlice;
