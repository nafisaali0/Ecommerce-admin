import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
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

export const createProductCategory = createAsyncThunk(
  "product-catagory/create-product-catagories",
  async (categoryData, thunkAPI) => {
    try {
      return await productcatagoryService.createProductCategory(categoryData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("RevertAll");

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
      })
      .addCase(createProductCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProductCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdProductCategory = action.payload;
      })
      .addCase(createProductCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default productCatagorySlice.reducer;
