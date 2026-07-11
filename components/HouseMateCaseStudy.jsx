'use client'

import { ArrowUpRight, Map, Calculator, Users, Zap, LayoutDashboard } from 'lucide-react'

const screenshots = [
  "01_Welcome_Screen.jpeg",
  "02_Client_Dashboard.jpeg",
  "03_Map_Creator.jpeg",
  "04_Estimation_Templates.jpeg",
  "05_Cost_Estimator.jpeg",
  "06_Estimation_Report.jpeg",
  "07_Post_Project.jpeg",
  "08_Contractor_Bids.jpeg",
  "09_Contractor_Dashboard.jpeg",
  "10_Bidding_Project_Details.jpeg",
  "11_Submit_Bid.jpeg",
  "12_Messages_Inbox.jpeg",
  "13_Admin_Login.jpeg", 
  "14_Admin_Dashboard.jpeg", 
  "15_Admin_User_Management.jpeg", 
]

export function HouseMateCaseStudy() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#030303] border-t border-white/10 overflow-hidden" id="case-study">
      
      {/* Hide scrollbar globally for this component */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* 
         ULTRA-PREMIUM STATIC HEADER 
         No scroll-jacking, perfectly smooth.
      */}
      <div className="px-6 md:px-12 max-w-[100rem] mx-auto mb-16 md:mb-32 flex flex-col items-center">
         <span className="text-sm font-mono text-neutral-500 tracking-widest uppercase mb-6 block">Featured Case Study</span>
         <h2 className="text-6xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-display font-black uppercase text-white leading-none tracking-tighter text-center">
           HouseMate
         </h2>
         <p className="text-xl md:text-2xl text-neutral-400 font-light mt-8 max-w-4xl text-center leading-relaxed">
           A comprehensive property management ecosystem. Built with a native Android frontend and a high-performance Python FastAPI backend, secured by JWT authentication, designed to streamline contractor bidding, cost estimation, and user management.
         </p>

         {/* Tech Stack Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
            {[
              { title: "Frontend Engine", tools: "Kotlin, XML, MVVM, Canvas API" },
              { title: "Backend Services", tools: "Python, FastAPI, REST Architecture" },
              { title: "Security & Cloud", tools: "JWT Auth, Firebase, Cloudinary" },
            ].map((stack, i) => (
               <div key={i} className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/5 transition-colors">
                  <span className="text-white font-bold font-mono tracking-wide mb-2 uppercase text-sm">{stack.title}</span>
                  <span className="text-neutral-400 text-sm text-center">{stack.tools}</span>
               </div>
            ))}
         </div>
         
         <div className="flex flex-col md:flex-row gap-6 w-full justify-center mt-12">
            <a href="https://github.com/Rao-automates/HouseMate-Kotlin-XML-Front-end" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-4 px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-colors duration-500 rounded-full shrink-0">
              <span className="text-sm font-mono uppercase tracking-wider font-bold">Frontend Engine</span>
              <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="https://github.com/Rao-automates/HouseMate-Api-Backend" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-4 px-8 py-4 border border-white/20 text-white hover:bg-white/10 transition-colors duration-500 rounded-full shrink-0">
              <span className="text-sm font-mono uppercase tracking-wider">FastAPI Backend</span>
              <ArrowUpRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
         </div>
      </div>

      {/* AGENCY ZIG-ZAG LAYOUT */}
      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 mt-24 md:mt-48 flex flex-col gap-32 md:gap-48 pb-32">
         
         {/* Feature 1: Map Creator (Text Left, UI Right) */}
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 flex flex-col items-start">
               <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                 <Map className="text-emerald-500" size={28} strokeWidth={1.5} />
               </div>
               <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">Core Engine</span>
               <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-8">2D Map Creator</h3>
               <p className="text-white/60 leading-relaxed text-lg md:text-xl font-light">
                 Built entirely from scratch on Android's Canvas API with zero third-party libraries. Homeowners can draw walls, rooms, doors, and stairs with live SBCA COS limit overlays. Features an automated compliance engine that verifies against KB&TPR 2002 regulations and exports straight to PDF.
               </p>
            </div>
            <div className="w-full lg:w-1/2 relative group">
               <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/housemate/03_Map_Creator.jpeg" 
                 alt="Map Creator" 
                 className="w-full max-w-sm md:max-w-md mx-auto h-auto rounded-[2rem] border-[4px] border-[#1a1a1a] ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-[1.02]" 
               />
            </div>
         </div>

         {/* Feature 2: Cost Estimator (UI Left, Text Right) */}
         <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 relative group">
               <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/housemate/05_Cost_Estimator.jpeg" 
                 alt="Cost Estimator" 
                 className="w-full max-w-sm md:max-w-md mx-auto h-auto rounded-[2rem] border-[4px] border-[#1a1a1a] ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-[1.02]" 
               />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end text-left lg:text-right">
               <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                 <Calculator className="text-blue-500" size={28} strokeWidth={1.5} />
               </div>
               <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">FastAPI Backend</span>
               <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-8">Cost Estimator</h3>
               <p className="text-white/60 leading-relaxed text-lg md:text-xl font-light">
                 Select a floor plan, enter budget and floor count, and receive a full material BOQ (blocks, cement, steel, plumbing) broken across 3 quality tiers.
               </p>
            </div>
         </div>

         {/* Feature 3: Marketplace (Text Left, UI Right) */}
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 flex flex-col items-start">
               <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                 <Users className="text-purple-500" size={28} strokeWidth={1.5} />
               </div>
               <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 block">Bidding Logic</span>
               <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-8">Marketplace</h3>
               <p className="text-white/60 leading-relaxed text-lg md:text-xl font-light">
                 Homeowners post projects. Contractors receive push notifications, browse listings, and submit competitive bids. Private chat unlocks upon acceptance.
               </p>
            </div>
            <div className="w-full lg:w-1/2 relative group">
               <div className="absolute inset-0 bg-purple-500/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/housemate/10_Bidding_Project_Details.jpeg" 
                 alt="Marketplace" 
                 className="w-full max-w-sm md:max-w-md mx-auto h-auto rounded-[2rem] border-[4px] border-[#1a1a1a] ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-[1.02]" 
               />
            </div>
         </div>

         {/* Feature 4: Real-Time Sync (UI Left, Text Right) */}
         <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 relative group">
               <div className="absolute inset-0 bg-orange-500/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/housemate/12_Messages_Inbox.jpeg" 
                 alt="Real-Time Sync" 
                 className="w-full max-w-sm md:max-w-md mx-auto h-auto rounded-[2rem] border-[4px] border-[#1a1a1a] ring-1 ring-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-[1.02]" 
               />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end text-left lg:text-right">
               <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                 <Zap className="text-orange-500" size={28} strokeWidth={1.5} />
               </div>
               <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">Infrastructure</span>
               <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-8">Real-Time Sync</h3>
               <p className="text-white/60 leading-relaxed text-lg md:text-xl font-light">
                 Powered by Firebase Cloud Messaging. New bids, messages, and project alerts are delivered instantly with live unread badges across the platform.
               </p>
            </div>
         </div>

         {/* Feature 5: Web Admin (Full Width Cinematic) */}
         <div className="flex flex-col items-center gap-16 pt-24 md:pt-32">
            <div className="flex flex-col items-center text-center max-w-3xl">
               <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                 <LayoutDashboard className="text-red-500" size={28} strokeWidth={1.5} />
               </div>
               <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block">Oversight</span>
               <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-8">Admin Dashboard</h3>
               <p className="text-white/60 leading-relaxed text-lg md:text-xl font-light">
                 A dedicated web panel for platform oversight, handling user management, project analytics, template approvals, and global material pricing control.
               </p>
            </div>
            <div className="w-full relative group px-0 md:px-12">
               <div className="absolute inset-0 bg-red-500/10 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                 src="/housemate/14_Admin_Dashboard.jpeg" 
                 alt="Admin Dashboard" 
                 className="w-full h-auto rounded-xl md:rounded-2xl border-[2px] md:border-[4px] border-[#1a1a1a] ring-1 ring-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-[1.02]" 
               />
            </div>
         </div>

      </div>
    </section>
  )
}
