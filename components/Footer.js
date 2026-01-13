import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/footer.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/terms">Terms & Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li className="flex items-center gap-1">
              ▶ <Link href="/grievances">For grievances</Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-sm mb-4 max-w-sm">
            Enter your email below to be the first to know
            about new collections and product launches.
          </p>

          {/* Email Input */}
          <div className="flex items-center bg-white rounded overflow-hidden max-w-md">
            <span className="px-3 text-black">✉</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-2 py-3 text-black text-sm outline-none"
            />
            <button className="px-4 text-black text-lg">→</button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg">
            <Link href="#">f</Link>
            <Link href="#">◎</Link>
          </div>
        </div>

        {/* Orders & Shipping */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Orders and Shipping</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/returns">Delivery & Returns Policy</Link></li>
            <li><Link href="/shipping-policy">Shipping Policy</Link></li>
            <li><Link href="/track-order">Track My Order</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20 py-4 text-center text-xs">
        © 2026 Coxfutue. All Rights Reserved.
      </div>
    </footer>
  );
}
