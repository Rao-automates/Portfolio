'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10 pt-20">
        
        {/* Main heading */}
        <div className="mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-2"
          >
            Mohyuddin Rao
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-neutral-500"
          >
            Backend & Automation Engineer
          </motion.h2>
        </div>

        {/* Sub text + CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-[1200px] mt-12 border-t border-white/10 pt-8"
        >
          <p className="text-base md:text-lg text-neutral-400 font-light max-w-xl leading-relaxed">
            I build robust APIs, native Android apps, and autonomous workflows. I care deeply about clean code, un-messy databases, and backends that don't page me at 3 AM.
          </p>
          <a 
            href="#work" 
            className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg border border-white/10"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
