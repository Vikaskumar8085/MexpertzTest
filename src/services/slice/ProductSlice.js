import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const ProductSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
