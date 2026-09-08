'use client'

import { ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex items-center gap-4 mb-20 group cursor-default">
          <span className="text-[#e85d04] font-mono text-lg opacity-50 group-hover:opacity-100 transition-opacity">{'['}</span>
          <span className="text-sm font-mono text-[#737373] group-hover:text-[#f5f5f0] transition-colors uppercase tracking-widest">Contact</span>
          <span className="text-[#e85d04] font-mono text-lg opacity-50 group-hover:opacity-100 transition-opacity">{']'}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1]">
              Let&apos;s build
              <br />
              something<span className="text-[#e85d04]">.</span>
            </h2>
            <p className="text-lg text-[#737373] font-light leading-relaxed mt-8 max-w-md">
              Whether it&apos;s a native app, a backend system, or an autonomous workflow: I&apos;m ready.
            </p>
          </div>

          <div className="flex flex-col justify-end">
            {[
              { label: 'mohyuddinrao.dev@gmail.com', href: 'mailto:mohyuddinrao.dev@gmail.com', primary: true },
              { label: 'GitHub', href: 'https://github.com/Rao-automates' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohyuddin-rao-b9aa8337a' },
              { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0126577e0d5102025d' },
            ].map((link, i) => (
              <a 
                key={i} 
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 border-b border-[rgba(255,255,255,0.06)] hover:border-[#e85d04]/30 transition-colors"
              >
                <span className={`text-lg ${link.primary ? 'text-[#f5f5f0] font-medium' : 'text-[#737373] group-hover:text-[#f5f5f0]'} transition-colors`}>{link.label}</span>
                <ArrowUpRight size={16} className="text-[#555] group-hover:text-[#e85d04] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-32 pt-6 border-t border-[rgba(255,255,255,0.04)] text-xs font-mono text-[#444] tracking-wider">
          <span>© {new Date().getFullYear()} Mohyuddin Rao</span>
          <span className="mt-3 md:mt-0">Pakistan</span>
        </div>
      </div>
    </section>
  )
}
