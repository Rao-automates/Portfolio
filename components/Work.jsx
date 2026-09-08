'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'kaaj',
    num: '01',
    title: 'KAAJ Official Store',
    subtitle: 'Headless Commerce. Done right.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'WooCommerce', 'Python', 'Docker'],
    description: 'The client wanted a perfect Lighthouse score without sacrificing complex product variations. I threw out WooCommerce\'s bloated frontend and built a custom React pipeline from the ground up. The biggest headache? The asset pipeline. I ended up writing custom Python microservices to auto-fix image contrast and rotation so the client never had to touch Photoshop.',
    image: '/kaaj/kaaj-2.png',
    links: [
      { label: 'Live Website', url: 'https://kaaj-official-store.vercel.app/' },
    ],
    features: [
      { title: 'Custom Frontend Architecture', desc: 'React-based UI decoupled from the backend for improved performance and bespoke interactions.', img: '/kaaj/kaaj-3.png' },
      { title: 'WooCommerce Integration', desc: 'Full synchronization of product catalogs, dynamic pricing, and checkout flows via REST APIs.', img: '/kaaj/kaaj-4.png' },
      { title: 'Event-Driven Webhooks', desc: 'Automated post-purchase workflows, including branded receipts and custom return portals triggered by webhooks.', img: '/kaaj/kaaj-5.png' },
      { title: 'Automated Asset Pipeline', desc: 'Python microservices for automated editorial image processing, handling contrast and rotation dynamically.', img: '/kaaj/kaaj-1.png' },
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
    subtitle: 'Native Android Property Ecosystem',
    tags: ['Android', 'Kotlin', 'FastAPI', 'Firebase'],
    description: 'Taming the Android Canvas API for a custom 2D map engine was an absolute nightmare of coordinate math. But watching homeowners actually enjoy mapping out their floor plans—and having it auto-calculate material BOQs via FastAPI—made the weeks of debugging entirely worth it.',
    image: '/housemate/02_Client_Dashboard.jpeg',
    links: [
      { label: 'Frontend Repo', url: 'https://github.com/Rao-automates/HouseMate-Kotlin-XML-Front-end' },
      { label: 'Backend Repo', url: 'https://github.com/Rao-automates/HouseMate-Api-Backend' },
    ],
    features: [
      { title: '2D Map Engine', desc: 'Custom Android Canvas implementation allowing users to draw floor plans with real-time compliance overlays.', img: '/housemate/03_Map_Creator.jpeg' },
      { title: 'Cost Estimator Module', desc: 'Algorithmic calculation of material Bill of Quantities (BOQ) based on user-defined floor plans and budget tiers.', img: '/housemate/05_Cost_Estimator.jpeg' },
      { title: 'Real-Time Marketplace', desc: 'Integrated bidding system with real-time chat and push notifications via Firebase Cloud Messaging.', img: '/housemate/10_Bidding_Project_Details.jpeg' },
      { title: 'Admin Control Panel', desc: 'Web interface for centralized user management, analytics, and global parameter configuration.', img: '/housemate/14_Admin_Dashboard.jpeg' },
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
    subtitle: 'Autonomous Content Pipeline',
    tags: ['n8n', 'GPT-4', 'LinkedIn API', 'Google Sheets'],
    description: 'Manually posting on LinkedIn is soul-crushing. I built a massive n8n orchestration graph that scrapes industry news, drafts content via GPT-4, pings my phone for approval, and publishes on a schedule. Because marketing shouldn\'t be manual labor.',
    image: '/linkedin-automation/workflow-detail.png',
    links: [
      { label: 'View Repository', url: 'https://github.com/Rao-automates/LinkedIn-Content-Automation-System' },
    ],
    screenshots: [
      '/linkedin-automation/workflow-overview.png',
    ],
    isAutomation: true
  }
]

const otherProjects = [
  { title: 'Socket Arcade', desc: 'I got annoyed by LAN latency issues at college, so I wrote a raw Socket.IO/Flask server to handle custom low-latency multiplayer syncing.', tags: ['Python', 'Flask', 'Socket.IO'], url: 'https://github.com/Rao-automates/Socket-Arcade-' },
  { title: 'Music Automaton', desc: 'A weird weekend experiment linking Finite State Automata math to the Web Audio API to auto-generate endless generative music.', tags: ['React', 'Web Audio API', 'FSA'], url: 'https://github.com/Rao-automates/Music-Automaton-Composer' },
]

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-20">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Selected Work</span>
        </div>

        {caseStudies.map((study) => (
          <div key={study.id} className="mb-32 md:mb-48">
            
            {/* Header + Image asymmetrical layout */}
            <div className={`flex flex-col gap-12 lg:gap-20 mb-16 ${study.id === 'housemate' ? 'lg:flex-row-reverse items-center' : ''}`}>
              
              <div className={`flex-1 ${study.id === 'housemate' ? '' : 'mb-12'}`}>
                <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-4 text-white">{study.title}</h2>
                <p className="text-xl text-neutral-400 font-light mb-6">{study.subtitle}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.map(t => (
                    <span key={t} className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
                
                <p className="text-base text-neutral-400 font-light leading-relaxed max-w-2xl">{study.description}</p>
                
                <div className="flex gap-4 mt-8">
                  {study.links.map((l, i) => (
                    <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors">
                      {l.label} <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                  className={`rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] py-12 flex justify-center items-center ${study.id === 'kaaj' ? '-rotate-1 translate-x-1 lg:translate-x-4 mb-16' : study.id === 'housemate' ? 'rotate-1' : 'mb-16'}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={study.image} alt={study.title} className="max-h-[600px] w-auto rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
                </motion.div>
              </div>
            </div>

            {!study.isAutomation && (
              <>

                {/* Features */}
                <div className="grid grid-cols-1 gap-16 md:gap-24">
                  {study.features?.map((f, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5 }}
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
                    >
                      <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                        <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight mb-4 text-white">{f.title}</h3>
                        <p className="text-neutral-400 leading-relaxed font-light">{f.desc}</p>
                      </div>
                      <div className={`overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] py-8 flex justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={f.img} alt={f.title} className="max-h-[400px] w-auto rounded shadow-xl" loading="lazy" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Gallery strip - Breaking the grid */}
                <div className="mt-20 w-[100vw] relative left-1/2 -translate-x-1/2">
                  <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between mb-6">
                    <span className="text-sm font-mono text-neutral-500">System Screenshots</span>
                    <span className="text-xs font-mono text-neutral-600">{study.gallery?.length} views</span>
                  </div>
                  <div className="overflow-x-auto hide-scrollbar px-6 md:px-[calc(50vw-600px+24px)]" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent)' }}>
                    <div className="flex gap-4 w-max">
                      {study.gallery?.map((src, j) => (
                        <div key={j} className="shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`/${study.id}/${src}`} alt="" className="h-48 md:h-80 w-auto rounded border border-white/10 opacity-70 hover:opacity-100 transition-opacity duration-300" loading="lazy" draggable="false" />
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
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: k * 0.1 }}
                    className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] p-2 md:p-4 flex justify-center"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`Workflow Architecture ${k + 1}`} className="w-full max-h-[70vh] object-contain rounded" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            )}

            {study.id !== 'linkedin' && <div className="w-full h-px bg-white/10 mt-32 md:mt-48" />}
          </div>
        ))}

        {/* ========== OTHER PROJECTS ========== */}
        <div className="mt-32">
          <div className="mb-12">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Other Projects</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((p, i) => (
              <a 
                key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                className="group p-8 rounded-xl border border-white/5 hover:border-white/20 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl font-display font-medium tracking-tight text-white group-hover:text-[#e85d04] transition-colors">{p.title}</h3>
                  <ArrowUpRight size={16} className="text-neutral-500 group-hover:text-[#e85d04] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-sm text-neutral-400 mb-8 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
