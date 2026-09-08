import { SmoothScroll } from '../components/SmoothScroll'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Work } from '../components/Work'
import { About } from '../components/About'
import { Contact } from '../components/Contact'

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen relative">
        <Navbar />
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
