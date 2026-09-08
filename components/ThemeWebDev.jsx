'use client'

import { motion } from 'framer-motion'
import { Code2, Search, GitBranch, PlaySquare, Settings, FileJson, FileCode2, Package, Globe } from 'lucide-react'

export function ThemeWebDev() {
  return (
    <div className="h-full w-full bg-[#1e1e1e] text-[#cccccc] font-sans flex flex-col selection:bg-[#264f78]">
      {/* Title Bar */}
      <div className="h-8 bg-[#181818] flex items-center justify-center text-xs text-neutral-400 border-b border-[#2b2b2b]">
        mohyuddin-portfolio - Visual Studio Code
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Activity Bar */}
        <div className="w-12 bg-[#181818] flex flex-col items-center py-2 gap-4 border-r border-[#2b2b2b]">
          <Code2 size={24} className="text-white border-l-2 border-blue-500 px-1" />
          <Search size={24} className="text-neutral-500 hover:text-white transition-colors cursor-pointer" />
          <GitBranch size={24} className="text-neutral-500 hover:text-white transition-colors cursor-pointer" />
          <PlaySquare size={24} className="text-neutral-500 hover:text-white transition-colors cursor-pointer" />
          <div className="mt-auto">
            <Settings size={24} className="text-neutral-500 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Explorer Sidebar */}
        <div className="w-64 bg-[#1e1e1e] border-r border-[#2b2b2b] flex flex-col">
          <div className="px-4 py-2 text-xs font-semibold tracking-wider text-neutral-400">EXPLORER</div>
          <div className="flex-1 overflow-auto text-sm py-2">
            
            <div className="px-4 py-1 hover:bg-[#2a2d2e] cursor-pointer font-bold flex items-center gap-1">
              PORTFOLIO-PROJECTS
            </div>
            
            {/* Project 1 */}
            <div className="pl-6 pr-4 py-1 hover:bg-[#2a2d2e] cursor-pointer flex items-center gap-2 text-blue-400">
              <Globe size={14} /> nextjs-awwwards-clone
            </div>
            <div className="pl-10 pr-4 py-0.5 hover:bg-[#2a2d2e] cursor-pointer flex items-center gap-2 text-emerald-400 text-xs">
              <FileCode2 size={12} /> page.tsx
            </div>
            
            {/* Project 2 */}
            <div className="pl-6 pr-4 py-1 mt-2 hover:bg-[#2a2d2e] cursor-pointer flex items-center gap-2 text-yellow-400">
              <Package size={14} /> fullstack-ecommerce
            </div>
            <div className="pl-10 pr-4 py-0.5 hover:bg-[#2a2d2e] cursor-pointer flex items-center gap-2 text-[#e34f26] text-xs">
              <FileCode2 size={12} /> App.jsx
            </div>
            <div className="pl-10 pr-4 py-0.5 hover:bg-[#2a2d2e] cursor-pointer flex items-center gap-2 text-yellow-300 text-xs">
              <FileJson size={12} /> package.json
            </div>

          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 bg-[#1e1e1e] flex flex-col">
          {/* Tabs */}
          <div className="h-9 bg-[#1e1e1e] flex overflow-x-auto border-b border-[#2b2b2b] hide-scrollbar">
            <div className="px-4 py-1.5 bg-[#1e1e1e] border-t border-blue-500 flex items-center gap-2 text-white bg-opacity-50">
              <FileCode2 size={14} className="text-emerald-400" /> page.tsx
            </div>
            <div className="px-4 py-1.5 bg-[#2d2d2d] border-r border-[#2b2b2b] flex items-center gap-2 text-neutral-400 hover:bg-[#1e1e1e] cursor-pointer">
              <FileCode2 size={14} className="text-[#e34f26]" /> App.jsx
            </div>
          </div>

          {/* Code Content */}
          <div className="flex-1 p-4 font-mono text-sm overflow-auto leading-relaxed relative">
            <div className="text-[#6a9955] mb-2">{'/**'}</div>
            <div className="text-[#6a9955] mb-2">{' * Full Stack Web Developer & UI/UX Enthusiast'}</div>
            <div className="text-[#6a9955] mb-2">{' * Expertise: React, Next.js, TailwindCSS, Node.js'}</div>
            <div className="text-[#6a9955] mb-4">{' */'}</div>

            <div><span className="text-[#c586c0]">export default function</span> <span className="text-[#dcdcaa]">WebProjects</span>() {'{'}</div>
            <div className="pl-4 mt-2">
              <span className="text-[#c586c0]">return</span> (
              <div className="pl-4">
                <span className="text-[#808080]">{'<'}</span><span className="text-[#569cd6]">div</span> <span className="text-[#9cdcfe]">className</span>=<span className="text-[#ce9178]">"grid grid-cols-2 gap-8 p-10"</span><span className="text-[#808080]">{'>'}</span>
                
                {/* Simulated Project Cards in Code */}
                <div className="pl-4 mt-2 mb-2">
                  <span className="text-[#808080]">{'<!--'} Project 1: Awwwards Winning Clone {'-->'}</span><br/>
                  <span className="text-[#808080]">{'<'}</span><span className="text-[#4ec9b0]">ProjectCard</span> <br/>
                  <div className="pl-4">
                    <span className="text-[#9cdcfe]">title</span>=<span className="text-[#ce9178]">"Premium Agency Website"</span><br/>
                    <span className="text-[#9cdcfe]">tech</span>=<span className="text-[#ce9178]">"{'{'}['Next.js', 'Framer Motion', 'Tailwind']{'}'}"</span><br/>
                    <span className="text-[#9cdcfe]">link</span>=<span className="text-[#ce9178]">"https://agency.com"</span><br/>
                  </div>
                  <span className="text-[#808080]">{'/>'}</span>
                </div>

                <div className="pl-4 mt-2 mb-2">
                  <span className="text-[#808080]">{'<!--'} Project 2: E-Commerce Platform {'-->'}</span><br/>
                  <span className="text-[#808080]">{'<'}</span><span className="text-[#4ec9b0]">ProjectCard</span> <br/>
                  <div className="pl-4">
                    <span className="text-[#9cdcfe]">title</span>=<span className="text-[#ce9178]">"MERN E-Commerce App"</span><br/>
                    <span className="text-[#9cdcfe]">tech</span>=<span className="text-[#ce9178]">"{'{'}['React', 'Node.js', 'MongoDB', 'Stripe']{'}'}"</span><br/>
                    <span className="text-[#9cdcfe]">features</span>=<span className="text-[#ce9178]">"['Admin Panel', 'Payment Gateway']"</span><br/>
                  </div>
                  <span className="text-[#808080]">{'/>'}</span>
                </div>

                <span className="text-[#808080]">{'</'}</span><span className="text-[#569cd6]">div</span><span className="text-[#808080]">{'>'}</span>
              </div>
              )
            </div>
            <div>{'}'}</div>

            {/* Simulated Live Preview Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute right-8 bottom-8 w-80 h-64 bg-white rounded-xl shadow-2xl overflow-hidden border border-neutral-200"
            >
              <div className="h-6 bg-neutral-200 border-b border-neutral-300 flex items-center px-2 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="ml-2 bg-white px-2 py-0.5 text-[10px] rounded text-neutral-500 w-full">localhost:3000</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 h-full text-white font-sans">
                <h3 className="text-xl font-bold mb-2">Premium Agency</h3>
                <p className="text-xs opacity-80 mb-4">Crafting digital experiences.</p>
                <button className="bg-white text-black px-4 py-1.5 text-xs font-semibold rounded-full shadow-lg">View Live Site</button>
              </div>
            </motion.div>

          </div>

          {/* Status Bar */}
          <div className="h-6 bg-[#007acc] text-white flex items-center px-4 text-xs justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><GitBranch size={12} /> main*</span>
              <span className="flex items-center gap-1">0 errors, 0 warnings</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Ln 15, Col 32</span>
              <span>Spaces: 2</span>
              <span>UTF-8</span>
              <span>TypeScript React</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
