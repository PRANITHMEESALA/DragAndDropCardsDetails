import React from "react";
import "./cardDetailsForm.css";
function OTPSuccessPopup(props) {
  return (
    <div>
      <div className="cardModal">
        <div className="otpPopup">
          OTP Send Successfully
          <button onClick={props.goBack}>Ok</button>
        </div>
      </div>
    </div>
  );
}

export default OTPSuccessPopup;
