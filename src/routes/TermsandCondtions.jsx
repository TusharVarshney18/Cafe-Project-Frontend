import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="px-6 py-20 bg-[#f8f3ec] text-[#4b2e2b]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#4b2e2b]">Terms & Conditions</h1>
        <p className="mt-3 text-[#6b4f4f]">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mt-6 leading-relaxed">
          These Terms & Conditions apply to the usage of the <strong>CoffeeHub</strong> demo project. This website is developed for educational and portfolio
          purposes and does not represent a real business.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Use of Website</h2>
        <p className="mt-3 leading-relaxed">
          The content, products, pricing, and features shown on this platform are simulated and should not be considered real commercial offerings. Any order,
          payment, or checkout flows are part of the demonstration only.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Orders & Payments</h2>
        <p className="mt-3 leading-relaxed">
          Live transactions are not supported. If you interact with the cart or checkout process, it is solely for sample experience.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Refund Policy</h2>
        <p className="mt-3 leading-relaxed">
          As no real payments or orders occur, refunds are not applicable. All activity is part of a functional demonstration only.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">Contact & Support</h2>
        <p className="mt-3 leading-relaxed">
          For project feedback or collaboration opportunities, contact the developer:
          <br />
          <strong>tusharvarshney1810@gmail.com</strong>
        </p>

        <p className="mt-8 text-sm text-[#6b4f4f] italic">Note: This project is created for learning and portfolio showcase purposes only.</p>
      </div>
    </section>
  );
}
