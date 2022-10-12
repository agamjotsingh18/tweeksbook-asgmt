import React, { useRef } from "react";

const SignIn = ({ loginSubmit, otpSubmit, viewOtpForm }) => {
  const num1 = useRef();
  const num2 = useRef();
  const num3 = useRef();
  const num4 = useRef();
  const num5 = useRef();
  const num6 = useRef();

  const handleOtp1Change = (value) => {
    num2.current.focus();
  };

  const handleOtp2Change = (value) => {
    num3.current.focus();
  };

  const handleOtp3Change = (value) => {
    num4.current.focus();
  };

  const handleOtp4Change = (value) => {
    num5.current.focus();
  };
  const handleOtp5Change = (value) => {
    num6.current.focus();
  };
  const handleOtp6Change = (value) => {};
  return (
    <div className="wrapper">
      <h1 className="main-heading">Sign in</h1>
      <p className="sub-text">Sign in using your mobile text.</p>
      {!viewOtpForm ? (
        <div className="form-wrapper">
          <form id="loginForm" onSubmit={loginSubmit}>
            <div className="input-field">
              <label>Phone text</label>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                autoComplete="false"
              />
            </div>
            <button className="main-button" type="submit" id="sign-in-button">
              Sign in
            </button>
          </form>
        </div>
      ) : (
        <div className="form-wrapper" onSubmit={otpSubmit}>
          <form id="otpForm">
            <label>Enter OTP</label>
            <div className="input-field flex flex-row justify-center text-center px-2">
              <input
                type="number"
                className="m-2 border h-10 w-10 text-center form-control rounded"
                maxlength="1"
                name="otp_value1"
                autoComplete="false"
                onChange={(e) => handleOtp1Change(e.target.value)}
                ref={num1}
              />
              <input
                className="m-2 border h-10 w-10 text-center form-control rounded"
                maxlength="1"
                type="number"
                name="otp_value2"
                autoComplete="false"
                onChange={(e) => handleOtp2Change(e.target.value)}
                ref={num2}
              />
              <input
                className="m-2 border h-10 w-10 text-center form-control rounded"
                maxlength="1"
                type="number"
                name="otp_value3"
                autoComplete="false"
                onChange={(e) => handleOtp3Change(e.target.value)}
                ref={num3}
              />
              <input
                className="m-2 border h-10 w-10 text-center form-control rounded"
                maxlength="1"
                type="number"
                name="otp_value4"
                autoComplete="false"
                onChange={(e) => handleOtp4Change(e.target.value)}
                ref={num4}
              />
              <input
                className="m-2 border h-10 w-10 text-center form-control rounded"
                maxlength="1"
                type="number"
                name="otp_value5"
                autoComplete="false"
                onChange={(e) => handleOtp5Change(e.target.value)}
                ref={num5}
              />
              <input
                className="m-2 border h-10 w-10 text-center form-control rounded"
                maxlength="1"
                type="number"
                name="otp_value6"
                autoComplete="false"
                onChange={(e) => handleOtp6Change(e.target.value)}
                ref={num6}
              />
            </div>
            <button className="main-button" type="submit">
              Verify OTP
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;
