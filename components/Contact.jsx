'use client'

import { ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <div className="mb-20">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Connect</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight leading-[1.1] text-white">
              Got a messy backend?
              <br />
              Let&apos;s talk.
            </h2>
            <p className="text-lg text-neutral-400 font-light leading-relaxed mt-8 max-w-md">
              Whether it&apos;s a native application, a robust backend system, or an autonomous workflow pipeline, I am ready to discuss your technical requirements.
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
                className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-white/30 transition-colors"
              >
                <span className={`text-lg md:text-xl ${link.primary ? 'text-white font-medium' : 'text-neutral-400 group-hover:text-white'} transition-colors`}>{link.label}</span>
                <ArrowUpRight size={18} className="text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-32 pt-8 border-t border-white/5 text-xs font-mono text-neutral-600">
          <span className="uppercase tracking-widest">© {new Date().getFullYear()} Mohyuddin Rao</span>
          <span className="mt-4 md:mt-0 text-neutral-500 lowercase">
            hand-coded with far too much caffeine.
          </span>
          <span className="mt-4 md:mt-0 flex items-center gap-2 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            Based in Pakistan
          </span>
        </div>
      </div>
    </section>
  )
}
