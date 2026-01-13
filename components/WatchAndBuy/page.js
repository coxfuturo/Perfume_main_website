"use client";

import { useRef, useState, useEffect } from "react";

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
  {
    id: 7,
    src: "/videos/v1.mp4",
    title: "SANDALWOOD DREAM 50ML",
    price: "₹999",
    mrp: "₹1,699",
    off: "41% off",
  },
  {
    id: 8,
    src: "/videos/v2.mp4",
    title: "CITRUS BLAST 50ML",
    price: "₹999",
    mrp: "₹1,699",
    off: "41% off",
  },
];

export default function WatchAndBuy() {
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState({});
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      // Pause all other videos
      videoRefs.current.forEach((vid, i) => {
        if (i !== index && vid) {
          vid.pause();
          setIsPlaying(prev => ({ ...prev, [i]: false }));
        }
      });
      
      video.play();
      setIsPlaying(prev => ({ ...prev, [index]: true }));
    } else {
      video.pause();
      setIsPlaying(prev => ({ ...prev, [index]: false }));
    }
  };

  const checkScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const cardWidth = 320; // Width of one card including gap
    const scrollAmount = cardWidth * 4; // Scroll 4 cards at a time
    
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
    
    // Check scroll position after scrolling
    setTimeout(checkScroll, 300);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, []);

  return (
    <section className="px-4 py-12 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            WATCH & <span className="text-amber-600">BUY</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Tap to play videos and discover your next favorite fragrance
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          {/* Left Navigation Arrow - Always visible if needed */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:shadow-xl active:scale-95"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Videos Container */}
          <div
            ref={containerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-1 py-3"
          >
            {videos.map((item, index) => (
              <div
                key={item.id}
                className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] flex-shrink-0 group/card"
              >
                {/* Video Card */}
                <div className="relative rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div
                    className="relative aspect-[3/4] overflow-hidden"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                    {/* Play/Pause Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isPlaying[index] ? 'opacity-0 group-hover/card:opacity-100' : 'opacity-100'}`}>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                          {isPlaying[index] ? (
                            <div className="flex gap-1">
                              <div className="w-1 h-4 bg-gray-900 rounded-full"></div>
                              <div className="w-1 h-4 bg-gray-900 rounded-full"></div>
                            </div>
                          ) : (
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Icon */}
                    <div className="absolute bottom-3 left-3 bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                      </svg>
                    </div>

                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-md">
                      {item.off}
                    </div>
                  </div>

                  {/* Product Info - Compact */}
                  <div className="p-3 md:p-4 bg-white">
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 truncate">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg md:text-xl font-bold text-gray-900">
                          {item.price}
                        </span>
                        <span className="text-gray-400 line-through text-sm">
                          {item.mrp}
                        </span>
                      </div>
                      
                      <button className="bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-xs font-medium">
                        Add
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                        </svg>
                        Free Ship
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        4.8
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow - Always visible if needed */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:shadow-xl active:scale-95"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Dots Indicator - Show only if there are more than 4 videos */}
        {videos.length > 4 && (
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: Math.ceil(videos.length / 4) }).map((_, index) => (
              <button
                key={index}
                className="w-1.5 h-1.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-300"
                aria-label={`Go to page ${index + 1}`}
                onClick={() => {
                  if (containerRef.current) {
                    const cardWidth = 280;
                    const scrollAmount = cardWidth * 4 * index;
                    containerRef.current.scrollLeft = scrollAmount;
                  }
                }}
              />
            ))}
          </div>
        )}
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