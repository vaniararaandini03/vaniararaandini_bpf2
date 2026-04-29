import PageHeader from "../components/PageHeader";

const orderData = Array.from({ length: 15 }, (_, i) => {
  const allNames = ["Ahmad Saputra", "Siti Lestari", "Budi Wijaya", "Dewi Permata", "Rian Hidayat", "Eka Putri", "Fajar Nugraha", "Gita Sari", "Hendra Susilo", "Indah Aziz", "Joko Hakim", "Kartika Sophia", "Luthfi Santoso", "Maya Aminah", "Naufal Kusuma"];
  
  return {
    orderId: `ORD-${1000 + i + 1}`,
    customerName: allNames[i], // Nama unik dari daftar di atas
    status: ["Pending", "Completed", "Cancelled"][i % 3],
    totalPrice: (Math.floor(Math.random() * 500) + 50) * 1000,
    orderDate: `2026-04-${((i + 1) % 28).toString().padStart(2, '0')}`,
  };
});

export default function Orders() {
  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Orders History</h1>
        <p className="text-slate-500">Daftar transaksi terbaru masuk.</p>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-[24px] border border-white shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="p-4 text-sm font-semibold text-slate-600">Order ID</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Customer Name</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Order Date</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Total Price</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orderData.map((order) => (
              <tr key={order.orderId} className="hover:bg-emerald-50/30 transition-colors">
                <td className="p-4 text-sm font-medium text-slate-900">{order.orderId}</td>
                <td className="p-4 text-sm text-slate-700">{order.customerName}</td>
                <td className="p-4 text-sm text-slate-500">{order.orderDate}</td>
                <td className="p-4 text-sm font-semibold text-slate-800">
                  Rp {order.totalPrice.toLocaleString('id-ID')}
                </td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold
                    ${order.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 
                      order.status === 'Pending' ? 'bg-blue-100 text-blue-700' : 
                      'bg-rose-100 text-rose-700'}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}