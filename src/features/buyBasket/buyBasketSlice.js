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
    resetProducts: state => {
      state.products.forEach(p => {
        p.count = 0;
        delete p.totalPrice;
      });
    },
  },
});

export const {
  addOrIncrementProduct,
  decrementProduct,
  deleteProduct,
  resetProducts,
} = buyBasketSlice.actions;
export default buyBasketSlice.reducer;
