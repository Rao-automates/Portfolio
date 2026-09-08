'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          scrolled ? 'py-4 backdrop-blur-xl bg-[#0b0b0b]/70 border-white/5' : 'py-6 border-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-display font-medium text-base tracking-tight hover:text-white text-neutral-300 transition-colors">
            Mohyuddin Rao
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} className="text-sm font-mono text-neutral-400 hover:text-white transition-colors">{l.label}</button>
            ))}
            <button onClick={() => go('contact')} className="text-sm px-5 py-2 rounded-full bg-[#e85d04] text-white font-medium hover:bg-[#d45003] transition-colors">
              Get in touch
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-neutral-400 hover:text-white transition-colors">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-[#0b0b0b] flex flex-col items-center justify-center gap-8"
        >
          {links.map(l => (
            <button key={l.id} onClick={() => go(l.id)} className="text-4xl font-display font-medium text-white hover:text-neutral-400 transition-colors">{l.label}</button>
          ))}
          <button onClick={() => go('contact')} className="mt-8 text-lg px-8 py-4 rounded-full bg-[#e85d04] text-white font-medium hover:bg-[#d45003] transition-colors">
            Get in touch
          </button>
        </motion.div>
      )}
    </>
  )
}
