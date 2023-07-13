import { configureStore } from "@reduxjs/toolkit";
import buyBasketReducer from "../features/buyBasket/buyBasketSlice";

export const store = configureStore({
  reducer: {
    buyBasket: buyBasketReducer
  },
});
