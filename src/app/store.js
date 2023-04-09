import { configureStore } from "@reduxjs/toolkit";
import authReduducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";


export const store = configureStore({
  reducer: {
    auth: authReduducer,
    customer: customerReducer,
    
  },
});
