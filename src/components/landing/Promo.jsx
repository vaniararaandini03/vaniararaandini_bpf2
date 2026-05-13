import React from "react";

export default function Promo() {
  return (
    <section
      id="promo"
      className="py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-orange-500 rounded-[40px] p-16 text-white flex flex-col md:flex-row justify-between items-center gap-10 shadow-xl">

          <div>

            <p className="text-lg mb-4">
              Promo Spesial Foodies
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Diskon Hingga 50%
              Untuk Semua Menu
            </h2>

            <p className="text-orange-100 text-lg">
              Nikmati promo terbaik setiap hari hanya di Foodies.
            </p>

          </div>

          <button className="bg-white text-orange-500 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition">
            Klaim Promo
          </button>

        </div>

      </div>

    </section>
  );
}