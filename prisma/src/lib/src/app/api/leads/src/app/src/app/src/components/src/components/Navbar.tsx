export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="text-xl font-black tracking-tight text-white uppercase">
          Coventry <span className="text-blue-600">Tiling</span>
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#estimator" className="hover:text-white transition">Scope Calculator</a>
          <a href="#estimator" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20">
            Secure Site Survey
          </a>
        </nav>
      </div>
    </header>
  )
}
