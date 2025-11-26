import React from "react";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-b from-[#3b2522] to-[#2a1a18] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Let’s Brew Something Amazing Together</h2>
          <p className="mt-3 text-lg text-[#e8d6c5]">For catering, corporate events, collaborations, or franchise inquiries</p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/10">
            <form className="grid gap-6">
              <div className="relative">
                <input type="text" required className="w-full bg-transparent border-b border-[#d3a675] focus:outline-none focus:border-white text-lg pb-2" />
                <label className="absolute left-0 top-[-10px] text-[#d3a675] text-sm font-medium">Full Name</label>
              </div>

              <div className="relative">
                <input type="email" required className="w-full bg-transparent border-b border-[#d3a675] focus:outline-none focus:border-white text-lg pb-2" />
                <label className="absolute left-0 top-[-10px] text-[#d3a675] text-sm font-medium">Email Address</label>
              </div>

              <div className="relative">
                <input type="tel" className="w-full bg-transparent border-b border-[#d3a675] focus:outline-none focus:border-white text-lg pb-2" />
                <label className="absolute left-0 top-[-10px] text-[#d3a675] text-sm font-medium">Phone Number (optional)</label>
              </div>

              <select className="bg-transparent border-b border-[#d3a675] pb-2 text-lg focus:outline-none">
                <option className="text-black">General Inquiry</option>
                <option className="text-black">Event Catering</option>
                <option className="text-black">Franchise Partnership</option>
                <option className="text-black">Bulk Orders</option>
              </select>

              <div className="relative">
                <textarea
                  rows={4}
                  required
                  className="w-full resize-none bg-transparent border-b border-[#d3a675] focus:outline-none focus:border-white text-lg pb-2"
                ></textarea>
                <label className="absolute left-0 top-[-10px] text-[#d3a675] text-sm font-medium">Your Message</label>
              </div>

              <button className="mt-4 w-full py-4 bg-[#d3a675] text-[#3b2623] rounded-xl font-bold text-lg hover:bg-[#b58654] transition-all shadow-xl hover:shadow-2xl">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Visit Us</h3>
            <p className="text-[#e8d6c5] text-lg">
              CoffeeHub, Delhi, India
              <br />
              Open: 9:00 AM – 11:00 PM
            </p>

            <p className="text-[#e8d6c5] text-lg">
              Email: support@coffeehub.com
              <br />
              Phone: +123456789
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
