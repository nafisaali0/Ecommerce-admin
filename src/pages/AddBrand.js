import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createBrand, resetState } from "../features/brands/brandSlice";

let schema = yup.object().shape({
  title: yup.string().required("Brand Name is Required"),
});

const AddBrand = () => {
  const dispatch = useDispatch();
  const newBrand = useSelector((state) => state.brand);

  const { isSuccess, isError, isLoading, createdBrand, brandName } = newBrand;

  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: brandName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBrand(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 300);
    },
  });

  return (
    <>
      <div>
        <h3 className="mb-4 title">Add Brand</h3>
        <div className="py-3">
          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              name="title"
              onChange={formik.handleChange("title")}
              onBlur={formik.handleBlur("title")}
              value={formik.values.title}
              label="Enter Brand"
              id="brand"
            />
            <div className="error">
              {formik.touched.title && formik.errors.title}
            </div>
            
            <button
              className="btn btn-success border-0 rounded-3 my-3"
              type="submit"
            >
              Add Brand
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBrand;
