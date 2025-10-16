
--------------------------------------------------

------------------------------------------------```tsx
import ScrollReveal from '@/components/ScrollReveal';

export default function LocalPage() {
  return (
    <div className="px-6 py-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-4">Invest Local</h1>
        <p className="text-gray-600 mb-12">Fund Irish businesses you believe in.</p>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6">
        {['Café Chain', 'Green Energy', 'Craft Brewery'].map((t) => (
          <div key={t} className="border rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{t}</h3>
            <p className="text-gray-600">Revenue-share notes, 8 % target IRR.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
