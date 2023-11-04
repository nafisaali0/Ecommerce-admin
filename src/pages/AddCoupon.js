import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createCoupon, resetState } from "../features/coupon/couponSlice";

let schema = yup.object().shape({
  name: yup.string().required("Coupon Name is Required"),
  expiery: yup.date().required("Expiry Date is Required"),
  discount: yup.number().required("Discount Percentage is Required"),
});

const AddCoupon = () => {
  const dispatch = useDispatch();
  const newCoupon = useSelector((state) => state.coupon);

  const {
    isSuccess,
    isError,
    isLoading,
    createdCoupon,
    couponName,
    couponDiscount,
    couponExpiry,
  } = newCoupon;

  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Coupon Added Successfullly!");
    }

    if (isError && couponName && couponDiscount && couponExpiry) {
      toast.error("Something Went Wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, isLoading]);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: couponName || "",
      expiery: couponExpiry || "",
      discount: couponDiscount || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createCoupon(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">Add Coupon</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="name"
            onChange={formik.handleChange("name")}
            onBlur={formik.handleBlur("name")}
            value={formik.values.name}
            label="Enter Coupon Name"
            id="name"
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <CustomInput
            type="date"
            name="expiery"
            onChange={formik.handleChange("expiery")}
            onBlur={formik.handleBlur("expiery")}
            value={formik.values.expiery}
            label="Enter Expiry Date"
            id="date"
          />
          <div className="error">
            {formik.touched.expiery && formik.errors.expiery}
          </div>
          <CustomInput
            type="number"
            name="discount"
            onChange={formik.handleChange("discount")}
            onBlur={formik.handleBlur("discount")}
            value={formik.values.discount}
            label="Enter Discount"
            id="discount"
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
