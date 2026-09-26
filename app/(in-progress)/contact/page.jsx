import { Contact, ContactContent, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Contact Trinh Khang Ninh, a fullstack web developer based in Vietnam and available for remote opportunities.',
};

export default function ContactPage() {
  return (
    <Transition>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Contact />
    </Transition>
  );
}
