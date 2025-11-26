import React from "react";

export default function Rewards() {
  const points = localStorage.getItem("user") ? 120 : 0; // Demo

  return (
    <section className="min-h-screen bg-[#2b1e1b] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold">Loyalty Rewards</h1>
        <p className="text-[#e8d6c5] mt-3 text-lg">Earn points for every purchase & redeem them for free coffee.</p>

        {/* Points Card */}
        <div className="mt-10 bg-white/10 border border-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl">
          <h2 className="text-6xl font-extrabold text-[#d3a675]">{points}</h2>
          <p className="mt-2 text-lg">Current Reward Points</p>

          <button className="mt-6 bg-[#d3a675] text-[#3b2623] font-bold px-8 py-3 rounded-xl hover:bg-[#b58654] shadow-lg transition">Redeem Rewards</button>
        </div>

        {/* How it works */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold text-[#d3a675]">Earn</h3>
            <p className="text-[#e8d6c5] mt-2">₹1 spent = 1 point</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#d3a675]">Redeem</h3>
            <p className="text-[#e8d6c5] mt-2">200 points = Free Coffee</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#d3a675]">VIP Tier</h3>
            <p className="text-[#e8d6c5] mt-2">Become Gold at 1000 points</p>
          </div>
        </div>
      </div>
    </section>
  );
}
