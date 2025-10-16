
--------------------------------------------------

------------------------------------------------```tsx
import ScrollReveal from './ScrollReveal';
const people = [
  { name: 'Aoife Byrne', role: 'CEO' },
  { name: 'Ciarán Murphy', role: 'CTO' },
  { name: 'Sarah Walsh', role: 'Head of Compliance' },
];

export default function Team() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {people.map((p) => (
        <ScrollReveal key={p.name}>
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <div className="bg-gray-200 rounded-full w-24 h-24 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-center">{p.name}</h3>
            <p className="text-center text-gray-600">{p.role}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
