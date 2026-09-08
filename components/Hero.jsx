'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full">
        
        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-3 h-3 rounded-full bg-[#e85d04]" />
          <span className="text-sm text-[#737373]">Developer & Systems Architect</span>
        </motion.div>

        {/* Main heading */}
        <div className="mb-12">
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: '100%' }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="font-display font-bold text-[clamp(3rem,12vw,10rem)] leading-[0.85] tracking-tighter"
            >
              I build things
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: '100%' }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="font-display font-bold text-[clamp(3rem,12vw,10rem)] leading-[0.85] tracking-tighter text-[#e85d04]"
            >
              that work.
            </motion.h1>
          </div>
        </div>

        {/* Sub text + CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-[1200px]"
        >
          <p className="text-lg text-[#737373] font-light max-w-md leading-relaxed">
            Automation systems, native Android apps, and high-performance backends, from idea to production.
          </p>
          <a 
            href="#work" 
            className="group inline-flex items-center gap-3 text-sm font-medium text-[#f5f5f0] border-b border-[#f5f5f0]/20 pb-2 hover:border-[#e85d04] hover:text-[#e85d04] transition-colors"
          >
            See my work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-y-0.5 transition-transform">
              <path d="M7 1V13M7 13L1 7M7 13L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 7 7)"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#e85d04]/[0.04] rounded-full blur-[150px] pointer-events-none" />
    </section>
  )
}
