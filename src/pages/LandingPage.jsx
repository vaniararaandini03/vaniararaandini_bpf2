import React from "react";

import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Products from "../components/landing/Products";
import Reviews from "../components/landing/Reviews";
import Footer from "../components/landing/Footer";
import Promo from "../components/landing/Promo";

export default function LandingPage() {
  return (
    <div className="bg-[#f8f9fc] text-gray-800">
      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Promo */}
      <Promo />

      {/* 4. About */}
      <About />

      {/* 5. Products */}
      <Products />

      {/* 6. Reviews */}
      <Reviews />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
