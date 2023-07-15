import { combineReducers, configureStore } from "@reduxjs/toolkit";
import buyBasketReducer from "../features/buyBasket/buyBasketSlice";
import userReducer from "../features/user/userSlice";
import storage  from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";


const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  buyBasket: buyBasketReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
