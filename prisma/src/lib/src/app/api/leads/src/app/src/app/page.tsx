import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { QuoteCalculator } from '@/components/QuoteCalculator'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <QuoteCalculator />
      <Footer />
    </main>
  )
}
