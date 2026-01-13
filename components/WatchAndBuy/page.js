"use client";

import { useRef, useState } from "react";

const videos = [
  {
    id: 1,
    src: "/videos/v1.mp4",
    title: "VANILLA WOOD 50ML",
    price: "₹999",
    mrp: "₹1,699",
    off: "41% off",
  },
  {
    id: 2,
    src: "/videos/v2.mp4",
    title: "DRUNKEN CAKE 50ML",
    price: "₹999",
    mrp: "₹1,699",
    off: "41% off",
  },
  {
    id: 3,
    src: "/videos/v3.mp4",
    title: "NOT JUST MANGO 50ML",
    price: "₹999",
    mrp: "₹1,699",
    off: "41% off",
  },
  {
    id: 4,
    src: "/videos/v1.mp4",
    title: "BERRY ADDICTION 50ML",
    price: "₹999",
    mrp: "₹1,699",
    off: "41% off",
  },
  {
    id: 5,
    src: "/videos/v2.mp4",
    title: "SUMMER BREEZE 50ML",
    price: "₹999",
    mrp: "₹1,699",
    off: "41% off",
  },
  {
    id: 6,
    src: "/videos/v3.mp4",
    title: "OCEAN MIST 50ML",
    price: "₹999",
    mrp: "₹1,699",
    off: "41% off",
  },
];

export default function WatchAndBuy() {
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState({});

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(prev => ({ ...prev, [index]: true }));
    } else {
      video.pause();
      setIsPlaying(prev => ({ ...prev, [index]: false }));
    }
  };

  const scroll = (direction) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollAmount = 300;
    
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="px-4 py-12 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            WATCH & <span className="text-amber-600">BUY</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our fragrances in action. Tap to play videos and discover your next favorite scent.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative group">
          {/* Left Navigation Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Videos Container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-4"
          >
            {videos.map((item, index) => (
              <div
                key={item.id}
                className="min-w-[280px] md:min-w-[320px] flex-shrink-0 group/card"
              >
                {/* Video Card */}
                <div className="relative rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div
                    className="relative aspect-[9/16] overflow-hidden"
                    onClick={() => togglePlay(index)}
                  >
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      src={item.src}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Play/Pause Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isPlaying[index] ? 'opacity-0 group-hover/card:opacity-100' : 'opacity-100'}`}>
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                          {isPlaying[index] ? (
                            <div className="flex gap-1">
                              <div className="w-1 h-6 bg-gray-900 rounded-full"></div>
                              <div className="w-1 h-6 bg-gray-900 rounded-full"></div>
                            </div>
                          ) : (
                            <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Icon */}
                    <div className="absolute bottom-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                      </svg>
                    </div>

                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {item.off}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 md:p-6 bg-white">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-gray-900">
                          {item.price}
                        </span>
                        <span className="text-gray-400 line-through">
                          {item.mrp}
                        </span>
                      </div>
                      
                      <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium">
                        Add to Cart
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                        </svg>
                        Free Shipping
                      </span>
                      <span>⭐ 4.8 (120)</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3].map((dot) => (
            <button
              key={dot}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-300"
              aria-label={`Go to slide ${dot}`}
            />
          ))}
        </div>
      </div>

      {/* Custom Scrollbar Hide */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}