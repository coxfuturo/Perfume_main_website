"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Cart from "./AddCart/Cart";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [perfumeOpen, setPerfumeOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  const cartCount = 0;
  const underlineHover =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full";

  // 👇 Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <style jsx>{`
        @keyframes marqueeLTR {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .marquee-ltr {
          animation: marqueeLTR 20s linear infinite;
          white-space: nowrap;
          display: inline-block;
        }
      `}</style>

      {/* 🔹 Top Announcement Bars */}
      <div
        className={`overflow-hidden transition-all duration-300 ${showTopBar ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-[#89171a] text-white text-xs text-center">
          <div className="marquee-ltr py-2 px-2 tracking-wide">
            DISCOUNTS AND DELIGHTS: UP TO 45% OFF + COMPLIMENTARY FESTIVE GOODIES •
            USE CODE <b>SMELLGOOD5</b>
          </div>
        </div>

        <div className="bg-[#5C0202] text-white text-xs text-center py-2 px-2 tracking-wide">
          EXCLUSIVE CHRISTMAS PACKAGING FOR ALL 50ML PERFUMES ONLY.
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <button
            aria-label="Search"
            className="p-1"
            onClick={() => setSearchOpen(true)}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <Link href="/" className="text-lg md:text-xl font-semibold tracking-widest">
          BRAND LOGO
        </Link>
        {/* 🔍 Search Overlay – Figma Header Style */}
        {searchOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setSearchOpen(false)}
            />

            {/* Search Header */}
            <div className="fixed top-0 left-0 w-full z-50 bg-white">
              <div className="flex items-center justify-between px-6 py-10 border-b">

                {/* 🔹 Logo */}
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-widest"
                >
                  Brand Logo
                </Link>

                {/* 🔹 Search Bar */}
                <div className="flex items-center w-full max-w-xl mx-8 border rounded-md px-4 py-2">
                  <input
                    type="text"
                    placeholder="Search products"
                    autoFocus
                    className="w-full outline-none text-sm placeholder-gray-400"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* 🔹 Account + Cart */}
                <div className="flex items-center gap-6">

                  {/* Account */}
                  <button aria-label="User">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Cart */}
                  <button className="relative">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2Z"
                      />
                    </svg>

                    <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full px-1">
                      {cartCount}
                    </span>
                  </button>

                  {/* Close */}
                  <button
                    className="text-xl"
                    onClick={() => setSearchOpen(false)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Right */}
        <div className="flex items-center gap-5">
          <button aria-label="User" className="p-1">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="relative">
            <button
              aria-label="Cart"
              onClick={() => setCartOpen(true)}
              className="relative p-1 text-black hover:text-red-700 transition"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2Z"
                />
              </svg>

              {/* Cart Count */}
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full px-1">
                {cartCount}
              </span>
            </button>

            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          </div>
        </div>
      </div>

      {/* 🔹 Desktop Nav */}
      <nav className="hidden lg:flex ml-10 flex-wrap items-center gap-x-8 gap-y-2 py-3 text-sm tracking-wider">
        <div
          className="relative"
          onMouseEnter={() => setPerfumeOpen(true)}
          onMouseLeave={() => setPerfumeOpen(false)}
        >
          <span
            className={`cursor-pointer whitespace-nowrap flex items-center gap-1 ${underlineHover}`}
          >
            PERFUMES
            <span className="text-lg">
              {perfumeOpen ? "⌃" : "⌄"}
            </span>
          </span>

          {perfumeOpen && (
            <div className="absolute top-6 left-0 bg-white shadow-md p-4 w-40 z-50">
              <Link href="/perfumes/men" className="block py-1">Men</Link>
              <Link href="/perfumes/women" className="block py-1">Women</Link>
              <Link href="/perfumes/unisex" className="block py-1">Unisex</Link>
            </div>
          )}
        </div>


        <Link href="/Collection/Special-Price" className={`text-red-700 whitespace-nowrap ${underlineHover}`}>
          SPECIAL PRICES
        </Link>

        <Link href="/Collection/The-Royal-Collection" className={`whitespace-nowrap ${underlineHover}`}>
          THE ROYAL COLLECTION
          <span className="text-xs bg-red-700 text-white px-1 ml-1">NEW</span>
        </Link>

        <Link href="/Collection/Discovery-Set" className={`whitespace-nowrap ${underlineHover}`}>
          DISCOVERY SET
        </Link>

        <Link href="/Collection/Byob" className={`whitespace-nowrap ${underlineHover}`}>BYOB</Link>
        <Link href="/gifting" className={`whitespace-nowrap ${underlineHover}`}>GIFTING</Link>

        <Link href="/bundles" className={`whitespace-nowrap ${underlineHover}`}>
          BUNDLES & COMBOS
        </Link>

        <Link href="/new-arrivals" className={`whitespace-nowrap ${underlineHover}`}>
          NEW ARRIVALS
        </Link>

        <Link href="/track-order" className={`mt-6 mb-4 whitespace-nowrap ${underlineHover}`}>
          TRACK MY ORDER
        </Link>
      </nav>


      {/* Mobile Menu */}
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
        </div>
      )}

      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
