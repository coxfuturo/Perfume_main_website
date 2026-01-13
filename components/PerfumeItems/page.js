"use client";

import { useState } from "react";

const newLaunches = [
  {
    id: 1,
    title: "SPICED VANILLA 50ML",
    category: "Gourmand | Spicy",
    price: "999",
    mrp: "1,699",
    tag: "NEW LAUNCH ON SALE",
    tagColor: "bg-red-50 text-red-700 border-red-200",
    imageColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    accentColor: "text-amber-600",
  },
  {
    id: 2,
    title: "LAVENDER TEASE 50ML",
    category: "Lavender | Musk",
    price: "999",
    mrp: "1,699",
    tag: "NEW LAUNCH ON SALE",
    tagColor: "bg-red-50 text-red-700 border-red-200",
    imageColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    accentColor: "text-purple-600",
  },
  {
    id: 3,
    title: "CARAMEL LOADED POPCORN 50ML",
    category: "Gourmand",
    price: "999",
    mrp: "1,699",
    tag: "LIMITED EDITION",
    tagColor: "bg-yellow-50 text-yellow-700 border-yellow-200",
    imageColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    accentColor: "text-orange-600",
  },
  {
    id: 4,
    title: "DISCOVERY SET: A ROYAL STORY BY FRAGANOTE",
    category: "Discovery Set",
    price: "999",
    mrp: "1,699",
    tag: "ON SALE",
    tagColor: "bg-green-50 text-green-700 border-green-200",
    imageColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    accentColor: "text-blue-600",
  },
];

export default function NewLaunches() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="px-4 py-16 sm:px-6 md:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Simple and Clean */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            NEW LAUNCHES
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            Fresh arrivals at exclusive prices
          </p>
        </div>

        {/* Products Grid - 4 Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newLaunches.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-gray-300"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Product Image/Placeholder */}
              <div className={`relative h-56 ${product.imageColor} overflow-hidden`}>
                {/* Simple Pattern/Design in Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-current opacity-20"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-current opacity-20"></div>
                </div>

                {/* Product Icon/Representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-full ${product.accentColor.replace('text', 'bg')} bg-opacity-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500`}>
                    <svg className={`w-12 h-12 ${product.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>

                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${product.tagColor} border backdrop-blur-sm`}>
                    {product.tag}
                  </div>
                </div>

                {/* Pin Icon */}
                <div className="absolute top-4 right-4">
                  <div className={`p-2 rounded-full ${product.accentColor} bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.75 10.5h-1.5v-6a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75H6v5.25l4.5-3H15a.75.75 0 00.75-.75v-1.5h3a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Title */}
                <h3 className="font-bold text-gray-900 mb-2 text-base leading-snug">
                  {product.title}
                </h3>

                {/* Category with Icon */}
                <div className="flex items-center gap-1 mb-4">
                  <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                  <span className="text-gray-500 text-xs uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{product.price}
                    </span>
                    <span className="text-gray-400 text-sm line-through">
                      MRP ₹{product.mrp}
                    </span>
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {Math.round((1 - parseInt(product.price)/parseInt(product.mrp)) * 100)}% OFF
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className={`w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform group-hover:-translate-y-0.5 ${hoveredCard === product.id ? 'bg-gray-900 text-white shadow-lg' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
                  Add to cart
                </button>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${product.accentColor.replace('text', 'bg')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* View All Button with Arrow */}
        <div className="text-center mt-14">
          <button className="group px-8 py-3 bg-white text-gray-900 rounded-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm font-semibold flex items-center gap-2 mx-auto">
            View All New Launches
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}