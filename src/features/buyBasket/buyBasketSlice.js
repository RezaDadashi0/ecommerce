import { createSlice } from "@reduxjs/toolkit";
import { initialProducts } from "../../products/initialProductsState";

const initialState = {
  products: initialProducts,
};

export const buyBasketSlice = createSlice({
  name: "buyBasket",
  initialState,
  reducers: {
    addProductToBuyBasket: (state, action) => {
      state.products.find(p => p.id === action.payload.id).count++;
    },
    // incrementProduct: state => {}
    // decrementProduct: state => {},
    deleteProductFromBuyBasket: (state, action) => {
      state.products.filter(p => p.id !== action.payload);
    },
  },
});

export const { addProductToBuyBasket, deleteProductFromBuyBasket } =
  buyBasketSlice.actions;
export default buyBasketSlice.reducer;
