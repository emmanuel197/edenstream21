import React, { use, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/buttons/Button";
import { closeBtn } from "../../utils/assets";
import TextInput from "../components/formInputs/textInput";
import PasswordInput from "../components/formInputs/passwordInput";
import Checkbox from "../components/formInputs/checkbox";
import "../components/styles/SignUp.scss";
import { Link } from "react-router-dom";
import AuthLayout from "../components/authLayer";
const SignInPage = () => {
  return (
    // <main>
    //   <Header />
    //   <div className="signup-form">
    //     <div className="signup-form-wrapper">
    //       <Button className="signup-close-btn" icon={closeBtn} page="/" />
    //       <div className="signup-form-container">
    //         <h2 className="signup-form-header">Sign In</h2>
    <AuthLayout headerText="Sign In">
      <div className="form-fields">
        <div className="form-row">
          <TextInput
            className="signup-textinput"
            placeholder="Email or Phone Number"
   
          />
        </div>
        <div className="form-row">
          <PasswordInput name="password" placeholder="Password" width="100%" />
        </div>
      </div>
      <div className="forget-password-wrapper">
        <Link to="/reset-password" className="forget-password-link">
          Forgot Password?
        </Link>
      </div>

      <Button className="signup-next-btn" label="Sign In" page="/" />
      <div className="checkbox-signinnow-wrapper">
        <Checkbox className="signup-checkbox" label="Remember Me" />
        {/* <p className="signup-checkbox-text">please do not email me about EdenStream Offers</p> */}

        <div className="signin-now-wrapper">
          <p className="already-have-an-account">New to EdenStreams?</p>
          <Link className="signin-now-link" to="/signup"> Sign Up Now</Link>
        </div>
      </div>
    </AuthLayout>

    //       </div>
    //     </div>
    //   </div>
    //   <Footer marginTop="5.313vw" />
    // </main>
  );
};
export default SignInPage;
