'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: "Full-stack Automation Freelancer",
    company: "Upwork",
    date: "Oct 2025 – Present",
    description: [
      "Delivering custom automation solutions involving LLM orchestration and complex API integrations.",
      "Engineered RAG pipelines and automated data reconciliation systems, improving processing efficiency by 30%.",
      "Implementing real-time data persistence using Firebase for client-facing automation dashboards."
    ]
  },
  {
    title: "Founding Partner & Lead Engineer",
    company: "AI Automation Agency",
    date: "Jun 2024 – Sept 2024",
    description: [
      "Launched a specialized agency focused on business process optimization via n8n and FastAPI.",
      "Architected autonomous workflows for client lead qualification and CRM data synchronization.",
      "Managed end-to-end technical delivery and client requirements gathering for 4 months."
    ]
  },
  {
    title: "Senior Business Developer",
    company: "Winklin",
    date: "Oct 2023 – Jan 2024",
    description: [
      "Spearheaded technical lead qualification, aligning complex service offerings with enterprise requirements.",
      "Optimized communication funnels and outreach strategies to improve conversion rates."
    ]
  },
  {
    title: "Founder & Lead Strategist",
    company: "Content Writing Startup",
    date: "Jun 2023 – Sept 2023",
    description: [
      "Managed a cross-functional team to deliver technical content, utilizing internal automation to streamline production."
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-32 md:py-48 px-6 relative z-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between pb-12 mb-24 relative">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 origin-left"
          />
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter uppercase text-white">
            Professional <br/> History
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-sm mt-8 md:mt-0 md:text-right self-end">
            Building highly resilient systems for global clients and startups since 2023.
          </p>
        </div>

        <div className="flex flex-col w-full relative">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute top-0 left-0 w-full h-[1px] bg-white/10 origin-left"
          />
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col md:flex-row py-16 hover:bg-white/[0.02] transition-colors duration-500 cursor-default relative"
    >
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 origin-left"
      />
      <div className="w-full md:w-1/4 mb-8 md:mb-0">
        <span className="text-xs font-mono text-neutral-600 uppercase tracking-widest block mb-4">
          {exp.date}
        </span>
        <span className="text-lg font-bold uppercase tracking-wide text-white">
          {exp.company}
        </span>
      </div>
      
      <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-8 md:gap-16">
        <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter w-full md:w-1/2 text-neutral-300 group-hover:text-white transition-colors duration-500">
          {exp.title}
        </h3>
        <div className="w-full md:w-1/2">
          <ul className="space-y-4">
            {exp.description.map((desc, i) => (
              <li key={i} className="text-neutral-400 font-light leading-relaxed text-base md:text-lg flex items-start">
                <span className="mr-4 text-white/20 font-bold">—</span>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
