export function CoffeeHeader() {
  return (
    <header className="w-full bg-[#f5ebe0] px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14 md:gap-20">
        {/* Left Side Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4b2e2b] leading-tight">
            Start Your Day With a Perfect Cup
          </h1>

          <p className="mt-4 text-lg text-[#6b4f4f]">
            Experience the warmth and aroma of freshly brewed coffee crafted
            with passion.
          </p>

          <button className="mt-6 bg-[#4b2e2b] text-white px-9 py-3 rounded-lg shadow-md hover:bg-[#402522] transition">
            Explore Menu
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/coffie.png"
            alt="coffee"
            className="w-[80%] max-w-md md:max-w-lg object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </header>
  );
}
