import { createSlice } from "@reduxjs/toolkit";
import { initialProducts } from "../../products/initialProductsState";

const initialState = {
  products: initialProducts,
};

export const buyBasketSlice = createSlice({
  name: "buyBasket",
  initialState,
  reducers: {
    addOrIncrementProduct: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      product.count++;
      product.totalPrice = product.price * product.count;
    },
    decrementProduct: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      product.count--;
      product.totalPrice = product.price * product.count;
    },
    deleteProduct: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      product.count = 0;
      delete product.totalPrice;
    },
  },
});

export const { addOrIncrementProduct, decrementProduct, deleteProduct } =
  buyBasketSlice.actions;
export default buyBasketSlice.reducer;
