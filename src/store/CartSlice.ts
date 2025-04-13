// store/CartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartState, ICartItem } from "./interfaces/ICartState";
import { IOption } from "@/interfaces/IProduct";
import { ICheckout } from "@/interfaces/ICheckout";

const initialState: ICartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  checkoutData: {
    phone: "",
    email: "",
    whatsapp: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "cod",
  },
};

const formatPrice = (price: number) => parseFloat(price.toFixed(2));

const areOptionsEqual = (
  options1: { [variantName: string]: IOption },
  options2: { [variantName: string]: IOption }
) => {
  const keys1 = Object.keys(options1 || {});
  const keys2 = Object.keys(options2 || {});
  if (keys1.length !== keys2.length) return false;

  return keys1.every(
    (key) => options2[key] && options1[key]?.id === options2[key]?.id
  );
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCart: (state, action: PayloadAction<ICartState>) => {
      state.cartItems = action.payload.cartItems;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
      state.checkoutData = action.payload.checkoutData;
    },

    addItem: (state: ICartState, action: PayloadAction<ICartItem>) => {
      const { product, selectedOptions, quantity } = action.payload;

      const existingItem = state.cartItems.find(
        (item) =>
          item.product.id === product.id &&
          areOptionsEqual(item.selectedOptions, selectedOptions)
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = formatPrice(
          existingItem.totalPrice + product.price * quantity
        );
      } else {
        state.cartItems.push({
          product,
          selectedOptions,
          quantity,
          totalPrice: formatPrice(product.price * quantity),
        });
      }

      state.totalQuantity += quantity;
      state.totalPrice = formatPrice(state.totalPrice + product.price * quantity);
    },

    removeItem: (
      state: ICartState,
      action: PayloadAction<{
        productId: number;
        selectedOptions: { [variantName: string]: IOption };
      }>
    ) => {
      const index = state.cartItems.findIndex(
        (item) =>
          item.product.id === action.payload.productId &&
          areOptionsEqual(item.selectedOptions, action.payload.selectedOptions)
      );

      if (index !== -1) {
        const item = state.cartItems[index];
        state.totalQuantity -= item.quantity;
        state.totalPrice = formatPrice(state.totalPrice - item.totalPrice);
        state.cartItems.splice(index, 1);
      }
    },

    increaseQuantity: (
      state: ICartState,
      action: PayloadAction<{
        productId: number;
        selectedOptions: { [variantName: string]: IOption };
      }>
    ) => {
      const item = state.cartItems.find(
        (item) =>
          item.product.id === action.payload.productId &&
          areOptionsEqual(item.selectedOptions, action.payload.selectedOptions)
      );

      if (item) {
        item.quantity += 1;
        item.totalPrice = formatPrice(item.totalPrice + item.product.price);
        state.totalQuantity += 1;
        state.totalPrice = formatPrice(state.totalPrice + item.product.price);
      }
    },

    decreaseQuantity: (
      state: ICartState,
      action: PayloadAction<{
        productId: number;
        selectedOptions: { [variantName: string]: IOption };
      }>
    ) => {
      const item = state.cartItems.find(
        (item) =>
          item.product.id === action.payload.productId &&
          areOptionsEqual(item.selectedOptions, action.payload.selectedOptions)
      );

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

    setCheckoutData: (state: ICartState, action: PayloadAction<ICheckout>) => {
      state.checkoutData = action.payload;
    },
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;