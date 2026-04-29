import PageHeader from "../components/PageHeader";

const customerData = Array.from({ length: 15 }, (_, i) => {
  const firstNames = ["Ahmad", "Siti", "Budi", "Dewi", "Rian", "Eka", "Fajar", "Gita", "Hendra", "Indah", "Joko", "Kartika", "Luthfi", "Maya", "Naufal"];
  const lastNames = ["Saputra", "Lestari", "Wijaya", "Permata", "Hidayat", "Putri", "Nugraha", "Sari", "Susilo", "Aziz", "Hakim", "Sophia", "Santoso", "Aminah", "Kusuma"];
  
  return {
    id: `CUS-${(i + 1).toString().padStart(3, '0')}`,
    name: `${firstNames[i]} ${lastNames[i]}`, // Mengambil pasangan nama sesuai urutan index
    email: `${firstNames[i].toLowerCase()}.${lastNames[i].toLowerCase()}@example.com`,
    phone: `0812-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
    loyalty: ["Gold", "Silver", "Bronze"][i % 3],
  };
});
export default function Customers() {
  return (
    <div className="p-8 bg-[#F8FAFC] min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Customer List</h1>
        <p className="text-slate-500">Kelola data pelanggan Anda di sini.</p>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-[24px] border border-white shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="p-4 text-sm font-semibold text-slate-600">Customer ID</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Customer Name</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Email</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Phone</th>
              <th className="p-4 text-sm font-semibold text-slate-600">Loyalty</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {customerData.map((cus) => (
              <tr key={cus.id} className="hover:bg-blue-50/30 transition-colors">
                <td className="p-4 text-sm font-medium text-indigo-600">{cus.id}</td>
                <td className="p-4 text-sm text-slate-700 font-medium">{cus.name}</td>
                <td className="p-4 text-sm text-slate-500">{cus.email}</td>
                <td className="p-4 text-sm text-slate-500">{cus.phone}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider
                    ${cus.loyalty === 'Gold' ? 'bg-amber-100 text-amber-600' : 
                      cus.loyalty === 'Silver' ? 'bg-slate-100 text-slate-600' : 
                      'bg-orange-100 text-orange-600'}`}>
                    {cus.loyalty}
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