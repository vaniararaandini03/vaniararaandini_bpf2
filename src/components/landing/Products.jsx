import React from "react";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Cheese Burger",
      price: "Rp 35.000",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      id: 2,
      name: "Italian Pizza",
      price: "Rp 75.000",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      id: 3,
      name: "French Fries",
      price: "Rp 25.000",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    },
    {
      id: 4,
      name: "Fried Chicken",
      price: "Rp 45.000",
      image:
        "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="menu" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Menu Favorit</h2>

          <p className="text-gray-500">Menu pilihan terbaik dan terfavorit</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>

                <p className="text-orange-500 font-bold text-xl">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
