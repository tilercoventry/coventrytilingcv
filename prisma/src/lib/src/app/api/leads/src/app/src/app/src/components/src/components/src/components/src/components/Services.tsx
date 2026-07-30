export function Services() {
  const items = [
    { title: "Large-Format Stone & Porcelain", desc: "Laser-level precision handling for oversized slabs, minimizing lippage and optimizing structural integrity." },
    { title: "Subfloor Screeding & Testing", desc: "Rigorous hygrometer moisture profiling prior to installation to eliminate thermal or adhesive failure vectors." },
    { title: "Wet Rooms & Architectural Tanking", desc: "Full liquid-membrane tanking systems engineered for zero-tolerance commercial and high-end residential wet zones." }
  ]

  return (
    <section id="services" className="py-28 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Core Technical Specifications</h2>
          <p className="text-slate-400">Engineered for durability, aesthetic balance, and regulatory compliance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((s, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl relative group hover:border-slate-700 transition">
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 font-bold text-lg mb-6">
                0{i + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
