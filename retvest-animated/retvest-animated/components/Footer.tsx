
--------------------------------------------------

------------------------------------------------```tsx
export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <h3 className="font-bold mb-2">RetVest</h3>
          <p>Invest with purpose</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Product</h3>
          <a className="block hover:underline" href="/investing">Investing</a>
          <a className="block hover:underline" href="/income">Income</a>
          <a className="block hover:underline" href="/local">Local</a>
        </div>
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <a className="block hover:underline" href="/about">About</a>
          <a className="block hover:underline" href="/contact">Contact</a>
        </div>
        <div>
          <h3 className="font-bold mb-2">Regulatory</h3>
          <p>Authorised and regulated by the Central Bank of Ireland.</p>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-white/20">© {new Date().getFullYear()} RetVest</div>
    </footer>
  );
}
