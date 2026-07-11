'use client'

import { ArrowUpRight } from 'lucide-react'

const screenshots = [
  "Screenshot 2025-09-23 181603.png",
  "Screenshot 2025-09-23 181634.png"
]

export function LinkedInAutomationCaseStudy() {
  return (
    <section className="relative w-full bg-[#030303] border-t border-white/10" id="linkedin-case-study">
      
      <div className="max-w-[120rem] mx-auto flex flex-col xl:flex-row relative">
         
         {/* STICKY LEFT PANEL */}
         <div className="w-full xl:w-[40%] xl:sticky xl:top-0 h-auto xl:h-screen flex flex-col justify-center p-6 md:p-16 z-20 bg-[#030303]/80 backdrop-blur-3xl xl:bg-transparent border-b xl:border-b-0 xl:border-r border-white/5">
            
            {/* Architectural Blueprint Label */}
            <div className="flex items-center gap-4 mb-12 opacity-80">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-emerald-500/40">System</span>
              <div className="w-12 h-[1px] bg-emerald-500/30" />
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-emerald-500">02 / Automation</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-white leading-[0.9] tracking-tighter mb-8">
              LinkedIn<br/>Automation<br/>Engine
            </h2>
            
            <p className="text-lg md:text-2xl text-neutral-400 font-light mb-12 leading-relaxed">
              A comprehensive n8n workflow system that automates content generation, approval, and LinkedIn posting with AI and dynamic chart visualizations.
            </p>

            {/* Technical Specification Sheet */}
            <div className="w-full flex flex-col border-t border-white/10 mb-12">
               {[
                 { label: "Core", value: "n8n Workflow Engine, GPT-4" },
                 { label: "Integrations", value: "LinkedIn API, Gmail API" },
                 { label: "Data & Visuals", value: "Google Sheets, ApiFlash" }
               ].map((spec, i) => (
                 <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-4 md:py-6 border-b border-white/10 group hover:bg-white/[0.02] transition-colors px-2">
                   <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-1 md:mb-0 group-hover:text-white/60 transition-colors">{spec.label}</span>
                   <span className="text-sm font-display tracking-wide text-white/80 group-hover:text-white transition-colors text-right">{spec.value}</span>
                 </div>
               ))}
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/Rao-automates/LinkedIn-Content-Automation-System" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-4 px-8 py-4 bg-white text-black hover:bg-emerald-400 hover:text-black transition-all duration-500 rounded-full shrink-0 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                <span className="text-sm font-mono uppercase tracking-wider font-bold">View Repository</span>
                <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
         </div>

         {/* RIGHT SCROLLING GALLERY (PARALLAX BENTO) */}
         <div className="w-full xl:w-[60%] p-6 md:p-16 flex flex-col gap-16 md:gap-32 py-16 xl:py-32 relative">
            
            {/* Background glowing grid effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {screenshots.map((src, index) => (
               <div key={index} className="relative group w-full flex flex-col items-center">
                  
                  {/* Glowing backdrop shadow */}
                  <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none rounded-full" />
                  
                  {/* The Image Wrapper */}
                  <div className="relative w-full rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-[#0a0a0a] group-hover:border-emerald-500/30 transition-colors duration-500 z-10">
                     
                     {/* Elegant Image Placard */}
                     <div className="w-full h-10 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
                       <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/30">Process Overview</span>
                       <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-emerald-500/50">Fig. 0{index + 1}</span>
                     </div>

                     {/* The Workflow Screenshot */}
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img 
                       src={`/linkedin-automation/${src}`} 
                       alt={`LinkedIn Automation Workflow ${index + 1}`}
                       className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                       loading="lazy"
                     />
                  </div>

               </div>
            ))}
            
         </div>
      </div>

    </section>
  )
}
