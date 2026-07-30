export function Hero() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
          Midlands Commercial & Residential Subcontracting
        </div>
        <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
          Uncompromising Precision in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Surface Engineering.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Built on rigid structural standards, absolute moisture verification, and traditional engineering surveys. Zero automated guesswork.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#estimator" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition shadow-xl shadow-blue-600/30">
            Configure Project Scope
          </a>
          <a href="#services" className="bg-slate-900 border border-slate-800 text-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 hover:text-white transition">
            Explore Capabilities
          </a>
        </div>
      </div>
    </section>
  )
}
