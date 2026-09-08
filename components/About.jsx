'use client'

import { motion } from 'framer-motion'
import { Magnetic } from './Magnetic'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Profile</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Photo */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[#e85d04] opacity-20 blur-[100px] rounded-full translate-x-10 translate-y-10" />
            <div className="relative overflow-hidden rounded-xl border border-white/10 group bg-white/[0.02]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/1773289759622~2.png" 
                alt="Mohyuddin Rao" 
                className="w-full h-[520px] object-cover object-[center_15%] grayscale hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100" 
              />
              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-xl font-display font-medium text-white mb-1">Mohyuddin Rao</h3>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <span>BS Computer Science (3.5 GPA)</span>
                </div>
                <div className="mt-2 text-xs font-mono text-[#e85d04]">
                  {'>'} 93.3 Percentile HEC NSCT Test
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight leading-snug mb-8 text-white">
                Building scalable backends and intelligent automation systems.
              </h2>
              <p className="text-base text-neutral-400 font-light leading-relaxed mb-5">
                I specialize in <strong className="text-neutral-200 font-medium">FastAPI</strong>, <strong className="text-neutral-200 font-medium">Firebase</strong>, and <strong className="text-neutral-200 font-medium">n8n</strong>. 
                My work focuses on developing custom RAG pipelines, deploying autonomous lead-qualification systems, and engineering reliable APIs for production environments.
              </p>
              <p className="text-base text-neutral-400 font-light leading-relaxed">
                Whether it's building native Android applications with custom Canvas rendering or orchestrating distributed n8n workflows that process thousands of records, I prioritize code quality, system reliability, and measurable business impact.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-10">
              {['FastAPI', 'Python', 'Kotlin', 'Firebase', 'n8n', 'React', 'Node.js'].map(s => (
                <span key={s} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                  {s}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { label: 'GitHub', href: 'https://github.com/Rao-automates' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohyuddin-rao-b9aa8337a' },
                { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0126577e0d5102025d' },
                { label: 'Email', href: 'mailto:mohyuddinrao.dev@gmail.com' },
              ].map((l, i) => (
                <Magnetic key={i} strength={15}>
                  <a href={l.href} target={l.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="text-sm px-5 py-2.5 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-all">
                    {l.label}
                  </a>
                </Magnetic>
              ))}
              <Magnetic strength={15}>
                <a href="https://drive.google.com/file/d/1RN3RIXmvA8jcDu3XAzb_OpVdHkZJ5Xt3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm px-5 py-2.5 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors">
                  Download CV
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-32">
          <div className="mb-12">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Experience</span>
          </div>
          
          <div className="flex flex-col gap-4">
            {[
              { role: 'Full-stack Automation Engineer', company: 'Independent (Upwork)', date: '2025 — Present', desc: 'Developing LLM orchestration tools, RAG pipelines, and complex API integrations.' },
              { role: 'Founding Partner & Lead Engineer', company: 'AI Automation Agency', date: '2024', desc: 'Engineered business process optimizations using n8n and FastAPI. Implemented automated CRM synchronization.' },
              { role: 'Senior Business Developer', company: 'Winklin', date: '2023 — 2024', desc: 'Led technical lead qualification and optimized enterprise outreach pipelines.' },
              { role: 'Founder & Lead Strategist', company: 'Content Agency', date: '2023', desc: 'Managed cross-functional teams and developed internal automation systems for content production workflows.' },
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-6 rounded-xl border border-white/5 hover:border-white/10 bg-white/[0.01] hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-white">{exp.company}</span>
                  <span className="text-xs font-mono text-neutral-500">{exp.date}</span>
                </div>
                <div>
                  <h4 className="text-sm text-neutral-300 mb-2">{exp.role}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
