// App.js
import "./styles.css";

// Components
import Navbar from "./components/Navbar";
import { CoffeeHeader } from "./components/Header";
import { AboutSection } from "./components/About";
import { MenuSection } from "./components/MenuSection";
import { ServicesSection } from "./components/ServiceSection";
import { Testimonials } from "./components/Testimonial";
import { ContactSection } from "../src/components/ContactSection";
import BrewBot from "./components/BrewBot";

// Pages
import CartPage from "../src/routes/Cartpage";
import CheckoutPage from "../src/routes/Checkoutpage";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import TermsAndConditions from "./routes/TermsandCondtions";
import Login from "./routes/Login";
import OtpVerification from "./routes/OtpVerification";
import Rewards from "./routes/Rewards";

// Router
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

// Home Page (all sections included)
function Home() {
  return (
    <>
      <CoffeeHeader />
      <AboutSection />
      <MenuSection />
      <ServicesSection />
      <Testimonials />
      <ContactSection />
      <BrewBot />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Always visible */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>

      {/* Always visible */}
      <Footer />
    </div>
  );
}
