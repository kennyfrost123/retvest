
--------------------------------------------------

------------------------------------------------```tsx
'use client';
import { motion } from 'framer-motion';
const items = [
  { name: 'Sarah L.', text: 'RetVest helped me save for a house deposit without the stress.' },
  { name: 'Mark D.', text: 'The income portfolio covers a chunk of my monthly bills.' },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What our clients say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <p className="text-gray-700">“{t.text}”</p>
              <cite className="mt-4 block text-primary font-semibold">— {t.name}</cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
