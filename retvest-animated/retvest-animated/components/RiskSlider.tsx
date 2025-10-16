
--------------------------------------------------

------------------------------------------------```tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const portfolios = ['Conservative', 'Moderate', 'Balanced', 'Growth', 'Aggressive'];

export default function RiskSlider() {
  const [risk, setRisk] = useState(2);
  return (
    <div className="bg-white border rounded-xl p-6 shadow">
      <label className="block font-semibold mb-2">Risk tolerance</label>
      <input
        type="range"
        min="0"
        max="4"
        value={risk}
        onChange={(e) => setRisk(Number(e.target.value))}
        className="w-full mb-3"
      />
      <motion.div
        key={risk}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-lg font-medium text-primary"
      >
        {portfolios[risk]} Portfolio
      </motion.div>
    </div>
  );
}
