import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import enquaryService from "./enquaryService";

export const getEnquaries = createAsyncThunk(
  "enquary/get-enquaries",
  async (thunkAPI) => {
    try {
      return await enquaryService.getEnquaries();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  enquaries: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const enquarySlice = createSlice({
  name: "enquaries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEnquaries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquaries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.enquaries = action.payload;
      })
      .addCase(getEnquaries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default enquarySlice.reducer;
