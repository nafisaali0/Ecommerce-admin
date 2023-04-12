import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createColor, resetState } from "../features/colors/colorSlice";

let schema = yup.object().shape({
  title: yup.string().required("Color is Required"),
});

const AddColor = () => {
  const dispatch = useDispatch();
  const newColor = useSelector((state) => state.color);
  const {
    isSuccess,
    isError,
    isLoading,
    createdColor,
    colorName,
  } = newColor;
  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError, isLoading, createdColor]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: colorName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createColor(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 300);
    },
  });
  return (
    <>
      <div>
        <h3 className="mb-4 title">Add Color</h3>
        <div className="py-3">
          <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
          type="color"
          label="Enter Product Color"
          onChange={formik.handleChange("title")}
          onBlur={formik.handleBlur("title")}
          value={formik.values.title}
          id="color"
        />
        <div className="error">
          {formik.touched.title && formik.errors.title}
        </div>
            <button
              className="btn btn-success border-0 rounded-3 my-3"
              type="submit"
            >
              Add Color
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddColor;
