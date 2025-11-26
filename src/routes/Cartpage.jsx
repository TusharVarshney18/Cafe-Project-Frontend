import React from "react";
import { useCart, useCartDispatch } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // or useRouter for Next.js

export default function CartPage() {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const navigate = useNavigate();

  const subtotal = cart.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0);

  function removeItem(name) {
    dispatch({ type: "REMOVE_ITEM", payload: { name } });
  }

  function updateQty(name, qty) {
    dispatch({ type: "UPDATE_QTY", payload: { name, qty } });
  }

  function handleCheckout() {
    // Example: go to /order or call backend to create order
    // For demo, navigate to a simple order page
    navigate("/checkout");
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-[#4b2e2b] mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-[#6b4f4f]">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((it) => (
              <div
                key={it.name}
                className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
              >
                <img
                  src={it.img || "/assets/coffie.png"}
                  alt={it.name}
                  className="h-20 w-20 object-cover rounded"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-lg text-[#4b2e2b]">
                        {it.name}
                      </div>
                      <div className="text-sm text-[#6b4f4f]">{it.desc}</div>
                    </div>
                    <div className="text-lg font-bold text-[#4b2e2b]">
                      ₹{(it.price || 0) * (it.qty || 1)}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => updateQty(it.name, (it.qty || 1) - 1)}
                      className="px-3 py-1 border rounded"
                    >
                      -
                    </button>
                    <div className="px-3">{it.qty || 1}</div>
                    <button
                      onClick={() => updateQty(it.name, (it.qty || 1) + 1)}
                      className="px-3 py-1 border rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeItem(it.name)}
                      className="ml-6 text-sm text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end items-center gap-6">
            <div className="text-lg text-[#6b4f4f]">Subtotal:</div>
            <div className="text-2xl font-bold text-[#4b2e2b]">₹{subtotal}</div>
            <button
              onClick={handleCheckout}
              className="px-6 py-3 bg-[#d3a675] rounded-lg text-white"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
