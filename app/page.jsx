import { SmoothScroll } from '../components/SmoothScroll'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { HouseMateCaseStudy } from '../components/HouseMateCaseStudy'
import { LinkedInAutomationCaseStudy } from '../components/LinkedInAutomationCaseStudy'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background relative z-10 selection:bg-white selection:text-black overflow-hidden">
        <Navbar />
        
        {/* Ambient Gradient Background */}
        <div className="fixed inset-0 z-[-2] bg-background" />
        <div className="fixed inset-0 z-[-1] opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)'
        }} />
        {/* Noise Texture */}
        <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none mix-blend-overlay" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
        }} />
        
        <Hero />
        <About />
        <Experience />
        <HouseMateCaseStudy />
        <LinkedInAutomationCaseStudy />
        <Projects />
        <Contact />
      </main>
    </SmoothScroll>
  )
}
