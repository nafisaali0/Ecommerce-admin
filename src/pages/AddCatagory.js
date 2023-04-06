import React from "react";
import CustomInput from "../components/CustomInput";

const AddCatagory = () => {
  return (
    <>
      <div>
        <h3 className="mb-4  title">Add Category</h3>
        <div className="py-3">
          <form action="">
            <CustomInput type="text" label="Enter Category" />
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
