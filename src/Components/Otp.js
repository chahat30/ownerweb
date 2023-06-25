import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import '../css/otp.css'

const Otp = () => {
    const [otp, setOtp] = React.useState("");

    const handleChange = (newValue) => {
        setOtp(newValue);
    };

    const handleOTP = async () => {
        
    } 

    return (
        <div className="container-fluid otpContainer">
            <h1>OTP Verification</h1>
            <div className="container sentContainer">
                <p style={{fontWeight: 600}}>A One time password has been sent to the email</p>
                <p style={{fontWeight: 600, marginTop: -6}}>mridulverma478@gmail.com</p>
            </div>
            <div className="otp">
                <MuiOtpInput value={otp} onChange={handleChange} />
            </div>
            <a className="resendLink" href="/">resend OTP in 01:59</a>
            <button onClick={handleOTP} className="btn btn-primary submitBtn">Submit OTP</button>
        </div>
    );
};

export default Otp;