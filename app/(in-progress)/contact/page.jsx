import { Contact, ContactContent, Navbar, Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact | Trinh Khang Ninh',
  description:
    'Get in touch with Trinh Khang Ninh — Fullstack Web Developer based in Vietnam. Let\'s build something great together.',
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
