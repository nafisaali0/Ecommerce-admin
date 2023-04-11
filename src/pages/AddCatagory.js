import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createProductCategory, resetState } from "../features/productcatagory/productcatagorySlice";

let schema = yup.object().shape({
  title: yup.string().required("Category Name is Required"),
});

const AddCatagory = () => {
  const dispatch = useDispatch();
  const newCategory = useSelector((state) => state.productcatagory);
  const {
    isSuccess,
    isError,
    isLoading,
    createdProductCategory,
    categoryName,
  } = newCategory;

  useEffect(() => {
    if (isSuccess && createdProductCategory) {
      toast.success("Category Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: categoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createProductCategory(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 300);
    },
  });
  return (
    <>
      <div>
        <h3 className="mb-4  title">Add Category</h3>
        <div className="py-3">
          <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter Product Category"
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
            value={formik.values.title}
            id="pcatagory"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
            <button
              className="btn btn-success border-0 rounded-3 my-3"
              type="submit"
            >
              Add Category
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCatagory;
