'use client'

import { motion } from 'framer-motion'
import { FolderTree, Terminal, Code2, Play, Bug, Layout, Smartphone } from 'lucide-react'

export function ThemeAndroidStudio() {
  return (
    <div className="h-full w-full bg-[#1e1e1e] text-[#cccccc] font-sans flex flex-col">
      {/* Top Menu Bar */}
      <div className="h-8 bg-[#3c3f41] border-b border-[#2b2b2b] flex items-center px-4 text-xs text-[#bbbbbb] gap-4">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Navigate</span>
        <span>Code</span>
        <span>Build</span>
        <span>Run</span>
        <span>Tools</span>
      </div>

      {/* Toolbar */}
      <div className="h-10 bg-[#3c3f41] border-b border-[#2b2b2b] flex items-center px-4 gap-4">
        <div className="flex items-center gap-1 bg-[#2b2b2b] rounded border border-[#1e1e1e] px-2 py-1">
          <div className="w-2 h-2 rounded-full bg-[#4caf50]"></div>
          <span className="text-xs">app</span>
        </div>
        <div className="h-4 w-px bg-white/10" />
        <button className="text-[#4caf50] hover:bg-white/5 p-1 rounded transition-colors"><Play size={16} fill="currentColor" /></button>
        <button className="text-[#e8a349] hover:bg-white/5 p-1 rounded transition-colors"><Bug size={16} /></button>
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Project Panel */}
        <div className="w-64 bg-[#2b2b2b] border-r border-[#3c3f41] flex flex-col">
          <div className="h-8 flex items-center px-3 text-xs font-semibold tracking-wide border-b border-[#3c3f41]">
            Project
          </div>
          <div className="flex-1 p-2 overflow-auto text-sm font-mono leading-relaxed">
            <div className="flex items-center gap-2 text-[#4caf50] mb-1">
              <FolderTree size={14} /> HouseMate
            </div>
            <div className="pl-4">
              <div className="flex items-center gap-2 mb-1"><FolderTree size={14} className="text-[#a9b7c6]" /> app</div>
              <div className="pl-4">
                <div className="flex items-center gap-2 mb-1"><FolderTree size={14} className="text-[#a9b7c6]" /> src</div>
                <div className="pl-4">
                  <div className="flex items-center gap-2 mb-1 text-[#e8a349]"><Code2 size={14} /> MainActivity.kt</div>
                  <div className="flex items-center gap-2 mb-1 text-[#e8a349]"><Code2 size={14} /> HomeFragment.kt</div>
                  <div className="flex items-center gap-2 mb-1 text-[#629755]"><Layout size={14} /> activity_main.xml</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden">
          {/* Editor Tabs */}
          <div className="h-8 bg-[#2b2b2b] flex">
            <div className="px-4 py-1.5 bg-[#1e1e1e] border-t-2 border-[#4a88c7] text-sm flex items-center gap-2">
              <Code2 size={14} className="text-[#e8a349]" /> MainActivity.kt
            </div>
          </div>
          
          {/* Code Area */}
          <div className="flex-1 p-4 font-mono text-sm overflow-auto leading-relaxed relative">
            <div className="text-[#808080] mb-4">
              // HouseMate: Android App for managing rental properties <br/>
              // Developed using Kotlin & Firebase
            </div>
            
            <div><span className="text-[#cc7832]">class</span> <span className="text-[#ffc66d]">MainActivity</span> : <span className="text-[#a9b7c6]">AppCompatActivity()</span> {'{'}</div>
            <div className="pl-4 mt-2">
              <span className="text-[#cc7832]">override fun</span> <span className="text-[#ffc66d]">onCreate</span>(savedInstanceState: Bundle?) {'{'}
              <div className="pl-4">
                <span className="text-[#a9b7c6]">super.onCreate(savedInstanceState)</span><br/>
                <span className="text-[#a9b7c6]">setContentView(R.layout.activity_main)</span><br/><br/>
                <span className="text-[#808080]">// Initialize Firebase for Realtime Database</span><br/>
                <span className="text-[#a9b7c6]">setupFirebaseConnection()</span><br/><br/>
                <span className="text-[#808080]">// Load custom property management UI</span><br/>
                <span className="text-[#a9b7c6]">loadPropertyDashboard()</span>
              </div>
              {'}'}
            </div>
            <div>{'}'}</div>

            {/* Simulated Device Preview overlay */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute right-8 top-8 w-64 h-[500px] border-[8px] border-[#111] rounded-[2rem] bg-[#0a0a0a] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Notch */}
              <div className="h-6 w-32 bg-[#111] mx-auto rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-20"></div>
              
              {/* App UI */}
              <div className="flex-1 bg-[#f0f0f0] flex flex-col relative z-10 pt-8">
                <div className="bg-[#4caf50] text-white p-4 font-bold shadow-md">
                  HouseMate Dashboard
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <div className="text-xs text-gray-500">Total Properties</div>
                    <div className="text-xl font-bold">12</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <div className="text-xs text-gray-500">Pending Rent</div>
                    <div className="text-xl font-bold text-red-500">$2,450</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <div className="text-xs text-gray-500">Maintenance Requests</div>
                    <div className="text-xl font-bold text-orange-500">3</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Terminal / Logcat Panel */}
          <div className="h-48 border-t border-[#3c3f41] bg-[#2b2b2b] flex flex-col">
            <div className="h-8 flex items-center px-4 gap-4 text-xs border-b border-[#3c3f41]">
              <span className="border-b-2 border-[#4a88c7] pb-1 h-full flex items-center">Logcat</span>
              <span className="text-[#808080]">Terminal</span>
              <span className="text-[#808080]">Build</span>
            </div>
            <div className="flex-1 p-2 font-mono text-xs overflow-auto">
              <div className="text-[#4caf50]">I/HouseMateApp: Connected to Firebase Realtime Database successfully.</div>
              <div className="text-[#a9b7c6]">D/NetworkSync: Syncing property data...</div>
              <div className="text-[#4caf50]">I/NetworkSync: Sync complete. 12 properties updated.</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
