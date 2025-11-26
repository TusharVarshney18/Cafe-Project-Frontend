import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-10 px-6 bg-[#2a1a18] text-[#e8d7c9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Brand */}
        <div className="text-2xl font-bold tracking-wide">
          Coffee<span className="text-[#d3a675]">Hub</span>
          <p className="text-sm mt-2 text-[#cbb8a8]">Brewed with passion, served with love.</p>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-6 text-sm font-medium">
          <Link to="/privacy" className="hover:text-[#d3a675] transition">
            Privacy Policy
          </Link>
          <Link to="/termsandconditions" className="hover:text-[#d3a675] transition">
            Terms & Conditions
          </Link>
        </div>

        {/* Social + Credits */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-xs text-[#bba89a]">
            Designed & Developed by <span className="text-[#d3a675] font-semibold">Tushar Varshney</span>
          </p>
          <p className="text-xs text-[#9f8c7c]">© {new Date().getFullYear()} CoffeeHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
