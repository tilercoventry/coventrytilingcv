export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 text-center text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 space-y-2">
        <p>&copy; {new Date().getFullYear()} Coventry Tiling Ltd. All enterprise rights reserved.</p>
        <p>Engineered with Next.js, TypeScript, and PostgreSQL.</p>
      </div>
    </footer>
  )
}
