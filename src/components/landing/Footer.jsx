import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#111827] text-white py-20"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6">

        {/* Logo */}
        <div>

          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Foodies
          </h2>

          <p className="text-gray-400">
            Platform modern untuk pesan makanan online.
          </p>

        </div>

        {/* Kontak */}
        <div>

          <h3 className="font-semibold text-xl mb-4">
            Kontak
          </h3>

          <p className="text-gray-400">
            foodies@gmail.com
          </p>

          <p className="text-gray-400">
            0812-3456-7890
          </p>

        </div>

        {/* Sosial Media */}
        <div>

          <h3 className="font-semibold text-xl mb-4">
            Sosial Media
          </h3>

          <div className="flex flex-col gap-2 text-gray-400">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>

        </div>

        {/* Partner */}
        <div>

          <h3 className="font-semibold text-xl mb-4">
            Partner
          </h3>

          <div className="flex gap-4">

            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
              alt="partner"
              className="w-12 h-12 bg-white rounded-xl p-2"
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
              alt="partner"
              className="w-12 h-12 bg-white rounded-xl p-2"
            />

          </div>

        </div>

      </div>

      <div className="text-center text-gray-500 mt-16">
        © 2026 Foodies. All Rights Reserved.
      </div>

    </footer>
  );
}