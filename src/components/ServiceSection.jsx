export function ServicesSection() {
  const services = [
    {
      title: "Dine-In & Experience",
      desc: "A curated café environment with handcrafted beverages, premium seating, and a warm Nordic ambience.",
      icon: "/assets/Dine‑In&Experience.png",
    },
    {
      title: "Online Ordering",
      desc: "Seamless ordering for quick pickup or delivery — crafted with the same café-grade quality.",
      icon: "/assets/OnlineOrdering.png",
    },
    {
      title: "Event Catering",
      desc: "Signature coffee bars for weddings, corporate events, shoots, and luxury gatherings.",
      icon: "/assets/CoffeeCatering.png",
    },
    {
      title: "Corporate Coffee Bar",
      desc: "A full barista setup at your office or event, complete with equipment, staff, and menu.",
      icon: "/assets/CorporateCoffeeBar.png",
    },
    {
      title: "Monthly Subscriptions",
      desc: "Freshly roasted blends delivered every month — crafted for home brewers and coffee enthusiasts.",
      icon: "/assets/CoffeeSubscription.png",
    },
    {
      title: "Workshops & Masterclasses",
      desc: "Exclusive sessions on latte art, brewing science, tasting profiles, and barista craftsmanship.",
      icon: "/assets/CoffeeWorkshops.png",
    },
  ];

  return (
    <section className="relative py-28 px-6 bg-[#f5ebe0]">
      {/* Section subtle vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-[#f0e9e0]/60"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#2e2523] tracking-tight">Crafted Services</h2>
          <p className="text-[#7a6b66] mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of high-end offerings designed to elevate your everyday coffee experience.
          </p>
        </div>

        {/* Luxury Grid */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {services.map((s) => (
            <div
              key={s.title}
              className="
                group bg-white/80 backdrop-blur-xl border border-[#e8ded5]
                rounded-3xl p-10 shadow-[0_2px_20px_rgba(0,0,0,0.05)]
                hover:shadow-[0_6px_30px_rgba(0,0,0,0.08)]
                transition-all duration-500 hover:-translate-y-2 relative overflow-hidden
              "
            >
              {/* Soft gold highlight */}
              <div
                className="
                  absolute inset-0 bg-gradient-to-br from-transparent via-[#d3a675]/10 to-transparent 
                  opacity-0 group-hover:opacity-100 transition duration-700
                "
              ></div>

              {/* Icon (large, elegant) */}
              <div className="w-full flex justify-center">
                <div className="h-28 w-28 rounded-2xl bg-[#faf4ef] shadow-inner flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 duration-500">
                  <img src={s.icon} alt={s.title} className="h-20 w-20 object-contain opacity-90 group-hover:opacity-100 transition" />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-semibold text-[#2e2523] leading-tight">{s.title}</h3>

              {/* Description */}
              <p className="mt-4 text-[#7a6b66] text-sm leading-relaxed">{s.desc}</p>

              {/* Luxury gold line */}
              <div className="mt-6 h-[2px] w-12 bg-[#d3a675] rounded-full group-hover:w-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
