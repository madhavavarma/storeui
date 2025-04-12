import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductState } from "./interfaces/IProductState";
import { IProduct } from "@/interfaces/IProduct";

const initialState: IProductState = {
  products: [],
  productDetail: null
};


const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state:IProductState, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
        },

        setProductDetail: (state:IProductState, action: PayloadAction<IProduct | null>) => {
            state.productDetail = action.payload
        }

    }
});

export const ProductActions = ProductSlice.actions;

export default ProductSlice;