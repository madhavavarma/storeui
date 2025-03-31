import { IProduct } from "@/interfaces/IProduct";

export interface ICartItem {
    product: IProduct
    quantity: number;
    totalPrice: number;
  }
  
  export interface ICartState {
    cartItems: ICartItem[];
    totalQuantity: number;
    totalPrice: number;
  }
  