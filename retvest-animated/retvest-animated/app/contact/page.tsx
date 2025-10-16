
--------------------------------------------------

------------------------------------------------```tsx
import ScrollReveal from '@/components/ScrollReveal';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="px-6 py-24 max-w-2xl mx-auto">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-8">We’d love to hear from you.</p>
      </ScrollReveal>
      <ContactForm />
    </div>
  );
}
