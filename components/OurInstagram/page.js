"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import InstagramReelModal from "./InstagramReelModal";
const instagramReels = [
  {
    thumbnail: "/images/footer.jpg",
    video: "/videos/reel1.mp4",
    caption:
      "The way to be unforgettable and sophisticated without having to say a word is with Sinful Rose.",
    tags:
      "[Fraganote, Sinful Rose, Best Fragrances for Women, Luxury Perfume]",
    date: "3 January",
  },
  {
    thumbnail: "/images/home.jpg",
    video: "/videos/reel2.mp4",
    caption: "Luxury in every drop.",
    tags: "[Unisex Perfume, Musk, Floral]",
    date: "5 January",
  },
  {
    thumbnail: "/images/footer.jpg",
    video: "/videos/reel3.mp4",
    caption: "Elegance that speaks.",
    tags: "[Premium Perfume, Long Lasting]",
    date: "7 January",
  }, {
    thumbnail: "/images/home.jpg",
    video: "/videos/reel2.mp4",
    caption: "Luxury in every drop.",
    tags: "[Unisex Perfume, Musk, Floral]",
    date: "5 January",
  },
  {
    thumbnail: "/images/footer.jpg",
    video: "/videos/reel3.mp4",
    caption: "Elegance that speaks.",
    tags: "[Premium Perfume, Long Lasting]",
    date: "7 January",
  }, {
    thumbnail: "/images/home.jpg",
    video: "/videos/reel2.mp4",
    caption: "Luxury in every drop.",
    tags: "[Unisex Perfume, Musk, Floral]",
    date: "5 January",
  },
  {
    thumbnail: "/images/footer.jpg",
    video: "/videos/reel3.mp4",
    caption: "Elegance that speaks.",
    tags: "[Premium Perfume, Long Lasting]",
    date: "7 January",
  }, {
    thumbnail: "/images/home.jpg",
    video: "/videos/reel2.mp4",
    caption: "Luxury in every drop.",
    tags: "[Unisex Perfume, Musk, Floral]",
    date: "5 January",
  },
  {
    thumbnail: "/images/footer.jpg",
    video: "/videos/reel3.mp4",
    caption: "Elegance that speaks.",
    tags: "[Premium Perfume, Long Lasting]",
    date: "7 January",
  }, {
    thumbnail: "/images/home.jpg",
    video: "/videos/reel2.mp4",
    caption: "Luxury in every drop.",
    tags: "[Unisex Perfume, Musk, Floral]",
    date: "5 January",
  },
  {
    thumbnail: "/images/footer.jpg",
    video: "/videos/reel3.mp4",
    caption: "Elegance that speaks.",
    tags: "[Premium Perfume, Long Lasting]",
    date: "7 January",
  }, {
    thumbnail: "/images/home.jpg",
    video: "/videos/reel2.mp4",
    caption: "Luxury in every drop.",
    tags: "[Unisex Perfume, Musk, Floral]",
    date: "5 January",
  },
  {
    thumbnail: "/images/footer.jpg",
    video: "/videos/reel3.mp4",
    caption: "Elegance that speaks.",
    tags: "[Premium Perfume, Long Lasting]",
    date: "7 January",
  },
];

export default function InstagramSection() {
  const sliderRef = useRef(null);
  const [activeReel, setActiveReel] = useState(null);

  const scrollLeftajs = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <section className="w-full py-14 bg-white relative">
        <h2 className="text-center text-5xl tracking-widest mb-10">
          OUR INSTAGRAM
        </h2>

        <div className="relative max-w-[1400px] mx-auto px-6">
          {/* Left Arrow */}
          <button
            onClick={scrollLeftajs}
            className="absolute left-10 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow rounded-full w-10 h-10 flex items-center justify-center"
          >
            <ChevronLeft />
          </button>

          {/* Images */}
          <div
            ref={sliderRef}
            className="flex gap-1 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {instagramReels.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveReel(item)}
                className="min-w-[220px] h-[260px] relative overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.thumbnail}
                  alt="Instagram"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-10 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow rounded-full w-10 h-10 flex items-center justify-center"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* MODAL */}
      <InstagramReelModal
        open={!!activeReel}
        reel={activeReel}
        onClose={() => setActiveReel(null)}
      />
    </>
  );
}
