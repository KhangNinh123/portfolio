'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

const faqs = [
  {
    question: 'What services do I offer?',
    answer:
      'Fullstack Web Development, Frontend (React, Next.js), Backend (Node.js, Python), UI/UX Implementation, Database Design & API Development.',
  },
  {
    question: 'What is my tech stack?',
    answer:
      'React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, TypeScript, Docker, Git & CI/CD pipelines.',
  },
  {
    question: 'How can we work together?',
    answer:
      'Reach out via email or phone. I\'m open to freelance projects, full-time positions, and long-term collaborations.',
  },
  {
    question: 'What is my development process?',
    answer:
      'Discovery & Planning → Design & Prototyping → Development & Testing → Deployment & Maintenance. Transparent communication at every stage.',
  },
  {
    question: 'Where am I based?',
    answer:
      'Ho Chi Minh City, Vietnam. Available for remote work worldwide and open to relocation opportunities.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ContactContent() {
  return (
    <section className='min-h-screen bg-foreground text-background'>
      <div className='px-8 pb-24 pt-40 md:px-12'>
        <div className='grid gap-20 lg:grid-cols-[1fr_380px]'>
          {/* Left Column */}
          <div>
            <motion.h1
              className='mb-24 text-[clamp(3rem,7vw,7rem)] font-light leading-[1.05]'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className='block'>Let&apos;s start a</span>
              <span className='block'>project together</span>
            </motion.h1>

            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={randomId()}
                  variants={itemVariants}
                  className='border-t border-muted-foreground/30 py-10'
                >
                  <div className='flex gap-8'>
                    <span className='mt-1 text-sm text-muted-foreground'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className='flex flex-col gap-4'>
                      <h3 className='text-xl font-medium md:text-2xl'>
                        {faq.question}
                      </h3>
                      <p className='text-base leading-relaxed text-muted-foreground md:text-lg'>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className='border-t border-muted-foreground/30' />
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            className='flex flex-col gap-12'
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className='flex flex-col items-start gap-6'>
              <div className='relative h-24 w-24 overflow-hidden rounded-full bg-white'>
                <Image
                  src='/img/image.png'
                  className='object-cover'
                  fill={true}
                  alt='Trinh Khang Ninh'
                  unoptimized
                />
              </div>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <div>
              <p className='mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground'>
                Contact Details
              </p>
              <div className='flex flex-col gap-2'>
                <a
                  href='mailto:trinhkhangninh1611@gmail.com'
                  className='text-base transition-opacity duration-300 hover:opacity-60'
                >
                  trinhkhangninh1611@gmail.com
                </a>
                <a
                  href='tel:+84852606710'
                  className='text-base transition-opacity duration-300 hover:opacity-60'
                >
                  +84 852 606 710
                </a>
              </div>
            </div>

            <div>
              <p className='mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground'>
                Details
              </p>
              <div className='flex flex-col gap-2'>
                <p className='text-base'>Trinh Khang Ninh</p>
                <p className='text-base'>Fullstack Web Developer</p>
                <p className='text-base'>Location: Ho Chi Minh City, Vietnam</p>
              </div>
            </div>

            <div>
              <p className='mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground'>
                Socials
              </p>
              <div className='flex flex-col gap-2'>
                {socialMedias.map(({ href, title }) => (
                  <Link
                    key={title}
                    href={href}
                    target='_blank'
                    rel='noopener'
                    className='text-base transition-opacity duration-300 hover:opacity-60'
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
