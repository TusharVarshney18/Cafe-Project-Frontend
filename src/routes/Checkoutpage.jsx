import React from "react";
import { useCart, useCartDispatch } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const delivery = subtotal > 0 ? 20 : 0; // flat delivery for example
  const total = subtotal + delivery;

  function handlePlaceOrder(e) {
    e.preventDefault();
    if (!cart.length) return;

    // backend order API goes here

    alert("Order placed successfully!");

    // professional reset: clear cart after successful order
    dispatch({ type: "CLEAR_CART" });

    navigate("/");
  }

  return (
    <div className="min-h-screen bg-[#f5ebe0] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-[#e3d3c5]">
        {/* Title */}
        <h1 className="text-4xl font-bold text-[#4b2e2b]">Checkout</h1>
        <p className="text-[#6b4f4f] mt-2">Complete your order details below</p>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {/* LEFT SIDE — FORM */}
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold text-[#4b2e2b] mb-4">Contact Information</h2>

              <input required type="text" placeholder="Full Name" className="w-full p-3 rounded-xl bg-[#f3e5d0] outline-none mb-3" />

              <input required type="email" placeholder="Email" className="w-full p-3 rounded-xl bg-[#f3e5d0] outline-none mb-3" />

              <input required type="tel" placeholder="Phone Number" className="w-full p-3 rounded-xl bg-[#f3e5d0] outline-none" />
            </div>

            {/* Delivery */}
            <div>
              <h2 className="text-2xl font-semibold text-[#4b2e2b] mb-4">Delivery Address</h2>

              <textarea required rows="4" placeholder="Enter your address" className="w-full p-3 rounded-xl bg-[#f3e5d0] outline-none"></textarea>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-2xl font-semibold text-[#4b2e2b] mb-4">Payment Method</h2>

              <select required className="w-full p-3 bg-[#f3e5d0] rounded-xl outline-none">
                <option value="">Select Payment Method</option>
                <option value="cod">Cash on Delivery</option>
                <option value="upi">UPI</option>
                <option value="card">Credit/Debit Card</option>
              </select>
            </div>

            {/* Place Order Button */}
            <button type="submit" className="w-full bg-[#4b2e2b] text-white py-3 mt-4 rounded-xl text-lg font-semibold hover:bg-[#3a1f1e] transition">
              Place Order
            </button>
          </form>

          {/* RIGHT SIDE — SUMMARY */}
          <div>
            <h2 className="text-2xl font-semibold text-[#4b2e2b] mb-4">Order Summary</h2>

            {cart.length === 0 ? (
              <p className="text-[#6b4f4f]">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.name} className="flex justify-between bg-[#f8f1e7] p-4 rounded-xl">
                    <div>
                      <div className="font-semibold text-[#4b2e2b]">{item.name}</div>
                      <div className="text-sm text-[#6b4f4f]">Qty: {item.qty}</div>
                    </div>
                    <div className="font-bold text-[#4b2e2b]">₹{item.price * item.qty}</div>
                  </div>
                ))}

                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-between mb-2 text-[#4b2e2b]">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>

                  <div className="flex justify-between mb-2 text-[#4b2e2b]">
                    <span>Delivery</span>
                    <span>₹{delivery}</span>
                  </div>

                  <div className="flex justify-between font-semibold text-xl text-[#4b2e2b] mt-4">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
