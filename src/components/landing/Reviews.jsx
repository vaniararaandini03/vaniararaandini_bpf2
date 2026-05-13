import React from "react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Andi",
      review: "Makanannya enak dan pengirimannya cepat.",
    },
    {
      id: 2,
      name: "Salsa",
      review: "Tampilan aplikasinya modern dan mudah dipakai.",
    },
    {
      id: 3,
      name: "Rizky",
      review: "Banyak promo menarik setiap hari.",
    },
    {
      id: 4,
      name: "Nabila",
      review: "Pelayanan sangat memuaskan.",
    },
    {
      id: 5,
      name: "Fajar",
      review: "Aplikasi terbaik untuk pesan makanan online.",
    },
  ];

  return (
    <section id="review" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Testimoni Pelanggan</h2>

          <p className="text-gray-500">Apa kata mereka tentang Foodies</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-[#f8f9fc] p-8 rounded-[30px] shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={
                    item.id % 2 === 0
                      ? `https://randomuser.me/api/portraits/women/${item.id + 10}.jpg`
                      : `https://randomuser.me/api/portraits/men/${item.id + 10}.jpg`
                  }
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <h3 className="font-bold text-lg">{item.name}</h3>
              </div>

              <p className="text-gray-500 leading-7">"{item.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
