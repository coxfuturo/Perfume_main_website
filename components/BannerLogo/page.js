"use client";

import Image from "next/image";

const brands = [
  { name: "The Vault", src: "/brands/the-vault.png" },
  { name: "Zepto", src: "/brands/zepto.png" },
  { name: "Nykaa", src: "/brands/nykaa.png" },
  { name: "Myntra", src: "/brands/myntra.png" },
  { name: "Bewakoof", src: "/brands/bewakoof.png" },
  { name: "Amazon", src: "/brands/amazon.png" },
  { name: "Instamart", src: "/brands/instamart.png" },
  { name: "Tata Cliq", src: "/brands/tata-cliq.png" },
];

export default function BrandMarquee() {
  return (
    <div className="w-full overflow-hidden py-6 bg-white">
      <div className="relative flex">
        {/* Animation wrapper */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="mx-10 flex items-center justify-center min-w-[140px]"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={50}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
}
