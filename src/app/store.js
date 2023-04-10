import { configureStore } from "@reduxjs/toolkit";
import authReduducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/products/productsSlice";
import brandReducer from "../features/brands/brandSlice";
import colorReducer from "../features/colors/colorSlice";
import productcatagoryReducer from "../features/productcatagory/productcatagorySlice";
export const store = configureStore({
  reducer: {
    auth: authReduducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    color: colorReducer,
    productcatagory: productcatagoryReducer,
  },
});
