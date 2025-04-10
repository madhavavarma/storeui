import { IOption, IProduct } from "@/interfaces/IProduct";

export interface ICartItem {
  product: IProduct;
  quantity: number;
  totalPrice: number;
  selectedOptions: { [variantName: number]: IOption };
}
  
  export interface ICartState {
    cartItems: ICartItem[];
    totalQuantity: number;
    totalPrice: number;
  }
  