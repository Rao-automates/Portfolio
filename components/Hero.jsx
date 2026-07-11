'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '40vh'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Awwwards style text splitting
  const title = "BUILDING".split('')
  const title2 = "AUTONOMOUS".split('')
  const title3 = "SYSTEMS".split('')

  const letterVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 1.2, 
        ease: [0.76, 0, 0.24, 1] // Custom god-tier easing
      } 
    }
  }

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100vh] flex flex-col justify-center px-6 md:px-12 pt-20"
    >
      <motion.div 
        style={{ y, opacity }}
        className="w-full max-w-screen-2xl mx-auto z-10"
      >
        <div className="relative z-10 flex flex-col justify-end min-h-[70vh] pb-12 w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full mb-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-white/60 font-mono text-xs md:text-sm uppercase tracking-[0.3em] max-w-xs mb-8 md:mb-0"
            >
              Independent Developer & Systems Architect
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-white/40 text-sm md:text-base font-light max-w-sm md:text-right"
            >
              Designing intelligent infrastructure for the modern web. Specialized in distributed systems and automation.
            </motion.p>
          </div>

          <div className="font-display font-black text-[9.5vw] sm:text-[9vw] md:text-[8vw] lg:text-[7.5vw] leading-[0.85] tracking-tighter uppercase mb-8">
            <div className="overflow-hidden flex h-[9.5vw] sm:h-[9vw] md:h-[8vw] lg:h-[7.5vw]">
              <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.03 } } }} className="flex text-white">
                {title.map((char, i) => <motion.span key={i} variants={letterVariants}>{char}</motion.span>)}
              </motion.div>
            </div>
            <div className="overflow-hidden flex ml-[2vw] md:ml-[10vw] h-[9.5vw] sm:h-[9vw] md:h-[8vw] lg:h-[7.5vw]">
              <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } } }} className="flex text-white/50">
                {title2.map((char, i) => <motion.span key={i} variants={letterVariants}>{char}</motion.span>)}
              </motion.div>
            </div>
            <div className="overflow-hidden flex h-[9.5vw] sm:h-[9vw] md:h-[8vw] lg:h-[7.5vw]">
              <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.03, delayChildren: 0.2 } } }} className="flex text-white">
                {title3.map((char, i) => <motion.span key={i} variants={letterVariants}>{char}</motion.span>)}
              </motion.div>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-neutral-400 font-light max-w-md leading-relaxed"
          >
            Specializing in FastAPI, n8n Automation, and advanced RAG Pipelines. Architecting the future of intelligent workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-mono text-neutral-500">Available for work</span>
            </div>
            <button className="group relative flex items-center justify-center w-20 h-20 bg-white text-black rounded-full overflow-hidden hover:scale-105 transition-transform duration-500">
              <ArrowRight size={24} className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
