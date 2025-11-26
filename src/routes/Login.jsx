import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // login / signup

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future backend authentication here
    navigate("/verify-otp");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#2b1e1b] overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b2927] via-[#4b332f] to-[#2b1e1b] animate-pulse opacity-30"></div>

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            Coffee<span className="text-[#d3a675]">Hub</span>
          </h1>
          <p className="text-[#e8d6c5] mt-1 text-sm">Your daily luxury brew</p>
        </div>

        {/* Tabs */}
        <div className="flex items-center mb-6 bg-white/10 rounded-full p-1">
          <button
            className={`w-1/2 py-2 rounded-full text-sm font-semibold transition ${mode === "login" ? "bg-[#d3a675] text-[#3b2623]" : "text-[#e8d6c5]"}`}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 rounded-full text-sm font-semibold transition ${mode === "signup" ? "bg-[#d3a675] text-[#3b2623]" : "text-[#e8d6c5]"}`}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 bg-white/10 text-white placeholder-[#e8d6c5] rounded-xl outline-none border border-white/20"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 bg-white/10 text-white placeholder-[#e8d6c5] rounded-xl outline-none border border-white/20"
          />

          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 bg-white/10 text-white placeholder-[#e8d6c5] rounded-xl outline-none border border-white/20"
            />
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#d3a675] rounded-xl text-[#3b2623] font-bold text-lg hover:bg-[#b58654] transition shadow-xl hover:shadow-2xl"
          >
            {mode === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Continue as Guest */}
        <button className="w-full mt-4 text-sm text-[#d3a675] underline hover:text-white transition" onClick={() => navigate("/")}>
          Continue as Guest
        </button>

        {/* Demo Notice */}
        <p className="text-xs text-center text-[#e8d6c5] mt-4 opacity-80">Demo Mode — Authentication backend coming soon</p>

        {/* Link to contact */}
        <p className="text-center mt-6 text-sm text-[#e8d6c5]">
          Need help?{" "}
          <Link to="/contact" className="text-[#d3a675] font-semibold hover:text-white">
            Contact Support
          </Link>
        </p>
      </div>
    </section>
  );
}
