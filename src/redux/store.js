import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../services/slice/ProductSlice";

const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});

export default store;
