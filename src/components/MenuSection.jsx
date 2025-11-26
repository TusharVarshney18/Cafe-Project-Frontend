import React, { useEffect, useMemo, useState } from "react";
import { useCart, useCartDispatch } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export function MenuSection() {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const navigate = useNavigate();

  // ---------- Sale settings (editable) ----------
  const SALE_START = new Date(new Date().getFullYear(), 11, 20); // Dec 20
  const SALE_END = new Date(new Date().getFullYear(), 11, 26); // Dec 26
  const now = new Date();
  const [forceSale, setForceSale] = useState(false); // dev toggle to preview
  const isSaleActive = forceSale || (now >= SALE_START && now <= SALE_END);

  // ---------- Countdown ----------
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    if (!isSaleActive) {
      setTimeLeft("");
      return;
    }
    const update = () => {
      const diff = SALE_END.getTime() - Date.now0();
      if (diff <= 0) {
        setTimeLeft("Sale ended");
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${d}d ${h}h ${m}m ${s}s`);
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, [isSaleActive]);

  const items = useMemo(
    () => [
      // ===== COFFEE ===== (Expand to 8-10 items)
      {
        category: "Coffee",
        name: "Espresso",
        price: 80,
        salePrice: isSaleActive ? 60 : null,
        priceText: "₹80",
        saleText: "₹60",
        desc: "Single-origin shot, short and intense. Notes: cocoa, caramel.",
        tags: ["Single-Origin", "Shot"],
        img: "/assets/Espresso.png",
      },
      {
        category: "Coffee",
        name: "Cappuccino",
        price: 120,
        salePrice: isSaleActive ? 95 : null,
        priceText: "₹120",
        saleText: "₹95",
        desc: "Silky microfoam over balanced espresso. 150ml cup.",
        tags: ["Medium Roast", "Milk"],
        img: "/assets/Cappuccino.png",
      },
      {
        category: "Coffee",
        name: "Flat White",
        price: 140,
        salePrice: isSaleActive ? 115 : null,
        priceText: "₹140",
        saleText: "₹115",
        desc: "Double ristretto with velvety micro-foam. 180ml.",
        tags: ["Velvety", "Signature"],
        img: "/assets/flatwhite.png",
      },
      {
        category: "Coffee",
        name: "Americano",
        price: 100,
        salePrice: isSaleActive ? 80 : null,
        priceText: "₹100",
        saleText: "₹80",
        desc: "Double espresso diluted with hot water. Bold and smooth.",
        tags: ["Classic", "Black"],
        img: "/assets/Americano.png",
      },
      {
        category: "Coffee",
        name: "Latte",
        price: 130,
        salePrice: isSaleActive ? 105 : null,
        priceText: "₹130",
        saleText: "₹105",
        desc: "Smooth espresso with steamed milk. Light and creamy. 240ml.",
        tags: ["Milk", "Popular"],
        img: "/assets/Latte.png",
      },
      {
        category: "Coffee",
        name: "Mocha",
        price: 150,
        salePrice: isSaleActive ? 125 : null,
        priceText: "₹150",
        saleText: "₹125",
        desc: "Rich chocolate blended with espresso and milk. Topped with cream.",
        tags: ["Chocolate", "Sweet"],
        img: "/assets/Mocha.png",
      },
      {
        category: "Coffee",
        name: "Cold Brew",
        price: 140,
        salePrice: isSaleActive ? 115 : null,
        priceText: "₹140",
        saleText: "₹115",
        desc: "Slow-steeped 16 hours. Smooth, low-acid, served over ice.",
        tags: ["Iced", "Refreshing"],
        img: "/assets/ColdBrew.png",
      },
      {
        category: "Coffee",
        name: "Cortado",
        price: 110,
        salePrice: isSaleActive ? 90 : null,
        priceText: "₹110",
        saleText: "₹90",
        desc: "Equal parts espresso and steamed milk. Balanced intensity.",
        tags: ["Classic", "Balanced"],
        img: "/assets/Cortado.png",
      },

      // ===== SNACKS ===== (5-6 items)
      {
        category: "Snacks",
        name: "Paneer Wrap",
        price: 120,
        salePrice: isSaleActive ? 95 : null,
        priceText: "₹120",
        saleText: "₹95",
        desc: "Grilled paneer, house-herb sauce, greens.",
        tags: ["Vegetarian"],
        img: "/assets/pannerwrap.png",
      },
      {
        category: "Snacks",
        name: "Chicken Sandwich",
        price: 140,
        salePrice: isSaleActive ? 115 : null,
        priceText: "₹140",
        saleText: "₹115",
        desc: "Grilled chicken breast, lettuce, tomato, mayo on sourdough.",
        tags: ["Protein"],
        img: "/assets/ChickenSandwich.png",
      },
      {
        category: "Snacks",
        name: "Veg Club Sandwich",
        price: 130,
        salePrice: isSaleActive ? 105 : null,
        priceText: "₹130",
        saleText: "₹105",
        desc: "Triple-decker with cucumber, tomato, cheese, mint chutney.",
        tags: ["Vegetarian", "Fresh"],
        img: "/assets/VegClubSandwich.png",
      },
      {
        category: "Snacks",
        name: "Croissant",
        price: 90,
        salePrice: isSaleActive ? 70 : null,
        priceText: "₹90",
        saleText: "₹70",
        desc: "Buttery, flaky French croissant. Freshly baked daily.",
        tags: ["Baked", "Classic"],
        img: "/assets/Croissant.png",
      },
      {
        category: "Snacks0",
        name: "Bagel with Cream Cheese",
        price: 100,
        salePrice: isSaleActive ? 80 : null,
        priceText: "₹100",
        saleText: "₹80",
        desc: "Toasted sesame bagel with herb cream cheese spread.",
        tags: ["Vegetarian"],
        img: "/assets/bagel.png",
      },
      {
        category: "Snacks",
        name: "Bruschetta",
        price: 110,
        salePrice: isSaleActive ? 90 : null,
        priceText: "₹110",
        saleText: "₹90",
        desc: "Toasted bread with tomato, basil, garlic, olive oil.",
        tags: ["Vegetarian", "Italian"],
        img: "/assets/bruschetta.png",
      },

      // ===== DESSERTS ===== (5-6 items)
      {
        category: "Desserts",
        name: "Blueberry Cheesecake",
        price: 150,
        salePrice: isSaleActive ? 125 : null,
        priceText: "₹150",
        saleText: "₹125",
        desc: "Cream cheese base with real blueberry compote.",
        tags: ["Premium", "Dessert"],
        img: "/assets/BlueberryCheesecake.png",
      },
      {
        category: "Desserts",
        name: "Chocolate Brownie",
        price: 120,
        salePrice: isSaleActive ? 95 : null,
        priceText: "₹120",
        saleText: "₹95",
        desc: "Rich, fudgy brownie with chocolate chunks. Served warm.",
        tags: ["Chocolate", "Popular"],
        img: "/assets/chocolatebrownie.png",
      },
      {
        category: "Desserts",
        name: "Tiramisu",
        price: 160,
        salePrice: isSaleActive ? 135 : null,
        priceText: "₹160",
        saleText: "₹135",
        desc: "Espresso-soaked ladyfingers, mascarpone cream, cocoa dust.",
        tags: ["Premium", "Italian"],
        img: "/assets/tiramisu.png",
      },
      {
        category: "Desserts",
        name: "Apple Pie",
        price: 130,
        salePrice: isSaleActive ? 105 : null,
        priceText: "₹130",
        saleText: "₹105",
        desc: "Classic apple pie with cinnamon. Served with vanilla ice cream.",
        tags: ["Classic", "Warm"],
        img: "/assets/applepie.png",
      },
      {
        category: "Desserts",
        name: "Red Velvet Cake",
        price: 140,
        salePrice: isSaleActive ? 115 : null,
        priceText: "₹140",
        saleText: "₹115",
        desc: "Moist red velvet with cream cheese frosting.",
        tags: ["Premium", "Sweet"],
        img: "/assets/redvelvetcake.png",
      },
      {
        category: "Desserts",
        name: "Lemon Tart",
        price: 125,
        salePrice: isSaleActive ? 100 : null,
        priceText: "₹125",
        saleText: "₹100",
        desc: "Tangy lemon curd in buttery pastry shell. Light and refreshing.",
        tags: ["Citrus", "Fresh"],
        img: "/assets/lemontart.png",
      },

      // ===== DRINKS ===== (6-8 items)
      {
        category: "Drinks",
        name: "Mango Smoothie",
        price: 130,
        salePrice: isSaleActive ? 105 : null,
        priceText: "₹130",
        saleText: "₹105",
        desc: "Fresh Alphonso mangoes, chilled and silky.",
        tags: ["Seasonal"],
        img: "/assets/mangoshake.png",
      },
      {
        category: "Drinks",
        name: "Berry Blast Smoothie",
        price: 140,
        salePrice: isSaleActive ? 115 : null,
        priceText: "₹140",
        saleText: "₹115",
        desc: "Mixed berries, yogurt, honey. Antioxidant-rich.",
        tags: ["Healthy", "Refreshing"],
        img: "/assets/berrysmoothie.png",
      },
      {
        category: "Drinks",
        name: "Green Tea",
        price: 80,
        salePrice: isSaleActive ? 60 : null,
        priceText: "₹80",
        saleText: "₹60",
        desc: "Premium loose-leaf green tea. Light and aromatic.",
        tags: ["Healthy", "Hot"],
        img: "/assets/greentea.png",
      },
      {
        category: "Drinks",
        name: "Chai Latte",
        price: 110,
        salePrice: isSaleActive ? 90 : null,
        priceText: "₹110",
        saleText: "₹90",
        desc: "Spiced Indian masala chai with steamed milk.",
        tags: ["Spiced", "Traditional"],
        img: "/assets/chailatte.png",
      },
      {
        category: "Drinks",
        name: "Hot Chocolate",
        price: 120,
        salePrice: isSaleActive ? 95 : null,
        priceText: "₹120",
        saleText: "₹95",
        desc: "Rich Belgian chocolate with steamed milk. Topped with cream.",
        tags: ["Chocolate", "Comfort"],
        img: "/assets/hotchocolate.png",
      },
      {
        category: "Drinks",
        name: "Fresh Lime Soda",
        price: 70,
        salePrice: isSaleActive ? 55 : null,
        priceText: "₹70",
        saleText: "₹55",
        desc: "Freshly squeezed lime with soda water. Sweet or salted.",
        tags: ["Refreshing", "Summer"],
        img: "/assets/limesoda.png",
      },
      {
        category: "Drinks",
        name: "Iced Tea",
        price: 90,
        salePrice: isSaleActive ? 70 : null,
        priceText: "₹90",
        saleText: "₹70",
        desc: "Chilled black tea with lemon and mint. Lightly sweetened.",
        tags: ["Iced", "Refreshing"],
        img: "/assets/icedtea.png",
      },
      {
        category: "Drinks",
        name: "Orange Juice",
        price: 100,
        salePrice: isSaleActive ? 80 : null,
        priceText: "₹100",
        saleText: "₹80",
        desc: "Freshly squeezed oranges. No added sugar. 250ml.",
        tags: ["Fresh", "Healthy"],
        img: "/assets/orangejuice.png",
      },
    ],
    [isSaleActive]
  );

  // build categories dynamically for the sidebar + chips
  const categories = useMemo(() => {
    const set = new Set(items.map((i) => i.category));
    return ["All", ...Array.from(set)];
  }, [items]);

  // ---------- UI state ----------
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((it) => it.category === active);
  }, [active, items]);

  // ---------- Cart helpers ----------
  const getQty = (name) => {
    const found = cart.find((i) => i.name === name);
    return found ? found.qty : 0;
  };

  const updateCart = (item, qty) => {
    if (qty <= 0) {
      dispatch({ type: "REMOVE_ITEM", payload: { name: item.name } });
    } else {
      dispatch({ type: "UPDATE_QTY", payload: { name: item.name, qty } });
    }
  };

  const handleAdd = (item) => {
    const priceToUse = item.salePrice ?? item.price;
    dispatch({ type: "ADD_ITEM", payload: { ...item, price: priceToUse } });
  };

  const handleOrderNow = (item) => {
    handleAdd(item);
    navigate("/cart");
  };

  return (
    <section className="relative bg-white">
      {/* HERO */}
      <div
        className="relative h-56 md:h-80 lg:h-96 flex items-end"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.45) 100%), url('./assets/cafeimage.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 py-8 md:py-12 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">The Atelier Coffee Collection</h1>
            <p className="mt-2 text-sm md:text-base text-white/90">
              Hand-roasted beans. Thoughtful craft. Seasonal bites. An elevated café experience built for scale.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {isSaleActive && (
                <div className="bg-amber-100/10 border border-amber-200 text-amber-50 px-3 py-1 rounded-md text-sm font-medium">
                  Limited Offer • Ends in {timeLeft || "—"}
                </div>
              )}
              <button onClick={() => setForceSale((s) => !s)} className="bg-white text-[#4b2e2b] px-3 py-1 rounded-md text-sm font-medium shadow-sm">
                Preview Promo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT: Sidebar (desktop) + Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar / categories (desktop) */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky top-24">
            <h2 className="text-lg font-medium text-[#3a2d2a]">Categories</h2>
            <nav className="mt-4 space-y-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition ${
                    active === c ? "bg-[#4b2e2b] text-white shadow-lg" : "bg-white border border-[#eee] text-[#3a2d2a]"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{c}</span>
                    <span className="text-xs text-[#7a6b66]">{c === "All" ? items.length : items.filter((it) => it.category === c).length}</span>
                  </div>
                </button>
              ))}
            </nav>

            <div className="mt-6 p-4 bg-[#faf6f2] rounded-lg border border-[#f0e6e0]">
              <h3 className="text-sm font-semibold text-[#4b2e2b]">About the menu</h3>
              <p className="mt-2 text-xs text-[#7a6b66]">
                Single origin beans, seasonal offerings and carefully sourced ingredients. Prices shown include GST.
              </p>
            </div>
          </div>
        </aside>

        {/* Content area */}
        <div className="col-span-1 md:col-span-9">
          {/* Mobile chips */}
          <div className="md:hidden mb-4">
            <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold transition ${
                    active === c ? "bg-[#4b2e2b] text-white shadow-md" : "bg-white text-[#4b2e2b] border border-[#e6dcd2]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((it) => {
              const qty = getQty(it.name);
              return (
                <article
                  key={it.name}
                  className={`relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition
                    ${it.salePrice ? "ring-1 ring-amber-200" : ""}`}
                >
                  {/* sale badge */}
                  {it.salePrice && <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-md text-xs font-semibold">SALE</div>}

                  {/* image */}
                  <div className="w-full h-40 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-[#f3f0ed]">
                    <img src={it.img} alt={it.name} className="object-contain h-full w-full" />
                  </div>

                  {/* meta */}
                  <div className="mt-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-[#2e2523]">{it.name}</h3>
                        <p className="mt-1 text-sm text-[#7a6b66]">{it.desc}</p>
                        <div className="mt-3 flex items-center gap-2">
                          {it.tags?.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-md bg-[#fbf8f6] border border-[#efe6dd] text-[#7a6b66]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-semibold text-[#2e2523]">{it.salePrice ? it.saleText : it.priceText}</div>
                        {it.salePrice && <div className="text-xs text-[#9b8b86] line-through">{it.priceText}</div>}
                        <div className="text-xs text-[#9b8b86] mt-1">Incl. GST</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      {qty === 0 ? (
                        <button onClick={() => handleAdd(it)} className="ml-auto px-4 py-2 rounded-md bg-[#4b2e2b] text-white font-semibold">
                          Add
                        </button>
                      ) : (
                        <div className="ml-auto flex items-center gap-2">
                          <button onClick={() => updateCart(it, qty - 1)} className="px-3 py-1 rounded-md bg-[#e7e2dd] text-[#2e2523]">
                            -
                          </button>
                          <div className="px-3 py-1 rounded-md bg-[#faf6f2] text-[#2e2523] font-medium">{qty}</div>
                          <button onClick={() => updateCart(it, qty + 1)} className="px-3 py-1 rounded-md bg-[#4b2e2b] text-white">
                            +
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="mt-3">
                      <button
                        onClick={() => handleOrderNow(it)}
                        className="w-full py-2 rounded-md border border-[#e8e2dd] hover:bg-[#4b2e2b] hover:text-white transition text-sm"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* small footer note */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-12 text-center text-xs text-[#7a6b66]">
        <span>Images are for presentation. Replace placeholder assets with studio images for investor pitch.</span>
      </div>

      {/* scoped styles */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
