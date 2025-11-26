export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#fff9f3] to-[#f3e5d0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4b2e2b] leading-tight">Our Story</h2>

          <p className="mt-4 text-base sm:text-lg text-[#6b4f4f] leading-relaxed">
            At CoffeeHub, we roast small-batch beans, source directly from farmers, and craft every cup with passion.
          </p>

          <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-base sm:text-lg font-medium">
            <li className="flex items-center gap-3 justify-center md:justify-start text-[#4b2e2b]">
              <span className="w-3 h-3 bg-[#d3a675] rounded-full"></span>
              Ethically-sourced beans
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start text-[#4b2e2b]">
              <span className="w-3 h-3 bg-[#d3a675] rounded-full"></span>
              Expert baristas
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start text-[#4b2e2b]">
              <span className="w-3 h-3 bg-[#d3a675] rounded-full"></span>
              Fresh daily roast
            </li>
          </ul>
        </div>

        {/* Right Image - mobile fix */}
        <div className="flex justify-center md:justify-end animate-fadeInUp animation-delay-300">
          <div className="relative w-full flex justify-center">
            <img
              src="/assets/coffiebeans.png"
              alt="coffee beans"
              className="w-[85%] sm:w-[70%] md:w-[90%] max-w-[380px] 
              mt-4 sm:mt-6 md:mt-0 rounded-3xl shadow-2xl object-cover 
              hover:scale-105 transition-transform duration-500 ease-out"
            />

            <div className="absolute inset-0 rounded-3xl blur-3xl bg-[#d3a675]/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
