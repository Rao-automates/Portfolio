'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Projects } from './Projects'
import { LinkedInAutomationCaseStudy } from './LinkedInAutomationCaseStudy'
import { HouseMateCaseStudy } from './HouseMateCaseStudy'
import { About } from './About'
import { Experience } from './Experience'
import { Blocks, Smartphone, Code, UserCircle } from 'lucide-react'

export function ProjectsHub() {
  const [activeTheme, setActiveTheme] = useState('web')

  const themes = [
    { id: 'web', label: 'Web Projects', icon: Code },
    { id: 'n8n', label: 'Automation', icon: Blocks },
    { id: 'android', label: 'Android Apps', icon: Smartphone },
    { id: 'profile', label: 'System Profile', icon: UserCircle },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row overflow-hidden">
      {/* Navigation Sidebar / Topbar */}
      <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 bg-[#0a0a0a] flex flex-col z-50 shrink-0">
        <div className="p-6">
          <h2 className="text-xl font-bold font-display tracking-tight bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent">
            WORKSPACE
          </h2>
        </div>
        
        <div className="flex-1 px-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
          {themes.map((theme) => {
            const Icon = theme.icon
            const isActive = activeTheme === theme.id
            return (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-sm whitespace-nowrap md:whitespace-normal ${
                  isActive 
                    ? 'bg-white/10 text-white font-medium' 
                    : 'text-neutral-500 hover:bg-white/5 hover:text-neutral-300'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-emerald-400' : ''} />
                {theme.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative bg-black h-[100dvh] md:h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTheme === 'web' && (
            <motion.div key="web" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#050505]">
              <Projects />
            </motion.div>
          )}
          {activeTheme === 'n8n' && (
            <motion.div key="n8n" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#030303]">
              <LinkedInAutomationCaseStudy />
            </motion.div>
          )}
          {activeTheme === 'android' && (
            <motion.div key="android" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#030303]">
              <HouseMateCaseStudy />
            </motion.div>
          )}
          {activeTheme === 'profile' && (
            <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-[#050505]">
              <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
                <About />
                <div className="my-12 h-px bg-white/10" />
                <Experience />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
