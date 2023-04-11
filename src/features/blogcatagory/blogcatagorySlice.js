import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogcatagoryService from "./blogcatagoryService";

export const getBlogCatagories = createAsyncThunk(
  "blog-catagory/get-blog-catagories",
  async (thunkAPI) => {
    try {
      return await blogcatagoryService.getBlogCatagories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  blogCatagies: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const blogcatagorySlice = createSlice({
  name: "blogCatagies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogCatagories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogCatagories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogCatagies = action.payload;
      })
      .addCase(getBlogCatagories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default blogcatagorySlice.reducer;
