'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'kaaj',
    num: '01',
    title: 'KAAJ Official Store',
    subtitle: 'Digital Flagship & Ecommerce Platform',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'WooCommerce', 'Python', 'Docker'],
    description: 'A true digital flagship merging a "Quiet Luxury" aesthetic with rock-solid engineering. Built entirely from scratch handling everything from the bespoke UI to automated asset pipelines and event-driven return portals.',
    image: '/kaaj/kaaj-2.png',
    links: [
      { label: 'Live Website', url: 'https://kaaj-official-store.vercel.app/' },
    ],
    features: [
      { title: 'Brand Identity & Bespoke UI', desc: 'Designed all branding from the ground up. Integrated custom generative JavaScript canvas art and engineered smooth React-based entry animations for a tactile, premium feel.', img: '/kaaj/kaaj-3.png' },
      { title: 'Headless WooCommerce', desc: 'A fully custom frontend that hooks flawlessly into WooCommerce via REST APIs and Webhooks. Handles the entire product catalog, dynamic pricing, and frictionless checkout.', img: '/kaaj/kaaj-4.png' },
      { title: 'Automated Post-Purchase', desc: 'Event-driven webhooks trigger automated branded receipts, custom Order Tracking, and Automated Returns portals right on the frontend.', img: '/kaaj/kaaj-5.png' },
      { title: 'Asset Pipeline & Notifications', desc: 'Custom Python scripts handle the editorial image pipeline, fixing rotations and contrast dynamically. Plus, real-time notifications for backend state changes.', img: '/kaaj/kaaj-1.png' },
    ],
    gallery: [
      'kaaj-1.png', 'kaaj-2.png', 'kaaj-3.png', 'kaaj-4.png', 'kaaj-5.png'
    ],
    isAutomation: false
  },
  {
    id: 'housemate',
    num: '02',
    title: 'HouseMate',
    subtitle: 'Property Management Ecosystem',
    tags: ['Android', 'Kotlin', 'FastAPI', 'Firebase'],
    description: 'A full native Android app with Python FastAPI backend, featuring a map creator, cost estimator, contractor marketplace, and real-time messaging. All secured with JWT.',
    image: '/housemate/02_Client_Dashboard.jpeg',
    links: [
      { label: 'Frontend Repo', url: 'https://github.com/Rao-automates/HouseMate-Kotlin-XML-Front-end' },
      { label: 'Backend Repo', url: 'https://github.com/Rao-automates/HouseMate-Api-Backend' },
    ],
    features: [
      { title: '2D Map Creator', desc: 'Built from scratch on Android Canvas API. Draw walls, rooms, doors with live SBCA COS overlays and automated compliance verification.', img: '/housemate/03_Map_Creator.jpeg' },
      { title: 'Cost Estimator', desc: 'Select floor plan, enter budget and floor count, get a full material BOQ across 3 quality tiers.', img: '/housemate/05_Cost_Estimator.jpeg' },
      { title: 'Marketplace', desc: 'Homeowners post projects. Contractors browse, bid, and chat. All with real-time push notifications via FCM.', img: '/housemate/10_Bidding_Project_Details.jpeg' },
      { title: 'Admin Dashboard', desc: 'Web panel for user management, project analytics, template approvals, and global pricing control.', img: '/housemate/14_Admin_Dashboard.jpeg' },
    ],
    gallery: [
      '01_Welcome_Screen.jpeg', '02_Client_Dashboard.jpeg', '03_Map_Creator.jpeg',
      '04_Estimation_Templates.jpeg', '05_Cost_Estimator.jpeg', '06_Estimation_Report.jpeg',
      '07_Post_Project.jpeg', '08_Contractor_Bids.jpeg', '09_Contractor_Dashboard.jpeg',
      '10_Bidding_Project_Details.jpeg', '11_Submit_Bid.jpeg', '12_Messages_Inbox.jpeg',
      '13_Admin_Login.jpeg', '14_Admin_Dashboard.jpeg', '15_Admin_User_Management.jpeg',
    ],
    isAutomation: false
  },
  {
    id: 'linkedin',
    num: '03',
    title: 'LinkedIn Automation Engine',
    subtitle: 'AI-Powered Content Pipeline',
    tags: ['n8n', 'GPT-4', 'LinkedIn API', 'Google Sheets'],
    description: 'A comprehensive n8n workflow that automates content generation, approval flows, and LinkedIn posting with AI and dynamic chart visualizations.',
    image: '/linkedin-automation/workflow-detail.png',
    links: [
      { label: 'View Repository', url: 'https://github.com/Rao-automates/LinkedIn-Content-Automation-System' },
    ],
    screenshots: [
      '/linkedin-automation/workflow-overview.png',
      '/linkedin-automation/workflow-detail.png',
    ],
    isAutomation: true
  }
]

const otherProjects = [
  { title: 'Socket Arcade', desc: 'Real-time multiplayer game server. Transforms your LAN into a gaming hub.', tags: ['Python', 'Flask', 'Socket.IO'], url: 'https://github.com/Rao-automates/Socket-Arcade-' },
  { title: 'Music Automaton', desc: 'Procedural melody generator using Finite State Automata and Web Audio API.', tags: ['React', 'Web Audio', 'FSA'], url: 'https://github.com/Rao-automates/Music-Automaton-Composer' },
]

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-20 group cursor-default">
          <span className="text-[#e85d04] font-mono text-lg opacity-50 group-hover:opacity-100 transition-opacity">{'['}</span>
          <span className="text-sm font-mono text-[#737373] group-hover:text-[#f5f5f0] transition-colors uppercase tracking-widest">Selected Work</span>
          <span className="text-[#e85d04] font-mono text-lg opacity-50 group-hover:opacity-100 transition-opacity">{']'}</span>
        </div>

        {caseStudies.map((study) => (
          <div key={study.id} className="mb-32 md:mb-48">
            <div className="mb-16">
              <span className="text-xs font-mono text-[#e85d04] mb-4 block">{study.num}</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-4">{study.title}</h2>
              <p className="text-xl text-[#737373] font-light mb-6">{study.subtitle}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {study.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <p className="text-base text-[#999] font-light leading-relaxed max-w-2xl">{study.description}</p>
              <div className="flex gap-4 mt-8">
                {study.links.map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium text-[#f5f5f0] hover:text-[#e85d04] transition-colors">
                    {l.label} <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {!study.isAutomation && (
              <>
                {/* Hero image */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                  className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] mb-20 bg-[#111]/50 py-12 flex justify-center items-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={study.image} alt={study.title} className="max-h-[600px] w-auto rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]" loading="lazy" />
                </motion.div>

                {/* Features */}
                <div className="grid grid-cols-1 gap-20 md:gap-32">
                  {study.features?.map((f, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                    >
                      <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                        <span className="text-xs font-mono text-[#e85d04]/50 mb-3 block">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tight mb-4">{f.title}</h3>
                        <p className="text-[#737373] leading-relaxed font-light">{f.desc}</p>
                      </div>
                      <div className={`overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#111]/30 py-10 flex justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={f.img} alt={f.title} className="max-h-[500px] w-auto rounded-xl shadow-2xl" loading="lazy" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Gallery strip */}
                <div className="mt-20 md:mt-32">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-mono text-[#737373]">All Screens</span>
                    <span className="text-xs font-mono text-[#737373]/50">{study.gallery?.length} screens (scroll →)</span>
                  </div>
                  <div className="overflow-x-auto hide-scrollbar -mx-6 px-6" style={{ WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 3%,#000 97%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 3%,#000 97%,transparent)' }}>
                    <div className="flex gap-3">
                      {study.gallery?.map((src, j) => (
                        <div key={j} className="shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`/${study.id}/${src}`} alt="" className="h-56 md:h-72 w-auto rounded-lg border border-[rgba(255,255,255,0.06)] opacity-50 hover:opacity-100 transition-opacity duration-400" loading="lazy" draggable="false" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {study.isAutomation && (
              <div className="flex flex-col gap-8">
                {study.screenshots?.map((src, k) => (
                  <motion.div 
                    key={k}
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: k * 0.15 }}
                    className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] bg-[#111]/30 p-2 md:p-4 flex justify-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Workflow ${k + 1}`} className="w-full max-h-[70vh] object-contain rounded-xl" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            )}

            {study.id !== 'linkedin' && <div className="hr mt-32 md:mt-48" />}
          </div>
        ))}

        {/* Divider */}
        <div className="hr mb-20" />

        {/* ========== OTHER PROJECTS ========== */}
        <div>
          <span className="text-xs font-mono text-[#e85d04] mb-4 block">04</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-12">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((p, i) => (
              <a 
                key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                className="group p-8 rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-[#e85d04]/30 hover:bg-[#e85d04]/[0.03] transition-all duration-400"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-display font-bold tracking-tight group-hover:text-[#e85d04] transition-colors">{p.title}</h3>
                  <ArrowUpRight size={16} className="text-[#737373] group-hover:text-[#e85d04] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-sm text-[#737373] mb-6 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
