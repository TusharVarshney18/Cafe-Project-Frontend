import React from "react";
import { Link } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";

export default function CoffeeNavbar() {
  return (
    <nav className="w-full bg-[#4b2e2b] text-white px-6 py-4 shadow-md flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide">
        Coffee<span className="text-[#d3a675]">Hub</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-lg">
        <li>
          <Link to="/" className="hover:text-[#d3a675] transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/menu" className="hover:text-[#d3a675] transition">
            Menu
          </Link>
        </li>

        <li>
          <Link to="/services" className="hover:text-[#d3a675] transition">
            Services
          </Link>
        </li>

        <li>
          <Link to="/contact" className="hover:text-[#d3a675] transition">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/rewards" className="hover:text-[#d3a675] transition">
            Rewards
          </Link>
        </li>
      </ul>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4">
        {/* Login / Profile */}
        <Link to="/login" className="flex items-center gap-2 hover:text-[#d3a675] transition">
          <User size={22} />
          <span className="hidden md:inline">Login</span>
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="flex items-center gap-2 bg-[#d3a675] px-4 py-2 rounded-lg 
          font-semibold hover:bg-[#b58654] transition"
        >
          <ShoppingCart size={20} />
          <span className="hidden md:inline">Cart</span>
        </Link>
      </div>

      {/* TODO: Mobile menu icon (hamburger) */}
    </nav>
  );
}
