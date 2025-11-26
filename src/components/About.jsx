export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#fff9f3] to-[#f3e5d0]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4b2e2b] leading-tight">
            Our Story
          </h2>

          <p className="mt-5 text-lg text-[#6b4f4f] leading-relaxed">
            At CoffeeHub, we roast small-batch beans, source directly from
            farmers, and craft every cup with passion. From classic espresso to
            seasonal specialties — every sip tells a story.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-[#4b2e2b]">
              <span className="w-3 h-3 bg-[#d3a675] rounded-full"></span>
              Ethically-sourced beans
            </li>
            <li className="flex items-center gap-3 text-[#4b2e2b]">
              <span className="w-3 h-3 bg-[#d3a675] rounded-full"></span>
              Expert baristas
            </li>
            <li className="flex items-center gap-3 text-[#4b2e2b]">
              <span className="w-3 h-3 bg-[#d3a675] rounded-full"></span>
              Fresh daily roast
            </li>
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center animate-fadeInUp animation-delay-300">
          <div className="relative">
            <img
              src="/assets/coffiebeans.png"
              alt="coffee beans"
              className="w-[85%] md:w-[90%] rounded-3xl shadow-2xl object-cover 
              hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Soft Glow Behind Image */}
            <div className="absolute inset-0 rounded-3xl blur-3xl bg-[#d3a675]/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
