

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/authLayer";
import Radio from "../components/formInputs/radioInput";
import TextInput from "../components/formInputs/textInput";
import Button from "../components/buttons/Button";
import "../components/styles/reset-password.scss";
import PhoneNumberInput from "../components/formInputs/phoneNumberInput";

const RESET_OPTIONS_CONFIG = {
  email: {
    paragraph:
      "We will send you an email with instructions on how to reset your password.",
    input: <TextInput placeholder="Email" />,
    buttonLabel: "Send Email"
  },
  sms: {
    paragraph:
      "We will text you a verification code to reset your password. Message and data rates may apply.",
    input: <PhoneNumberInput />,
    buttonLabel: "Send Text"
  }
};

const ResetPasswordPage = () => {
  const [selectedOption, setSelectedOption] = useState("email");
  const [submitted, setSubmitted] = useState(false);
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    setSubmitted((prev) => !prev);
  };

  const marginTop = submitted ? "8.802vw" : "0px"
  // Retrieve the config for the selected option

  return (
    <>
      <AuthLayout headerText="Forgot Password?" marginTop={marginTop}>
        {!submitted && <ForgotPasswardForm
          handleOptionChange={handleOptionChange}
          handleSubmit={handleSubmit}
          selectedOption={selectedOption}
        />}
      {submitted && <InstructionsSentContainer/>}
      <div className="remember-account-wrapper">
        <p className="remember-account-text">Remember Account?</p>
        <Link className="signin-now-link" to="/login">
          Sign In Now
        </Link>
      </div>
      </AuthLayout>
    </>
  );
};
const ForgotPasswardForm = ({
  handleOptionChange,
  handleSubmit,
  selectedOption
}) => {
  const { paragraph, input, buttonLabel } =
    RESET_OPTIONS_CONFIG[selectedOption];
  return (
    <div className="forgot-password-form-wrapper">
      <p className="forgot-password-paragraph-1">
        Update password, email or phone
      </p>
      <p className="forgot-password-paragraph-2">
        How would you like to reset your password?
      </p>
      <div className="forgot-password-form">
        <div className="radio-options">
          <Radio
            name="resetOption"
            label="Email"
            value="email"
            checked={selectedOption === "email"}
            onChange={handleOptionChange}
          />
          <Radio
            name="resetOption"
            label="Text Message"
            value="sms"
            checked={selectedOption === "sms"}
            onChange={handleOptionChange}
          />
        </div>
        <p className="forgot-password-paragraph-3">{paragraph}</p>
        {input}
      </div>
      <Button
        className="send-email-btn"
        label={buttonLabel}
        action={handleSubmit}
      />
      
    </div>
  );
};

const InstructionsSentContainer = () => {
  return (
    <div className="instructions-sent-container">
    <h3 className="instructions-sent-header">
      Update password, email or phone
    </h3>
    <p className="instructions-sent-paragraph">
      An email with instructions on how to reset your password has been
      sent to <span className="email-span">da***********@gmail.com</span>. Check your spam or junk folder if
      you don’t see the email in your inbox.
    </p>
  </div>
  )
}
export default ResetPasswordPage;
