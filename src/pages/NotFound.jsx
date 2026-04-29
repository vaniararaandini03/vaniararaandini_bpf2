import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gray-900">
      {/* Efek Background Glow */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Angka 404 Besar dengan Gradasi */}
        <p className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-400 drop-shadow-2xl">
          404
        </p>
        
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Waduh! Kamu Nyasar Ya?
        </h1>
        
        <p className="mt-6 text-lg leading-7 text-gray-300 max-w-lg">
          Halaman yang kamu cari nggak ada di sini. Tenang, navigasi di bawah bisa bantu kamu balik ke jalan yang benar.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Balik ke Beranda
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors"
          >
            Lapor Masalah <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Efek Dekoratif di Bawah */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}