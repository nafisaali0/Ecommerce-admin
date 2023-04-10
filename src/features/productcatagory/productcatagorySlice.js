import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productcatagoryService from "./productcatagoryService";

export const getProductCatagories = createAsyncThunk(
  "product-catagory/get-product-catagories",
  async (thunkAPI) => {
    try {
      return await productcatagoryService.getProductCatagory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  productCatagories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const productCatagorySlice = createSlice({
  name: "productCatagories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCatagories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCatagories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.productCatagories = action.payload;
      })
      .addCase(getProductCatagories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default productCatagorySlice.reducer;
