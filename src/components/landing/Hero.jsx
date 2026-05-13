import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-40 pb-24 bg-[#f8f9fc] overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              🔥 Trusted by 10K+ Customers
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900 mb-6">
              Nikmati
              <span className="text-orange-500">
                {" "}Makanan{" "}
              </span>
              Favoritmu
              Dengan Mudah
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-lg leading-8 mb-10 max-w-xl">
              Foodies membantu kamu memesan makanan favorit
              dengan cepat, mudah, dan banyak promo menarik.
            </p>

            {/* CTA */}
            <a
              href="#menu"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300"
            >
              Pesan Sekarang
            </a>

          </div>

          {/* Right Image */}
          <div className="relative">

            {/* Background Circle */}
            <div className="absolute inset-0 bg-orange-100 rounded-full scale-110 blur-3xl opacity-50"></div>

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              alt="Food Banner"
              className="relative z-10 w-full max-w-2xl mx-auto rounded-[40px] shadow-2xl object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}