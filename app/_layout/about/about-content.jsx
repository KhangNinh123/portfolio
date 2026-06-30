'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

const phrase =
  'I am a Fullstack Web Developer based in Vietnam, passionate about crafting digital experiences that merge clean code with impactful design.';

const skills = [
  { category: 'Frontend', items: 'React, Next.js, Vue.js, Tailwind CSS, GSAP, Framer Motion' },
  { category: 'Backend', items: 'Node.js, Express, Python, Django, REST API, GraphQL' },
  { category: 'Database', items: 'MongoDB, PostgreSQL, MySQL, Redis, Firebase' },
  { category: 'DevOps', items: 'Docker, Git, CI/CD, Vercel, AWS, Linux' },
  { category: 'Tools', items: 'Figma, VS Code, Postman, Jira, Notion' },
];

const projects = [
  { name: 'The KAS Website', href: 'https://thekas.vn', role: 'Fullstack Developer' },
  { name: 'Werewolf Online', href: 'https://game.masoi.vn', role: 'Fullstack Developer' },
  { name: 'Online Tarot', href: 'https://tarot.thekas.vn', role: 'Fullstack Developer' },
  { name: 'INXIN.VN', href: 'https://inxin.vn', role: 'Fullstack Developer' },
  { name: 'BYDUNI', href: 'https://byduni.com', role: 'Fullstack Developer' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AboutContent() {
  return (
    <section className='bg-secondary-foreground text-background'>
      {/* Hero */}
      <div className='relative flex min-h-screen items-end px-8 pb-24 pt-40 md:px-12'>
        <div className='grid w-full gap-16 lg:grid-cols-[1fr_400px]'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className='text-[clamp(3rem,7vw,7rem)] font-light leading-[1.05]'>
              <span className='block'>Trinh</span>
              <span className='block'>Khang Ninh</span>
            </h1>
          </motion.div>

          <motion.div
            className='flex flex-col justify-end gap-6'
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='relative h-28 w-28 overflow-hidden rounded-full bg-white'>
              <Image
                src='/img/image.png'
                className='object-cover'
                fill={true}
                alt='Trinh Khang Ninh'
                unoptimized
              />
            </div>
            <MoveDownRight size={28} strokeWidth={1.25} />
            <p className='text-lg leading-relaxed text-background'>
              Fullstack Web Developer & Founder of Py Space
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Me */}
      <div className='px-8 py-24 md:px-12'>
        <div className='grid gap-16 lg:grid-cols-2'>
          <div>
            <motion.p
              className='mb-8 text-xs uppercase tracking-[0.2em] text-background'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.p>
            <div className='text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-snug'>
              <ParallaxReveal paragraph={phrase} />
            </div>
          </div>

          <div className='flex flex-col justify-end'>
            <ParallaxFade>
              <p className='text-base leading-relaxed text-background md:text-lg'>
                I am Trinh Khang Ninh, a Fullstack Developer passionate about technology and innovation.
                With experience developing various web projects from frontend to backend,
                I always aim to create high-quality digital products,
                optimize performance, and deliver the best user experiences.
              </p>
            </ParallaxFade>
          </div>
        </div>
      </div>

      {/* Py Space Section */}
      <div className='border-t border-muted-foreground/20 px-8 py-24 md:px-12'>
        <div className='grid gap-16 lg:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className='mb-8 text-xs uppercase tracking-[0.2em] text-background'>
              Py Space
            </p>
            <h2 className='mb-8 text-[clamp(2rem,5vw,4rem)] font-light leading-tight'>
              My personal
              <br />
              creative space
            </h2>
            <p className='mb-6 text-base leading-relaxed text-background md:text-lg'>
              <strong className='text-background'>Py Space</strong> is my personal brand and creative space where I
              develop web products, share programming knowledge, and connect with the developer
              community. &quot;Py&quot; is inspired by Python — my first favorite programming language,
              while &quot;Space&quot; represents a free zone for limitless experimentation and creativity.
            </p>
            <p className='text-base leading-relaxed text-background md:text-lg'>
              Through Py Space, I build real-world projects such as The KAS, Werewolf Online, Online Tarot,
              INXIN.VN, and BYDUNI — each project marks a step forward in my journey to becoming a more
              comprehensive developer.
            </p>
          </motion.div>

          <motion.div
            className='flex flex-col gap-8'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className='mb-4 text-xs uppercase tracking-[0.2em] text-background'>
              Connect
            </p>
            <div className='flex flex-col gap-4'>
              <a
                href='https://pyspace.id.vn'
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center justify-between border-b border-muted-foreground/20 pb-4 transition-all duration-300'
              >
                <span className='text-xl transition-opacity duration-300 group-hover:opacity-60'>
                  pyspace.id.vn
                </span>
                <span className='text-sm text-background'>Website</span>
              </a>
              <a
                href='https://instagram.com/py2hand'
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center justify-between border-b border-muted-foreground/20 pb-4 transition-all duration-300'
              >
                <span className='text-xl transition-opacity duration-300 group-hover:opacity-60'>
                  @py2hand
                </span>
                <span className='text-sm text-background'>Instagram</span>
              </a>
              <a
                href='https://github.com/KhangNinh123'
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center justify-between border-b border-muted-foreground/20 pb-4 transition-all duration-300'
              >
                <span className='text-xl transition-opacity duration-300 group-hover:opacity-60'>
                  KhangNinh123
                </span>
                <span className='text-sm text-background'>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills */}
      <div className='border-t border-muted-foreground/20 px-8 py-24 md:px-12'>
        <motion.p
          className='mb-16 text-xs uppercase tracking-[0.2em] text-background'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className='border-t border-muted-foreground/20 py-8'
            >
              <div className='flex flex-col gap-4 md:flex-row md:items-baseline md:gap-16'>
                <div className='flex items-baseline gap-6'>
                  <span className='text-sm text-background'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className='text-xl font-medium md:min-w-[140px]'>
                    {skill.category}
                  </h3>
                </div>
                <p className='text-base leading-relaxed text-background md:text-lg'>
                  {skill.items}
                </p>
              </div>
            </motion.div>
          ))}
          <div className='border-t border-muted-foreground/20' />
        </motion.div>
      </div>

      {/* Projects */}
      <div className='border-t border-muted-foreground/20 px-8 py-24 md:px-12'>
        <motion.p
          className='mb-16 text-xs uppercase tracking-[0.2em] text-background'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Selected Projects
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              className='border-t border-muted-foreground/20'
            >
              <a
                href={project.href}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center justify-between py-8 transition-all duration-300'
              >
                <div className='flex items-baseline gap-6'>
                  <span className='text-sm text-background'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className='text-xl font-medium transition-opacity duration-300 group-hover:opacity-60 md:text-2xl'>
                    {project.name}
                  </h3>
                </div>
                <span className='text-sm text-background'>
                  {project.role}
                </span>
              </a>
            </motion.div>
          ))}
          <div className='border-t border-muted-foreground/20' />
        </motion.div>
      </div>
    </section>
  );
}
