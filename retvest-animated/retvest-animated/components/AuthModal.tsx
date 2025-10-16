
--------------------------------------------------

------------------------------------------------```tsx
'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function AuthModal({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [view, setView] = useState<'signin' | 'signup'>('signin');
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white rounded-xl p-8 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{view === 'signin' ? 'Sign In' : 'Create Account'}</h3>
            <p className="text-gray-600 mb-6">Coming soon – regulated login.</p>
            <button className="w-full bg-primary text-white py-3 rounded-lg" onClick={() => setOpen(false)}>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
