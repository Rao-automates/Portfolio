'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Database, Server, Zap, Bot, GitBranch } from 'lucide-react'
import { Magnetic } from './Magnetic'

export function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-32 px-6 relative z-10">
      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight">
          <span className="text-neutral-500">01.</span> Engineering
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="col-span-1 border border-white/20 p-8 flex flex-col items-center justify-center text-center group hover:bg-white text-white hover:text-black transition-all duration-500 relative overflow-hidden">
            <div className="w-48 h-48 rounded-none overflow-hidden mb-8 saturate-0 group-hover:saturate-100 transition-all duration-700 relative z-10 border border-current">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile_new.jpg" alt="Mohyuddin Rao" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-display font-bold uppercase mb-2 relative z-10 tracking-tight">Mohyuddin Rao</h3>
            <p className="opacity-60 font-mono text-sm mb-4 relative z-10 uppercase tracking-widest">Computer Science</p>
            <div className="px-4 py-2 border border-current text-sm font-medium relative z-10 uppercase">
              3.5 GPA
            </div>
          </div>

          {/* Background Card */}
          <div className="col-span-1 md:col-span-2 border border-white/20 p-10 flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6">The Architect of <br/> Automation</h3>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-6 font-light">
              Specializing in <strong className="text-white">FastAPI</strong>, <strong className="text-white">Firebase</strong>, and <strong className="text-white">Advanced n8n Automation</strong>.
            </p>
            <p className="text-neutral-500 leading-relaxed font-light">
              Expert in architecting intelligent workflows, including RAG pipelines and autonomous lead qualification systems. I have a proven track record of delivering production-ready backend solutions and distributed network services for global clients, turning complex business problems into highly scalable, invisible systems.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-0 mt-12 border-t border-white/20 pt-8">
              {[
                { icon: Server, label: 'Backend' },
                { icon: Database, label: 'Database' },
                { icon: Zap, label: 'Automation' },
                { icon: Code, label: 'Code' },
                { icon: Bot, label: 'AI/RAG' },
                { icon: GitBranch, label: 'Workflows' }
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center text-neutral-500 group-hover:text-white transition-colors transform group-hover:-translate-y-2 duration-300">
                    <tech.icon size={24} strokeWidth={1} />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connect / Links Card */}
          <div className="col-span-1 md:col-span-3 border border-white/20 p-8 mt-2">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-2 text-white">Let&apos;s Build Something</h3>
                <p className="text-neutral-500 text-sm font-mono uppercase tracking-widest">Available for freelance opportunities</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Magnetic strength={50}>
                  <a href="https://github.com/Rao-automates" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-mono text-xs uppercase tracking-widest text-neutral-300">
                    GitHub
                  </a>
                </Magnetic>
                <Magnetic strength={50}>
                  <a href="https://www.linkedin.com/in/mohyuddin-rao-b9aa8337a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-mono text-xs uppercase tracking-widest text-neutral-300">
                    LinkedIn
                  </a>
                </Magnetic>
                <Magnetic strength={50}>
                  <a href="mailto:mohyuddinrao.dev@gmail.com" className="flex items-center gap-2 px-6 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-mono text-xs uppercase tracking-widest text-neutral-300">
                    Email
                  </a>
                </Magnetic>
                <Magnetic strength={50}>
                  <a href="https://www.upwork.com/freelancers/~0126577e0d5102025d" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-4 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-mono text-xs uppercase tracking-widest text-neutral-300">
                    Upwork
                  </a>
                </Magnetic>
                <Magnetic strength={50}>
                  <a href="https://drive.google.com/file/d/1RN3RIXmvA8jcDu3XAzb_OpVdHkZJ5Xt3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-4 bg-white text-black hover:bg-neutral-200 transition-colors font-mono text-xs uppercase tracking-widest font-bold">
                    Download CV
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}
