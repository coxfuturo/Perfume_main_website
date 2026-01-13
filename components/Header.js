"use client";

import { useState } from "react";
import Link from "next/link";
import Cart from "./AddCart/Cart"; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [perfumeOpen, setPerfumeOpen] = useState(false);
  const cartCount = 0;
    const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="w-full border-b">

      {/* 🔴 Top Offer Bar */}
      <div className="bg-[#7b0f0f] text-white text-xs text-center py-2 px-2 tracking-wide">
        DISCOUNTS AND DELIGHTS: UP TO 45% OFF + COMPLIMENTARY FESTIVE GOODIES •
        USE CODE <b>SMELLGOOD5</b>
      </div>

      {/* 🔹 Main Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4">

        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Search */}
          <button aria-label="Search">🔍</button>
        </div>

        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl font-semibold tracking-widest">
          BRAND LOGO
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button aria-label="User">👤</button>

          <div className="relative">
            <button aria-label="Cart" onClick={() => setCartOpen(true)}>🛍</button>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          </div>
        </div>
      </div>

      {/* 🔹 Desktop Navigation */}
      <nav className="hidden lg:flex justify-center gap-8 py-3 text-sm tracking-wider">

        {/* Perfumes Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setPerfumeOpen(true)}
          onMouseLeave={() => setPerfumeOpen(false)}
        >
          <span className="cursor-pointer">PERFUMES</span>

          {perfumeOpen && (
            <div className="absolute top-6 left-0 bg-white shadow-md p-4 w-40 z-50">
              <Link href="/perfumes/men" className="block py-1">Men</Link>
              <Link href="/perfumes/women" className="block py-1">Women</Link>
              <Link href="/perfumes/unisex" className="block py-1">Unisex</Link>
            </div>
          )}
        </div>

        <Link href="/christmas-store" className="text-red-700">
          CHRISTMAS STORE
        </Link>

        <Link href="/royal-collection">
          THE ROYAL COLLECTION <span className="text-xs bg-red-700 text-white px-1 ml-1">NEW</span>
        </Link>

        <Link href="/discovery-set">DISCOVERY SET</Link>
        <Link href="/byob">BYOB</Link>
        <Link href="/gifting">GIFTING</Link>
        <Link href="/bundles">BUNDLES & COMBOS</Link>
        <Link href="/new-arrivals">NEW ARRIVALS</Link>
        <Link href="/track-order">TRACK MY ORDER</Link>
      </nav>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3 text-sm">

          <button
            className="w-full text-left font-medium"
            onClick={() => setPerfumeOpen(!perfumeOpen)}
          >
            PERFUMES ▾
          </button>

          {perfumeOpen && (
            <div className="pl-4 space-y-2 text-gray-600">
              <Link href="/perfumes/men">Men</Link>
              <Link href="/perfumes/women">Women</Link>
              <Link href="/perfumes/unisex">Unisex</Link>
            </div>
          )}

          <Link href="/christmas-store" className="block text-red-700">
            CHRISTMAS STORE
          </Link>
          <Link href="/royal-collection" className="block">
            THE ROYAL COLLECTION
          </Link>
          <Link href="/discovery-set" className="block">DISCOVERY SET</Link>
          <Link href="/byob" className="block">BYOB</Link>
          <Link href="/gifting" className="block">GIFTING</Link>
          <Link href="/bundles" className="block">BUNDLES & COMBOS</Link>
          <Link href="/new-arrivals" className="block">NEW ARRIVALS</Link>
          <Link href="/track-order" className="block">TRACK MY ORDER</Link>
        </div>
      )}
    <Cart open={cartOpen} onClose={() => setCartOpen(false)} />

    </header>
  );
}
