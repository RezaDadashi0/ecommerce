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
      state.products.find(p => p.id === action.payload.id).count++;
    },
    decrementProduct: (state, action) => {
      state.products.find(p => p.id === action.payload.id).count--;
    },
    deleteProduct: (state, action) => {
      state.products.find(p => p.id === action.payload.id).count = 0;
    },
  },
});

export const { addOrIncrementProduct, decrementProduct, deleteProduct } = buyBasketSlice.actions;
export default buyBasketSlice.reducer;
