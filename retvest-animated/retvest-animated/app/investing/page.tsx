
------------------------------------------------```tsx
import ScrollReveal from '@/components/ScrollReveal';
import RiskSlider from '@/components/RiskSlider';

export default function InvestingPage() {
  return (
    <div className="px-6 py-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <h1 className="text-4xl font-bold mb-4">Goal-Based Investing</h1>
        <p className="text-gray-600 mb-12">Build a portfolio tailored to your life goals.</p>
      </ScrollReveal>
      <RiskSlider />
    </div>
  );
}
