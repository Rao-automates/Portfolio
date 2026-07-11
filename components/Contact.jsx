'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-[#030303] overflow-hidden border-t border-white/5" id="contact">
      
      {/* Massive Glowing Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
         
         <span className="text-sm font-mono text-neutral-500 tracking-widest uppercase mb-12 block">
           Available for new opportunities
         </span>

         <h2 className="text-[11vw] sm:text-[10vw] md:text-[8rem] lg:text-[10rem] font-display font-black uppercase text-white leading-none tracking-tighter mb-16">
           Let's Build
         </h2>

         <p className="text-xl md:text-3xl text-neutral-400 font-light max-w-2xl mb-16 leading-relaxed">
           Whether it's a premium mobile application, a high-performance backend system, or an autonomous AI workflow—I'm ready to build it.
         </p>

         <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
            <a 
              href="mailto:contact@rao.com" 
              className="group flex items-center justify-center gap-4 px-12 py-6 bg-white text-black hover:bg-neutral-200 transition-colors duration-500 rounded-full shrink-0"
            >
              <span className="text-sm font-mono uppercase tracking-wider font-bold">Send an Email</span>
              <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <a 
              href="https://github.com/Rao-automates" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center justify-center gap-4 px-12 py-6 border border-white/20 text-white hover:bg-white/10 transition-colors duration-500 rounded-full shrink-0"
            >
              <span className="text-sm font-mono uppercase tracking-wider">GitHub Profile</span>
              <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
         </div>

      </div>

      {/* Footer Info */}
      <div className="absolute bottom-6 left-0 right-0 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-neutral-600 uppercase tracking-widest">
         <span>© {new Date().getFullYear()} Mohyuddin Rao</span>
         <span className="mt-4 md:mt-0">Designed & Engineered in Pakistan</span>
      </div>

    </section>
  )
}
