'use client'

import { motion } from 'framer-motion'
import { Play, Settings, Database, GitBranch, Terminal } from 'lucide-react'

export function ThemeN8n() {
  return (
    <div className="h-full w-full bg-[#111] overflow-hidden flex flex-col font-sans">
      {/* Header */}
      <header className="h-14 border-b border-white/10 bg-[#1a1a1a] flex items-center px-4 justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
            <GitBranch size={16} className="text-white" />
          </div>
          <span className="font-semibold text-neutral-200">Automation Workflows</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-1.5 bg-pink-500 hover:bg-pink-600 rounded text-sm font-medium text-white transition-colors flex items-center gap-2">
            <Play size={14} /> Execute Workflow
          </button>
        </div>
      </header>

      {/* Canvas Area */}
      <div className="flex-1 relative bg-[#0f0f0f]" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }}>
        
        {/* Connection Lines (Simulated via SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <path d="M 300 200 C 400 200, 400 300, 500 300" fill="none" stroke="#FF0055" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
          <path d="M 750 300 C 850 300, 850 400, 950 400" fill="none" stroke="#FFAA00" strokeWidth="2" />
        </svg>

        {/* Nodes */}
        <div className="absolute inset-0 p-8 overflow-auto">
          
          {/* Trigger Node */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute top-[150px] left-[100px] w-64 bg-[#1e1e1e] border border-pink-500/30 rounded-xl shadow-lg shadow-pink-500/5 z-10"
          >
            <div className="p-4 border-b border-white/5 flex items-center gap-3">
              <div className="p-2 bg-pink-500/20 text-pink-400 rounded-lg"><Terminal size={18} /></div>
              <div>
                <h3 className="font-medium text-sm text-neutral-200">Cron Trigger</h3>
                <p className="text-xs text-neutral-500">Every hour</p>
              </div>
            </div>
          </motion.div>

          {/* Action Node (LinkedIn Automation) */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-[250px] left-[500px] w-80 bg-[#1e1e1e] border border-orange-500/30 rounded-xl shadow-lg shadow-orange-500/5 z-10"
          >
            <div className="p-4 border-b border-white/5 flex items-center gap-3">
              <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg"><Database size={18} /></div>
              <div>
                <h3 className="font-medium text-sm text-neutral-200">LinkedIn Scraper</h3>
                <p className="text-xs text-neutral-500">Extracts lead data & automates outreach</p>
              </div>
            </div>
            <div className="p-4 text-xs text-neutral-400 bg-black/20 rounded-b-xl">
              <div className="flex justify-between mb-1"><span>Status:</span> <span className="text-emerald-400">Success</span></div>
              <div className="flex justify-between mb-1"><span>Leads Generated:</span> <span className="text-white">500+</span></div>
              <div className="flex justify-between"><span>Tech:</span> <span className="text-white">Puppeteer, Node.js</span></div>
            </div>
          </motion.div>

          {/* Final Output Node */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-[350px] left-[950px] w-64 bg-[#1e1e1e] border border-emerald-500/30 rounded-xl shadow-lg shadow-emerald-500/5 z-10"
          >
            <div className="p-4 border-b border-white/5 flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg"><Settings size={18} /></div>
              <div>
                <h3 className="font-medium text-sm text-neutral-200">CRM Sync</h3>
                <p className="text-xs text-neutral-500">Updates Salesforce/HubSpot</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
