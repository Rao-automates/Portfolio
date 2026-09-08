'use client'

import { motion } from 'framer-motion'
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

const features = [
  {
    num: "01",
    title: "2D Map Creator",
    desc: "Built from scratch on Android's Canvas API with zero third-party libraries. Homeowners draw walls, rooms, and doors with live SBCA COS limit overlays and automated KB&TPR 2002 compliance verification.",
    img: "03_Map_Creator.jpeg",
    color: "emerald"
  },
  {
    num: "02",
    title: "Cost Estimator",
    desc: "Select a floor plan, enter budget and floor count, and receive a full material BOQ — blocks, cement, steel, plumbing — broken across 3 quality tiers.",
    img: "05_Cost_Estimator.jpeg",
    color: "blue"
  },
  {
    num: "03",
    title: "Marketplace",
    desc: "Homeowners post projects. Contractors receive push notifications, browse listings, and submit competitive bids. Private chat unlocks upon acceptance.",
    img: "10_Bidding_Project_Details.jpeg",
    color: "violet"
  },
  {
    num: "04",
    title: "Real-Time Sync",
    desc: "Powered by Firebase Cloud Messaging. New bids, messages, and project alerts are delivered instantly with live unread badges across the platform.",
    img: "12_Messages_Inbox.jpeg",
    color: "amber"
  }
]

export function HouseMateCaseStudy() {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-10" id="case-study">

      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-[#c9f24d] uppercase tracking-[0.2em]">03</span>
          <div className="w-12 h-px bg-white/20" />
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-[0.2em]">Case Study</span>
        </div>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 md:mb-40">
          <div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] mb-8">
              House
              <br />
              Mate<span className="text-[#c9f24d]">.</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-lg">
              A comprehensive property management ecosystem — native Android frontend with a high-performance Python FastAPI backend, secured by JWT authentication.
            </p>
          </div>
          
          <div className="flex flex-col justify-between">
            {/* Tech Specs */}
            <div className="flex flex-col border-t border-white/[0.06]">
              {[
                { label: "Frontend", value: "Android (Kotlin, Canvas API)" },
                { label: "Backend", value: "FastAPI (Python), FCM" },
                { label: "Data & Auth", value: "Firebase, SQLite, JWT" }
              ].map((spec, i) => (
                <div key={i} className="flex items-center justify-between py-5 border-b border-white/[0.06]">
                  <span className="text-xs font-mono text-neutral-600 uppercase tracking-wider">{spec.label}</span>
                  <span className="text-sm text-neutral-300">{spec.value}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/Rao-automates/HouseMate-Kotlin-XML-Front-end" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-[#c9f24d] transition-all duration-300">
                Frontend <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="https://github.com/Rao-automates/HouseMate-Api-Backend" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.1] text-sm text-neutral-300 hover:border-white/30 hover:text-foreground transition-all duration-300">
                Backend <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Feature Deep-Dives */}
        <div className="flex flex-col gap-24 md:gap-40">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
            >
              {/* Text */}
              <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="text-xs font-mono text-[#c9f24d]/60 uppercase tracking-[0.2em] mb-4">{feature.num}</span>
                <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-base md:text-lg font-light max-w-md">{feature.desc}</p>
              </div>
              
              {/* Image */}
              <div className={`relative group ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`/housemate/${feature.img}`} 
                    alt={feature.title}
                    className="w-full max-w-sm md:max-w-md mx-auto h-auto rounded-2xl img-lift" 
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Admin Dashboard Full Width */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 md:mt-40"
        >
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-[#c9f24d]/60 uppercase tracking-[0.2em] mb-4 block">05</span>
            <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight">Admin Dashboard</h3>
            <p className="text-neutral-500 mt-4 max-w-md mx-auto font-light">
              A dedicated web panel for platform oversight — user management, project analytics, and global pricing control.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/housemate/14_Admin_Dashboard.jpeg" 
              alt="Admin Dashboard"
              className="w-full h-auto img-lift" 
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Horizontal Gallery */}
        <div className="mt-24 md:mt-40">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-display font-medium">All Screens</h3>
            <span className="text-xs font-mono text-neutral-600 uppercase tracking-wider">15 screens</span>
          </div>
          
          <div 
            className="overflow-x-auto hide-scrollbar -mx-6 md:-mx-10 px-6 md:px-10"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
            }}
          >
            <div className="flex gap-4 pb-8">
              {screenshots.map((src, index) => {
                const isAdmin = src.includes('Admin') || src.includes('Login');
                return (
                  <div key={index} className="shrink-0 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={`/housemate/${src}`} 
                      alt={src.replace('.jpeg', '').replace(/^\d+_/, '').replace(/_/g, ' ')}
                      className={`${isAdmin ? 'h-48 md:h-64' : 'h-64 md:h-80'} w-auto object-cover rounded-xl border border-white/[0.06] opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                      loading="lazy"
                      draggable="false"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
