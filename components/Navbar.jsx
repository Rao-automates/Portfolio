'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#030303]/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300" />
          <span className="font-display font-bold uppercase tracking-widest text-sm md:text-base">M. Rao</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'About', id: 'about' },
            { label: 'Experience', id: 'experience' },
            { label: 'Case Studies', id: 'case-study' },
            { label: 'Selected Works', id: 'projects' },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button 
          onClick={() => scrollTo('contact')}
          className="px-6 py-2 border border-white/20 rounded-full text-sm font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
        >
          Let's Talk
        </button>
        
      </div>
    </motion.nav>
  )
}
