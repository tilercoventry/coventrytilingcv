'use client'
import React, { useState } from 'react'

export function QuoteCalculator() {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', serviceType: 'Floor Tiling', propertyType: 'Residential', estimatedM2: '' })
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Survey request logged successfully. An engineer will coordinate site access.')
        setForm({ fullName: '', email: '', phone: '', serviceType: 'Floor Tiling', propertyType: 'Residential', estimatedM2: '' })
      } else {
        setStatus(data.error || 'Submission failed.')
      }
    } catch {
      setStatus('Network error occurred.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="estimator" className="py-28 max-w-3xl mx-auto px-6 w-full">
      <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Request In-Person Site Survey</h2>
        <p className="text-slate-400 text-sm mb-8">Direct pipeline configuration for structured quotations.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Full Name</label>
              <input type="text" required value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Phone Number</label>
              <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition" placeholder="07123 456789" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
              <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Estimated Coverage (M²)</label>
              <input type="number" value={form.estimatedM2} onChange={e => setForm({...form, estimatedM2: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition" placeholder="45" />
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-600/20 disabled:opacity-50">
            {loading ? 'Transmitting Data...' : 'Submit Parameter Request'}
          </button>

          {status && (
            <p className={`text-sm text-center font-medium ${status.includes('successfully') ? 'text-emerald-400' : 'text-rose-400'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
