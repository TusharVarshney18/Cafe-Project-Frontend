import React, { useState, useEffect, useRef } from "react";

export default function BrewBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi, I’m BrewBot ☕ Your CoffeeHub assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  const quickActions = [
    { label: "Menu", text: "Show me the menu" },
    { label: "Offers", text: "What offers do you have?" },
    { label: "Recommend", text: "Recommend a drink" },
    { label: "Hours", text: "What are your opening hours?" },
    { label: "Location", text: "Where is CoffeeHub located?" },
    { label: "Catering", text: "Tell me about catering & events" },
  ];

  // Scroll to bottom on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (textFromQuick) => {
    const text = (textFromQuick ?? input).trim();
    if (!text) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setIsTyping(true);

    // Compute bot response
    const reply = getBotReply(text);

    // Simulate typing delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 700);
  };

  const getBotReply = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("menu")) {
      return "Here are some guest favorites: Espresso, Cappuccino, Flat White, Mocha, Cold Brew, Paneer Wrap, Blueberry Cheesecake, Mango Smoothie. You can explore the full menu on the Menu page.";
    }

    if (lower.includes("offer") || lower.includes("sale") || lower.includes("discount")) {
      return "We’re currently running a Christmas Sale with up to 30% OFF on selected beverages. Limited-time only!";
    }

    if (lower.includes("recommend")) {
      return "If you like strong coffee: Espresso or Americano. If you prefer creamy: Cappuccino or Flat White. For something sweet: Mocha or Caramel Frappe. For a cold treat: Cold Brew or Mango Smoothie.";
    }

    if (lower.includes("hour") || lower.includes("time") || lower.includes("open")) {
      return "CoffeeHub is open daily from 9:00 AM to 11:00 PM.";
    }

    if (lower.includes("location") || lower.includes("where") || lower.includes("address")) {
      return "We’re located at CoffeeHub, Delhi, India. You can find directions on the Contact page.";
    }

    if (lower.includes("catering") || lower.includes("event") || lower.includes("party")) {
      return "We offer coffee catering for corporate events, private parties, and pop-up bars. Share your event date and guest count via the Contact section and our team will get in touch.";
    }

    if (lower.includes("franchise")) {
      return "Franchise and partnership inquiries are welcome. Please use the Contact page form and select 'Franchise Partnership' as your enquiry type.";
    }

    if (lower.includes("human") || lower.includes("agent") || lower.includes("support")) {
      return "You can reach our team directly via email at support@coffeehub.com or use the Contact page. I’m here to help with quick questions in the meantime.";
    }

    return "Got it. I’m still learning, but you can ask me about our menu, offers, recommendations, opening hours, location, catering, or franchise options.";
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-[#d3a675] text-[#3b2623] w-14 h-14 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                     flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-transform"
          aria-label="Open chat"
        >
          💬
        </button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 w-80 bg-white/95 backdrop-blur-xl rounded-3xl 
                     shadow-[0_12px_40px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden z-50
                     border border-[#f0e4d8]"
        >
          {/* Header */}
          <div className="bg-[#3b2623] text-white px-4 py-3 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[#d3a675] flex items-center justify-center text-base font-bold">B</div>
            <div>
              <div className="text-sm font-semibold">BrewBot</div>
              <div className="text-[11px] text-[#f3e0d0]">CoffeeHub Virtual Barista</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={chatRef} className="p-4 h-64 overflow-y-auto space-y-3 bg-[#fdf7f0]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-2xl text-sm leading-snug max-w-[80%] ${
                    msg.sender === "bot" ? "bg-[#f0e4d8] text-[#4b2e2b] rounded-bl-sm" : "bg-[#d3a675] text-[#3b2623] rounded-br-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-2xl text-xs bg-[#f0e4d8] text-[#4b2e2b]">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c59a68] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c59a68] animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c59a68] animate-bounce" style={{ animationDelay: "0.3s" }} />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick actions */}
          <div className="flex gap-2 px-3 pb-2 pt-1 text-[11px] overflow-x-auto bg-[#f7ecdf]">
            {quickActions.map((q) => (
              <button
                key={q.label}
                onClick={() => handleSend(q.text)}
                className="flex-shrink-0 bg-[#3b2623] text-white rounded-full px-3 py-1 hover:bg-[#2a1a18] transition"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex p-2 border-t border-[#ecd9c7] bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 px-3 py-2 text-sm outline-none placeholder:text-[#b79a85]"
              placeholder="Ask about menu, offers, hours..."
            />
            <button
              onClick={() => handleSend()}
              className="ml-2 px-3 py-2 bg-[#d3a675] text-[#3b2623] rounded-lg text-sm font-semibold hover:bg-[#b58654] transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
