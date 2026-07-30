import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coventry Tiling | Elite Architectural Tiling & Subcontracting',
  description: 'Precision wall and floor tiling infrastructure for commercial and high-end residential developments across the Midlands.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  )
}
