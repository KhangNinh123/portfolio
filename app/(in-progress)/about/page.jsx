import { AboutContent, Contact, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About | Trinh Khang Ninh',
  description:
    'Trinh Khang Ninh — Fullstack Web Developer & Founder of Py Space. Based in Vietnam, building scalable web solutions.',
};

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Contact />
    </Transition>
  );
}
