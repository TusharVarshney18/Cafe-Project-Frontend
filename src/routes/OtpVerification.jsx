import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OtpVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length !== 4) return alert("Enter valid 4-digit OTP");
    // Demo only
    localStorage.setItem("user", JSON.stringify({ demo: true }));
    navigate("/");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#2b1e1b]">
      <div className="relative w-full max-w-md bg-white/10 rounded-3xl border border-white/20 p-10 backdrop-blur-2xl shadow-2xl text-center">
        <h2 className="text-3xl font-bold text-white">Verify your Email</h2>
        <p className="text-[#e8d6c5] mt-3">Enter the OTP we sent to your email address.</p>

        {/* OTP Inputs */}
        <div className="mt-8 flex justify-center gap-4">
          {otp.map((v, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              maxLength="1"
              value={v}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-14 h-14 text-center text-2xl font-bold bg-white/10 text-white border border-white/20 rounded-xl outline-none focus:border-[#d3a675]"
            />
          ))}
        </div>

        {/* Timer + Resend */}
        <p className="mt-6 text-[#e8d6c5]">
          Resend code in <span className="text-[#d3a675] font-semibold">{String(timer).padStart(2, "0")}s</span>
        </p>

        {/* Verify */}
        <button
          onClick={handleVerify}
          className="w-full mt-8 py-3 bg-[#d3a675] text-[#3b2623] rounded-xl font-extrabold text-lg shadow-xl hover:bg-[#b58654] transition"
        >
          Verify & Continue
        </button>

        {/* Back */}
        <button className="w-full mt-4 text-[#d3a675] text-sm underline hover:text-white" onClick={() => navigate("/login")}>
          Change Email
        </button>
      </div>
    </section>
  );
}
