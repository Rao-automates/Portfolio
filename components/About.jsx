'use client'

import { motion } from 'framer-motion'
import { Magnetic } from './Magnetic'

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex items-center gap-4 mb-20 group cursor-default">
          <span className="text-[#e85d04] font-mono text-lg opacity-50 group-hover:opacity-100 transition-opacity">{'['}</span>
          <span className="text-sm font-mono text-[#737373] group-hover:text-[#f5f5f0] transition-colors uppercase tracking-widest">About</span>
          <span className="text-[#e85d04] font-mono text-lg opacity-50 group-hover:opacity-100 transition-opacity">{']'}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/1773289759622~2.png" 
                alt="Mohyuddin Rao" 
                className="w-full h-[520px] object-cover object-[center_15%] grayscale hover:grayscale-0 transition-all duration-700" 
              />
              {/* Overlay info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-display font-bold mb-1">Mohyuddin Rao</h3>
                <p className="text-sm text-[#999]">Computer Science • 3.5 GPA</p>
                <p className="text-sm text-[#999] mt-0.5">93.3 Percentile in NSCT Test by HEC</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-8">
                Architect of
                <br />
                <span className="text-[#e85d04]">automation</span>
              </h2>
              <p className="text-lg text-[#999] font-light leading-relaxed mb-5">
                I specialize in <strong className="text-[#f5f5f0] font-medium">FastAPI</strong>, <strong className="text-[#f5f5f0] font-medium">Firebase</strong>, and <strong className="text-[#f5f5f0] font-medium">n8n Automation</strong>. 
                I build RAG pipelines, autonomous lead-qualification systems, and production-grade backends for global clients.
              </p>
              <p className="text-base text-[#666] font-light leading-relaxed">
                From native Android apps with custom Canvas rendering to distributed n8n workflows processing thousands of records, 
                I turn complex business problems into invisible, scalable systems.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-10">
              {['FastAPI', 'Python', 'Kotlin', 'Firebase', 'n8n', 'React', 'Node.js', 'RAG Pipelines', 'LLM Orchestration', 'Socket.IO'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: 'GitHub', href: 'https://github.com/Rao-automates' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohyuddin-rao-b9aa8337a' },
                { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0126577e0d5102025d' },
                { label: 'Email', href: 'mailto:mohyuddinrao.dev@gmail.com' },
              ].map((l, i) => (
                <Magnetic key={i} strength={25}>
                  <a href={l.href} target={l.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="text-sm px-5 py-2.5 rounded-full border border-[rgba(255,255,255,0.08)] text-[#999] hover:text-[#f5f5f0] hover:border-[#e85d04]/40 transition-all duration-300">
                    {l.label}
                  </a>
                </Magnetic>
              ))}
              <Magnetic strength={25}>
                <a href="https://drive.google.com/file/d/1RN3RIXmvA8jcDu3XAzb_OpVdHkZJ5Xt3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm px-5 py-2.5 rounded-full bg-[#e85d04] text-white font-medium hover:bg-[#d45003] transition-colors">
                  Download CV
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-24 md:mt-32">
          <h3 className="text-2xl font-display font-bold tracking-tight mb-10">Experience</h3>
          <div className="flex flex-col">
            {[
              { role: 'Full-stack Automation Freelancer', company: 'Upwork', date: '2025 to Present', desc: 'LLM orchestration, RAG pipelines, Firebase dashboards, and complex API integrations.' },
              { role: 'Founding Partner & Lead Engineer', company: 'AI Automation Agency', date: '2024', desc: 'Business process optimization via n8n and FastAPI. Client lead qualification and CRM sync.' },
              { role: 'Senior Business Developer', company: 'Winklin', date: '2023 to 2024', desc: 'Technical lead qualification and enterprise outreach optimization.' },
              { role: 'Founder & Lead Strategist', company: 'Content Writing Startup', date: '2023', desc: 'Cross-functional team management with internal automation for content production.' },
            ].map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid grid-cols-1 md:grid-cols-[140px_1fr_1fr] gap-4 md:gap-8 py-6 border-t border-[rgba(255,255,255,0.06)] first:border-0"
              >
                <span className="text-xs font-mono text-[#555]">{exp.date}</span>
                <div>
                  <h4 className="text-sm font-bold text-[#f5f5f0]">{exp.company}</h4>
                  <p className="text-sm text-[#737373] mt-0.5">{exp.role}</p>
                </div>
                <p className="text-sm text-[#555] leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
