'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const screenshots = [
  "workflow-overview.png",
  "workflow-detail.png"
]

export function LinkedInAutomationCaseStudy() {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-10 bg-[#050505]" id="linkedin-case-study">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-[#c9f24d] uppercase tracking-[0.2em]">04</span>
          <div className="w-12 h-px bg-white/20" />
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-[0.2em]">Automation</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1] mb-8">
              LinkedIn Automation Engine
            </h2>
            <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-lg">
              A comprehensive n8n workflow system that automates content generation, approval flows, and LinkedIn posting with AI-powered chart visualizations.
            </p>
          </div>
          
          <div className="flex flex-col justify-between">
            {/* Tech Specs */}
            <div className="flex flex-col border-t border-white/[0.06]">
              {[
                { label: "Core", value: "n8n Workflow Engine, GPT-4" },
                { label: "Integrations", value: "LinkedIn API, Gmail API" },
                { label: "Data & Visuals", value: "Google Sheets, ApiFlash" }
              ].map((spec, i) => (
                <div key={i} className="flex items-center justify-between py-5 border-b border-white/[0.06]">
                  <span className="text-xs font-mono text-neutral-600 uppercase tracking-wider">{spec.label}</span>
                  <span className="text-sm text-neutral-300">{spec.value}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="https://github.com/Rao-automates/LinkedIn-Content-Automation-System" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-3 mt-8 text-foreground hover:text-[#c9f24d] transition-colors duration-300"
            >
              <span className="text-sm font-medium">View Repository</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Screenshots */}
        <div className="flex flex-col gap-8">
          {screenshots.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] img-lift">
                {/* Browser chrome bar */}
                <div className="h-10 border-b border-white/[0.04] flex items-center px-5 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]" />
                  </div>
                  <div className="ml-4 h-5 flex-1 max-w-xs bg-white/[0.04] rounded" />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`/linkedin-automation/${src}`} 
                  alt={`LinkedIn Automation Workflow ${index + 1}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
