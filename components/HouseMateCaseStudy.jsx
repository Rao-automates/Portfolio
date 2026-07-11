'use client'

import { ArrowUpRight } from 'lucide-react'

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
         <h2 className="text-6xl md:text-[10rem] font-display font-black uppercase text-white leading-none tracking-tighter text-center">
           HouseMate
         </h2>
         <p className="text-xl md:text-2xl text-neutral-400 font-light mt-8 max-w-4xl text-center leading-relaxed">
           A comprehensive property management ecosystem. Built with a native Android frontend and a high-performance Python FastAPI backend, designed to streamline contractor bidding, cost estimation, and user management.
         </p>

         {/* Tech Stack Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
            {[
              { title: "Frontend Engine", tools: "Kotlin, XML, MVVM, Canvas API" },
              { title: "Backend Services", tools: "Python, FastAPI, REST Architecture" },
              { title: "Infrastructure", tools: "Firebase Auth, Cloudinary, Render" },
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

      {/* DETAILED FEATURE BENTO (Sourced from LinkedIn Post) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[100rem] mx-auto px-6 md:px-12 mt-16 md:mt-32 mb-16 md:mb-32">
         
         {/* Feature 1: Map Creator */}
         <div className="col-span-1 lg:col-span-2 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-500 pointer-events-none" />
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">Core Engine</span>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">2D Map Creator</h3>
            <p className="text-neutral-400 leading-relaxed max-w-2xl text-lg">
              Built entirely from scratch on Android's Canvas API with zero third-party libraries. Homeowners can draw walls, rooms, doors, and stairs with live SBCA COS limit overlays. Features an automated compliance engine that verifies against KB&TPR 2002 regulations and exports straight to PDF.
            </p>
         </div>

         {/* Feature 2: Cost Estimator */}
         <div className="col-span-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 blur-[100px] rounded-full group-hover:bg-blue-500/10 transition-colors duration-500 pointer-events-none" />
            <div>
               <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">FastAPI Backend</span>
               <h3 className="text-3xl font-display font-bold text-white mb-6">Cost Estimator</h3>
               <p className="text-neutral-400 leading-relaxed">
                 Select a floor plan, enter budget and floor count, and receive a full material BOQ (blocks, cement, steel, plumbing) broken across 3 quality tiers.
               </p>
            </div>
         </div>

         {/* Feature 3: Marketplace */}
         <div className="col-span-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
            <span className="text-purple-500 font-mono text-sm tracking-widest uppercase mb-4 block">Bidding Logic</span>
            <h3 className="text-3xl font-display font-bold text-white mb-6">Marketplace</h3>
            <p className="text-neutral-400 leading-relaxed">
              Homeowners post projects. Contractors receive push notifications, browse listings, and submit competitive bids. Private chat unlocks upon acceptance.
            </p>
         </div>

         {/* Feature 4: Real-Time Sync */}
         <div className="col-span-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
            <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">Infrastructure</span>
            <h3 className="text-3xl font-display font-bold text-white mb-6">Real-Time Sync</h3>
            <p className="text-neutral-400 leading-relaxed">
              Powered by Firebase Cloud Messaging. New bids, messages, and project alerts are delivered instantly with live unread badges across the platform.
            </p>
         </div>

         {/* Feature 5: Web Admin */}
         <div className="col-span-1 bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
            <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-4 block">Oversight</span>
            <h3 className="text-3xl font-display font-bold text-white mb-6">Admin Dashboard</h3>
            <p className="text-neutral-400 leading-relaxed">
              A dedicated web panel for platform oversight, handling user management, project analytics, template approvals, and global material pricing control.
            </p>
         </div>

      </div>

      {/* 
         NATIVE CINEMATIC SCROLL GALLERY 
         120fps buttery smooth performance, completely native.
         Uses mask-image to create a cinematic edge-fade effect.
      */}
      <div 
        className="w-full relative"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}
      >
        <div className="flex overflow-x-auto gap-8 md:gap-24 px-[10vw] pb-32 pt-16 snap-x snap-mandatory hide-scrollbar items-center">
           
           {screenshots.map((src, index) => {
              const isAdmin = src.includes('Admin');
              const screenName = src.replace('.jpeg', '').replace(/^\d+_/, '').replace(/_/g, ' ');
              
              // Extreme iPhone rounding for mobile, standard rounding for desktop
              const rounded = isAdmin ? 'rounded-2xl' : 'rounded-[2rem] md:rounded-[3rem]';

              return (
                <div key={index} className="shrink-0 snap-center relative group flex flex-col items-center cursor-grab active:cursor-grabbing">
                   
                   {/* 
                     UNCROPPED, PIXEL-PERFECT HARDWARE DEVICE 
                     Using h-[75vh] w-auto ensures the image perfectly dictates its own width. 
                     No cropping whatsoever.
                   */}
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                     src={`/housemate/${src}`} 
                     alt={screenName}
                     className={`h-[60vh] md:h-[75vh] w-auto object-contain bg-black ${rounded} border-[4px] md:border-[8px] border-[#1a1a1a] shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:shadow-[0_30px_80px_rgba(255,255,255,0.15)] transition-shadow duration-500`}
                     loading="lazy"
                     draggable="false"
                   />

                   {/* Sleek Label */}
                   <div className="absolute -bottom-16 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs md:text-sm font-mono text-white uppercase tracking-widest bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
                        {screenName}
                      </span>
                   </div>

                </div>
              )
           })}

           {/* End padding for the scroll track */}
           <div className="shrink-0 w-[5vw]" />
        </div>
      </div>
    </section>
  )
}
