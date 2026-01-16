'use client';

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const productsData = [
    {
        id: 1,
        title: "DISCOVERY SET: A ROYAL STORY BY FRAGANOTE",
        image: "/images/footer.jpg",
        price: 1199,
        mrp: 1699,
        date: "2024-01-01",
        onSale: true,

    },
    {
        id: 2,
        title: "ROYAL AMBER - EAST",
        subtitle: "Spicy | Ambery",
        image: "/images/footer.jpg",
        price: 999,
        mrp: 1699,
        date: "2024-01-05",
    },
    {
        id: 3,
        title: "ROYAL GARDENS - WEST",
        subtitle: "Floral | Fruity | Musky",
        image: "/images/footer.jpg",
        hoverImage: "/images/home.jpg",

        price: 999,
        mrp: 1699,
        date: "2023-12-20",
    },
    {
        id: 4,
        title: "ROYAL OUD - NORTH",
        subtitle: "Woody | Smoky",
        image: "/images/footer.jpg",
        price: 1099,
        mrp: 1799,
        date: "2024-02-01",
        onSale: true,

    },
    {
        id: 5,
        title: "SANDAL BLOOM - SOUTH",
        subtitle: "Soft | Creamy",
        image: "/perfume5.png",
        price: 1299,
        mrp: 1899,
        date: "2023-11-15",
    },
    {
        id: 6,
        title: "AMBER FLORA",
        subtitle: "Sweet | Warm",
        image: "/perfume6.png",
        price: 899,
        mrp: 1499,
        date: "2024-02-10",
    },
];

export default function CommonCartItems() {
    const [sortOpen, setSortOpen] = useState(false);
    const [sortBy, setSortBy] = useState("Featured");
const { addToCart } = useCart();


    const sortedProducts = [...productsData].sort((a, b) => {
        switch (sortBy) {
            case "Alphabetically, A-Z":
                return a.title.localeCompare(b.title);
            case "Alphabetically, Z-A":
                return b.title.localeCompare(a.title);
            case "Price, low to high":
                return a.price - b.price;
            case "Price, high to low":
                return b.price - a.price;
            case "Date, new to old":
                return new Date(b.date) - new Date(a.date);
            case "Date, old to new":
                return new Date(a.date) - new Date(b.date);
            default:
                return 0;
        }
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">

            {/* 🔹 SORT BAR */}
            <div className="relative mb-6 w-60">
                <button
                    onClick={() => setSortOpen(!sortOpen)}
                    className="flex items-center justify-between w-full border px-4 py-2 text-sm"
                >
                    {sortBy}
                    <span className="ml-2">⌄</span>
                </button>

                {sortOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white border shadow-md text-sm">
                        {[
                            "Featured",
                            "Best selling",
                            "Alphabetically, A-Z",
                            "Alphabetically, Z-A",
                            "Price, low to high",
                            "Price, high to low",
                            "Date, old to new",
                            "Date, new to old",
                        ].map((option) => (
                            <div
                                key={option}
                                onClick={() => {
                                    setSortBy(option);
                                    setSortOpen(false);
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* 🔹 PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProducts.map((item) => (
                    <div key={item.id} className="text-center">

                        <div className="relative w-full h-[420px] overflow-hidden group">

                            {/* 🔴 ON SALE BADGE */}
                            {item.onSale && (
                                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full z-20">
                                    ON SALE
                                </span>
                            )}

                            {/* MAIN IMAGE */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                            />


                            <Image
                                src={item.hoverImage}
                                alt={`${item.title} hover`}
                                fill
                                className="
                    object-cover
                    opacity-0
                    scale-110
                    transition-all
                    duration-500
                    ease-out
                    group-hover:opacity-100
                    group-hover:scale-100
                "
                            />

                        </div>


                        <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide">
                            {item.title}
                        </h3>

                        {item.subtitle && (
                            <p className="text-sm text-gray-800 mt-1">{item.subtitle}</p>
                        )}

                        <div className="mt-2 text-lg">
                            <span className="font-semibold">₹ {item.price}</span>
                            <span className="line-through text-gray-400 ml-2">
                                MRP ₹ {item.mrp}
                            </span>
                        </div>

                        <button
                        onClick={() => addToCart(item)}
                        className="mt-4 w-full border border-black py-3 text-lg hover:bg-black hover:text-white transition"
                        >
                        Add to cart
                        </button>


                    </div>
                ))}
            </div>
        </div>
    );
}
