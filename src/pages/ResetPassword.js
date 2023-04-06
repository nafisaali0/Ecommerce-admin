import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <>
      <div
        className="py-5"
        style={{ background: " #F9BE51", minHeight: "100vh" }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
          <h3 className="text-center title">Reset Password</h3>
          <p className="text-center">Enter your new password</p>
          <form action="">
            <CustomInput type="password" label="New Password" id="pass" />
            <CustomInput type="password" label="Confirm Password" id="confirmpass" />
            <div className="mb-3 text-end">
              <Link to="forgot-password" className="text-dark">
                Reset Password
              </Link>
            </div>
            <Link
              to="/admin"
              className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
              style={{ background: " #F9BE51" }}
              type="submit"
            >
              Reset Password
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
