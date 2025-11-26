export function Testimonials() {
  const testimonials = [
    {
      name: "Aisha Verma",
      role: "Regular Customer",
      quote: "The aroma, the consistency, the flavor — CoffeeHub has redefined my mornings. Easily the best coffee experience in the city.",
      img: "/assets/user1.jpg",
    },
    {
      name: "Rohan Sharma",
      role: "Cold Brew Lover",
      quote: "Their cold brew hits the perfect balance — smooth, refreshing, and rich. You can taste the quality in every sip.",
      img: "/assets/user2.jpg",
    },
    {
      name: "Sarah Mathews",
      role: "Designer & Food Blogger",
      quote: "The café theme, the ambience, the taste — everything feels thoughtfully crafted. A premium experience worth every visit.",
      img: "/assets/user3.jpg",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f5ebe0]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#3b2d2b] tracking-tight">What Our Guests Say</h2>

        <p className="mt-3 text-[#7a6b66] max-w-xl mx-auto text-base md:text-lg">Honest words from our community who enjoy the craft behind every cup.</p>

        {/* Testimonials */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-[#eee5de] hover:shadow-md transition group">
              {/* Avatar */}
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full overflow-hidden shadow-md">
                  <img src={t.img} alt={t.name} className="h-full w-full object-cover" />
                </div>
              </div>

              {/* Quote */}
              <p className="mt-6 text-[#6b4f4f] italic leading-relaxed text-[15px]">“{t.quote}”</p>

              {/* Name */}
              <div className="mt-5 font-semibold text-[#3b2d2b] text-lg">{t.name}</div>

              <div className="text-sm text-[#8a7b76]">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
