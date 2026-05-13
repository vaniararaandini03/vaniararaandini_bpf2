import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group"
        >

          <div className="w-10 h-10 rounded-2xl bg-orange-500 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-110 transition duration-300">
            F
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Foodies
          </h1>

        </a>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-gray-700 font-medium">

          <a
            href="#home"
            className="relative hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all hover:after:w-full"
          >
            Home
          </a>

          <a
            href="#menu"
            className="relative hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all hover:after:w-full"
          >
            Menu
          </a>

          <a
            href="#promo"
            className="relative hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all hover:after:w-full"
          >
            Promo
          </a>

          <a
            href="#about"
            className="relative hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all hover:after:w-full"
          >
            Tentang
          </a>

          <a
            href="#review"
            className="relative hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all hover:after:w-full"
          >
            Testimoni
          </a>

          <a
            href="#footer"
            className="relative hover:text-orange-500 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all hover:after:w-full"
          >
            Kontak
          </a>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a
            href="/login"
            className="text-gray-700 font-medium hover:text-orange-500 transition duration-300"
          >
            Sign In
          </a>

          <a
            href="/register"
            className="bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300"
          >
            Sign Up
          </a>

        </div>

      </div>

    </header>
  );
}