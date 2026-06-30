'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

const projects = [
  { client: 'King Viet Edu', category: 'Landing Page', services: 'Design & Development', year: '2026', href: 'https://kingvietedu.vn' },
  { client: 'The KAS', category: 'Landing Page', services: 'Design & Development', year: '2025', href: 'https://thekas.vn' },
  { client: 'Inxin', category: 'E-commerce', services: 'Fullstack Development', year: '2025', href: 'https://inxin.vn' },
  { client: 'Ma Sói Game', category: 'Interactive Game', services: 'Backend & Server', year: '2025', href: 'https://game.masoi.vn' },
  { client: 'Rainbow Game', category: 'E-commerce', services: 'Design & Development', year: '2025', href: 'https://rainbowgame.io' },
  { client: 'Tarot', category: 'Landing Page', services: 'Design & Development', year: '2025', href: 'https://tarot.thekas.vn' },
  { client: 'Drinking Game', category: 'Landing Page', services: 'Development', year: '2025', href: 'https://drinkinggame.vn' },
  { client: 'Truth or Dare', category: 'Landing Page', services: 'Development', year: '2025', href: 'https://truthordare.vn' },
  { client: 'Masoi Landing', category: 'Interactive', services: 'Design & Development', year: '2025', href: 'https://masoi.vn' },
  { client: 'Loto', category: 'Interactive Game', services: 'Game Development', year: '2025', href: 'https://loto.thekas.vn' },
  { client: 'Truth or Dare Game', category: 'Interactive Game', services: 'Fullstack Development', year: '2025', href: 'https://game.truthordare.vn' },
  { client: 'Bài Meme', category: 'Landing Page', services: 'Development', year: '2024', href: 'https://baimeme.com' },
  { client: 'Mèo Hủy Diệt', category: 'Landing Page', services: 'Interaction & Development', year: '2024', href: 'https://meohuydiet.com' },
  { client: 'Nói Hay Làm', category: 'Landing Page', services: 'Development', year: '2024', href: 'https://noihaylam.com' },
  { client: 'Kpop AllStars', category: 'E-commerce', services: 'Fullstack Development', year: '2024', href: 'https://kpopallstars.com' },
  { client: 'Flip Card Series', category: 'Interactive Game', services: 'Frontend Development', year: '2024', href: 'https://khivan.drinkinggame.vn' },
  { client: 'Caption Bài Meme', category: 'Interactive', services: 'Development', year: '2024', href: 'https://Caption.baimeme.com' },
  { client: 'Kinh Dịch', category: 'Landing Page', services: 'Interaction & Development', year: '2024', href: 'https://kinhdich.thekas.vn' },
  { client: 'Acency1', category: 'Landing Page', services: 'Development', year: '2024', href: 'https://acency1.thekas.vn' },
  { client: 'Inanthekas', category: 'E-commerce', services: 'Development', year: '2024', href: 'https://inanthekas.com' },
  { client: 'Cách gửi hình in', category: 'Landing Page', services: 'Development', year: '2024', href: 'https://cachguihinhintaikas.com/' },
  { client: 'Văn minh lên', category: 'Landing Page', services: 'Development', year: '2024', href: 'https://vanminhlen.com' },
];

const years = ['All', '2026', '2025', '2024'];

export function WorkContent() {
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredProjects = selectedYear === 'All'
    ? projects
    : projects.filter((p) => p.year === selectedYear);

  return (
    <section className='min-h-screen bg-secondary-foreground text-background'>
      <div className='px-8 pb-24 pt-40 md:px-12'>
        <motion.h1
          className='text-[clamp(3rem,7vw,7rem)] font-light leading-[1.05]'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Creating next level <br /> digital products
        </motion.h1>

        {/* Filter Section */}
        <motion.div
          className='mt-16 mb-12 flex w-full justify-end'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className='flex flex-wrap gap-4'>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-full px-8 py-3 text-sm transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-background text-foreground'
                    : 'border border-muted-foreground/30 text-background hover:border-background'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        <div className='w-full'>
          {/* Table Header */}
          <div className='hidden w-full border-b border-muted-foreground/30 pb-4 text-xs uppercase tracking-widest text-muted-foreground md:flex'>
            <div className='w-4/12'>Client</div>
            <div className='w-3/12'>Category</div>
            <div className='w-3/12'>Services</div>
            <div className='w-2/12 text-right'>Year</div>
          </div>

          {/* Table Rows */}
          <div className='flex flex-col'>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.a
                  key={project.client + index}
                  href={project.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex w-full flex-col border-b border-muted-foreground/20 py-8 transition-colors duration-300 hover:bg-muted/10 md:flex-row md:items-center'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index % 10 * 0.05 }}
                >
                  <div className='mb-4 w-full md:mb-0 md:w-4/12'>
                    <h3 className='text-3xl font-normal transition-transform duration-300 group-hover:-translate-x-2 md:text-4xl'>
                      {project.client}
                    </h3>
                  </div>
                  <div className='mb-2 w-full text-base text-muted-foreground md:mb-0 md:w-3/12 md:text-lg md:text-background'>
                    {project.category}
                  </div>
                  <div className='mb-2 w-full text-base text-muted-foreground md:mb-0 md:w-3/12 md:text-lg md:text-background'>
                    {project.services}
                  </div>
                  <div className='w-full text-left text-base text-muted-foreground md:w-2/12 md:text-right md:text-lg md:text-background'>
                    {project.year}
                  </div>
                </motion.a>
              ))
            ) : (
              <div className='py-12 text-center text-muted-foreground'>
                No projects found for {selectedYear}.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
