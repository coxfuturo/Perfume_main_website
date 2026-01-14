"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Sid",
    heading: "Priced Well",
    text: "A sophisticated mild fragrance that lights me up every time. Would highly recommend this day wear. Great citrusy and woody perfume",
    product: "Citrus Amber 50ML",
    image: "/products/citrus-amber.png",
  },
  {
    name: "Neha and Rahul",
    heading: "Oud for everyday use",
    text: "This one is an underdog! I bought it for myself, but my fiancé ordering a second bottle was not only a choice but also a compliment. Loved it!",
    product: "Persian Oud 50ML",
    image: "/products/persian-oud.png",
  },
  {
    name: "Amit",
    heading: "Perfect Daily Wear",
    text: "Light fragrance, very classy and lasts well for office hours.",
    product: "Ocean Musk 50ML",
    image: "/products/ocean-musk.png",
  },
  {
    name: "Riya",
    heading: "Amazing Quality",
    text: "Did not expect this quality at this price point. Super impressed!",
    product: "Rose Vanilla 50ML",
    image: "/products/rose-vanilla.png",
  },
];

export default function TestimonialsFigma() {
  const [index, setIndex] = useState(0);
  const slides = Math.ceil(reviews.length / 2);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides]);

  return (
    <section className="bg-white py-20 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-[36px] font-medium tracking-wide mb-14">
        LOVED BY <span className="font-bold">2 LAKH+</span> CUSTOMERS
      </h2>

      {/* Slider */}
      <div className="max-w-[1200px] mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {Array.from({ length: slides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-6"
            >
              {reviews
                .slice(slideIndex * 2, slideIndex * 2 + 2)
                .map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-gray-100 shadow-[0_0_30px_rgba(0,0,0,0.04)] p-8"
                  >
                    {/* Name */}
                    <p className="text-sm font-medium mb-2">{item.name}</p>

                    {/* Stars */}
                    <div className="flex gap-1 text-green-500 mb-4">
                      ★★★★★
                    </div>

                    {/* Heading */}
                    <h3 className="font-semibold mb-3">
                      {item.heading}
                    </h3>

                    {/* Review */}
                    <p className="text-gray-500 text-[15px] leading-7">
                      {item.text}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gray-200 my-6" />

                    {/* Product */}
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.image}
                        alt={item.product}
                        width={44}
                        height={44}
                        className="rounded"
                      />
                      <span className="text-sm font-medium">
                        {item.product}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
