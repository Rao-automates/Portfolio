'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Terminal, Code2, ChevronRight, Cpu } from 'lucide-react'

export function LaptopLanding({ onContinue }) {
  const [text, setText] = useState('')
  const fullText = "Initializing Mohyuddin Rao's Portfolio OS...\n\n> Loading modules...\n> Establishing connection...\n> System ready.\n\nWelcome."
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* The "Laptop" Frame */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl aspect-[16/10] bg-[#1e1e1e] rounded-t-2xl rounded-b-xl border border-neutral-800 shadow-2xl relative flex flex-col overflow-hidden"
      >
        {/* Screen Bezel */}
        <div className="absolute inset-0 pointer-events-none border-[16px] border-black rounded-t-2xl z-20" />
        
        {/* Camera Hole */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#111] border border-neutral-800 z-30" />

        {/* Screen Content */}
        <div className="flex-1 bg-[#0d0d0d] m-[16px] rounded overflow-hidden relative font-mono flex flex-col p-8 z-10">
          
          {/* Top Bar inside Screen */}
          <div className="flex items-center justify-between text-emerald-500/50 text-sm mb-8 border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <Terminal size={16} />
              <span>TERMINAL_ROOT</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2"><Cpu size={14} /> SYS_OK</span>
              <span>v2.0.26</span>
            </div>
          </div>

          {/* Typing Text */}
          <div className="flex-1 text-emerald-400 text-lg sm:text-xl whitespace-pre-wrap">
            {text}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-3 h-5 bg-emerald-400 ml-1 translate-y-1"
            />
          </div>

          {/* Interactive Area */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: text.length >= fullText.length ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 self-start"
          >
            <button 
              onClick={onContinue}
              className="group relative px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/50 rounded text-emerald-400 flex items-center gap-3 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Code2 size={20} />
              <span className="font-semibold tracking-wider">INITIALIZE_WORKSPACE</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Laptop Base (Hinge area) */}
        <div className="h-6 w-full bg-gradient-to-b from-neutral-800 to-black z-20" />
      </motion.div>
    </div>
  )
}
