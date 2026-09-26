'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    client: 'King Viet Edu',
    category: 'Landing Page',
    services: 'Design & Development',
    year: '2026',
    href: 'https://kingvietedu.vn',
  },
  {
    client: 'The KAS',
    category: 'Landing Page',
    services: 'Design & Development',
    year: '2025',
    href: 'https://thekas.vn',
  },
  {
    client: 'Inxin',
    category: 'E-commerce',
    services: 'Fullstack Development',
    year: '2025',
    href: 'https://inxin.vn',
  },
  {
    client: 'Ma Sói Game',
    category: 'Interactive Game',
    services: 'Backend & Server',
    year: '2025',
    href: 'https://game.masoi.vn',
  },
  {
    client: 'Rainbow Game',
    category: 'E-commerce',
    services: 'Design & Development',
    year: '2025',
    href: 'https://rainbowgame.io',
  },
  {
    client: 'Tarot',
    category: 'Landing Page',
    services: 'Design & Development',
    year: '2025',
    href: 'https://tarot.thekas.vn',
  },
  {
    client: 'Drinking Game',
    category: 'Landing Page',
    services: 'Development',
    year: '2025',
    href: 'https://drinkinggame.vn',
  },
  {
    client: 'Truth or Dare',
    category: 'Landing Page',
    services: 'Development',
    year: '2025',
    href: 'https://truthordare.vn',
  },
  {
    client: 'Masoi Landing',
    category: 'Interactive',
    services: 'Design & Development',
    year: '2025',
    href: 'https://masoi.vn',
  },
  {
    client: 'Loto',
    category: 'Interactive Game',
    services: 'Game Development',
    year: '2025',
    href: 'https://loto.thekas.vn',
  },
  {
    client: 'Truth or Dare Game',
    category: 'Interactive Game',
    services: 'Fullstack Development',
    year: '2025',
    href: 'https://game.truthordare.vn',
  },
  {
    client: 'Bài Meme',
    category: 'Landing Page',
    services: 'Development',
    year: '2024',
    href: 'https://baimeme.com',
  },
  {
    client: 'Mèo Hủy Diệt',
    category: 'Landing Page',
    services: 'Interaction & Development',
    year: '2024',
    href: 'https://meohuydiet.com',
  },
  {
    client: 'Nói Hay Làm',
    category: 'Landing Page',
    services: 'Development',
    year: '2024',
    href: 'https://noihaylam.com',
  },
  {
    client: 'Kpop AllStars',
    category: 'E-commerce',
    services: 'Fullstack Development',
    year: '2024',
    href: 'https://kpopallstars.com',
  },
  {
    client: 'Flip Card Series',
    category: 'Interactive Game',
    services: 'Frontend Development',
    year: '2024',
    href: 'https://khivan.drinkinggame.vn',
  },
  {
    client: 'Caption Bài Meme',
    category: 'Interactive',
    services: 'Development',
    year: '2024',
    href: 'https://Caption.baimeme.com',
  },
  {
    client: 'Kinh Dịch',
    category: 'Landing Page',
    services: 'Interaction & Development',
    year: '2024',
    href: 'https://kinhdich.thekas.vn',
  },
  {
    client: 'Acency1',
    category: 'Landing Page',
    services: 'Development',
    year: '2024',
    href: 'https://acency1.thekas.vn',
  },
  {
    client: 'Inanthekas',
    category: 'E-commerce',
    services: 'Development',
    year: '2024',
    href: 'https://inanthekas.com',
  },
  {
    client: 'Cách gửi hình in',
    category: 'Landing Page',
    services: 'Development',
    year: '2024',
    href: 'https://cachguihinhintaikas.com/',
  },
  {
    client: 'Văn minh lên',
    category: 'Landing Page',
    services: 'Development',
    year: '2024',
    href: 'https://vanminhlen.com',
  },
];

const years = ['All', '2026', '2025', '2024'];

const caseStudies = [
  {
    title: 'King Viet Education',
    image: '/img/KingVietEdu.png',
    href: 'https://kingvietedu.vn/',
    summary:
      'An education platform bringing together technology, chess, international experiences, and learning resources.',
    contribution:
      'I am currently building the platform end to end, working on its responsive pages, reusable sections, content structure, and application foundation as it grows.',
    stack: 'React · Node.js · In development',
  },
  {
    title: 'The KAS Digital Ecosystem',
    image: '/img/TheKas.png',
    href: 'https://thekas.vn',
    summary:
      'A collection of 30 websites that kept me moving between landing pages, online stores, and interactive games.',
    contribution:
      'I handled the full build, from responsive interfaces and application logic to integrations, deployment, and the final technical handover.',
    stack: 'React · Next.js · Node.js · GSAP · Supabase',
  },
  {
    title: 'Werewolf Online',
    image: '/img/Masoi.png',
    href: 'https://game.masoi.vn',
    summary:
      'A browser-based take on the party game, built so a group can play together in real time.',
    contribution:
      'I designed the system, built the Node.js and WebSocket backend, and connected the game flow with the public website.',
    stack: 'Next.js · Node.js · WebSocket',
  },
  {
    title: 'INXIN.VN',
    image: '/img/Inxin.png',
    href: 'https://inxin.vn',
    summary:
      'An online ordering experience for a wholesale printing business, connected directly to its internal workflow.',
    contribution:
      'I built the storefront and order flow, then used Supabase Edge Functions to send new orders to the team in Lark.',
    stack: 'Next.js · Supabase · PostgreSQL · Lark API',
  },
];

const productProcess = [
  {
    step: 'Requirements',
    detail:
      'Start with the real problem, the people using it, and the constraints around it.',
  },
  {
    step: 'Architecture',
    detail:
      'Choose a structure that keeps the interface, data, APIs, and integrations understandable.',
  },
  {
    step: 'Implement',
    detail:
      'Build in small pieces, connect the frontend and backend, and keep the feedback loop short.',
  },
  {
    step: 'Test',
    detail:
      'Try the awkward cases, different screen sizes, slow paths, and the places integrations can fail.',
  },
  {
    step: 'Deploy',
    detail:
      'Ship it, watch how it behaves, document what matters, and keep improving it.',
  },
];

export function WorkContent() {
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredProjects =
    selectedYear === 'All'
      ? projects
      : projects.filter(p => p.year === selectedYear);

  return (
    <section className='min-h-screen bg-secondary-foreground text-background'>
      <div className='px-8 pb-24 pt-40 md:px-12'>
        <motion.h1
          className='text-[clamp(3rem,7vw,7rem)] font-light leading-[1.05]'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          A few things <br /> I have built
        </motion.h1>

        <motion.p
          className='mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl'
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Some started as a rough idea, some as a design, and some as a problem
          that needed solving quickly. I enjoyed figuring out the code behind
          each one.
        </motion.p>

        <div className='py-24'>
          <p className='mb-12 text-xs uppercase tracking-[0.2em] text-muted-foreground'>
            Featured case studies
          </p>
          <div className='grid gap-14 md:grid-cols-2'>
            {caseStudies.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group block'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className='relative mb-8 aspect-[4/3] overflow-hidden bg-background/5'>
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]'
                  />
                </div>
                <p className='mb-3 text-xs text-muted-foreground'>
                  0{index + 1}
                </p>
                <h2 className='mb-5 text-3xl font-normal'>{project.title}</h2>
                <p className='mb-4 leading-relaxed text-muted-foreground'>
                  {project.summary}
                </p>
                <p className='mb-5 leading-relaxed'>{project.contribution}</p>
                <p className='text-sm text-muted-foreground'>{project.stack}</p>
              </motion.a>
            ))}
          </div>
        </div>

        <div className='border-y border-muted-foreground/20 py-24'>
          <p className='mb-12 text-xs uppercase tracking-[0.2em] text-muted-foreground'>
            How I usually build
          </p>
          <div className='grid gap-0 md:grid-cols-5'>
            {productProcess.map((item, index) => (
              <motion.div
                key={item.step}
                className='border-t border-muted-foreground/20 py-7 md:border-l md:border-t-0 md:px-6 md:py-0 first:md:border-l-0 first:md:pl-0'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className='mb-6 block text-xs text-muted-foreground'>
                  0{index + 1}
                </span>
                <h3 className='mb-4 text-xl'>{item.step}</h3>
                <p className='text-sm leading-relaxed text-muted-foreground'>
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <motion.div
          className='mb-12 mt-24 flex w-full flex-col gap-8 md:flex-row md:items-center md:justify-between'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className='text-xs uppercase tracking-[0.2em] text-muted-foreground'>
            All shipped products
          </p>
          <div className='flex flex-wrap gap-4'>
            {years.map(year => (
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
                  transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
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
