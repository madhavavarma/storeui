import { ICheckout } from "@/interfaces/ICheckout";
import { IOption, IProduct } from "@/interfaces/IProduct";

export interface ICartItem {
  product: IProduct;
  selectedOptions: { [variantName: string]: IOption };
  quantity: number;
  totalPrice: number;
}

export interface ICartState {
  cartItems: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
  checkoutData?: ICheckout;
}
  