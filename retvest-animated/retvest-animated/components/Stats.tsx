
--------------------------------------------------

------------------------------------------------```tsx
'use client';
import { motion, useMotionValue, useTransform, useEffect } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  useEffect(() => {
    if (inView) count.set(value);
  }, [inView, value, count]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-primary">
            <Counter value={350} /> M+
          </div>
          <p className="text-gray-600 mt-2">Assets managed</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary">
            <Counter value={120} /> K+
          </div>
          <p className="text-gray-600 mt-2">Active investors</p>
        </div>
        <div>
          <div className="text-4xl font-bold text-primary">
            <Counter value={28} />
          </div>
          <p className="text-gray-600 mt-2">Countries</p>
        </div>
      </div>
    </section>
  );
}
