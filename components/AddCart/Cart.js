"use client";

import Image from "next/image";

export default function Cart({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-[380px] max-w-full bg-white z-50 flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="font-semibold">Your Cart (6 items)</h2>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        {/* Welcome Banner */}
        <div className="bg-black text-white text-sm text-center py-2">
          Welcome to Fraganote Store 👋
        </div>

        {/* Offer */}
        <div className="px-4 py-3 text-center text-sm border-b">
          <b>Gift Wrap + Free Sample + Christmas Goodies</b> + Fraganote Tote Bag  
          <div className="flex justify-between mt-2 text-sm">
            <span className="line-through text-gray-400">₹998.00</span>
            <span className="font-semibold">₹1,498.00</span>
          </div>
        </div>

        {/* Unlock Section */}
        <div className="flex justify-around text-xs py-3 border-b">
          <div className="text-center">
            🎁
            <p>Unlock Gift Wrap</p>
          </div>
          <div className="text-center">
            👜
            <p>Goodies, Tote Bag</p>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">

          {/* Item */}
          <div className="flex gap-3">
            <Image
              src="/perfume.png"
              alt="Perfume"
              width={60}
              height={60}
              className="rounded"
            />

            <div className="flex-1">
              <h4 className="text-sm font-medium">Lavender Tease 50ML</h4>
              <p className="text-green-600 text-xs">(44% OFF)</p>
              <p className="font-semibold">₹1,899.00</p>

              <div className="flex items-center gap-2 mt-2">
                <button className="border px-2">-</button>
                <span>2</span>
                <button className="border px-2">+</button>
                <button className="ml-auto text-red-500">🗑</button>
              </div>
            </div>
          </div>

          {/* Free Goodies */}
          <div className="flex gap-3 items-center">
            <Image
              src="/goodies.png"
              alt="Goodies"
              width={50}
              height={50}
            />
            <div className="flex-1">
              <p className="text-sm font-medium">Goodies</p>
              <span className="text-green-600 text-sm">FREE</span>
            </div>
            <span className="border px-2 py-1 text-sm">1</span>
          </div>
        </div>

        {/* Savings */}
        <div className="bg-green-100 text-green-700 text-xs text-center py-2">
          ₹1,797.00 Saved so far!
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-4">
          <div className="flex justify-between font-semibold mb-3">
            <span>Estimated Total</span>
            <span>₹1,899.00</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded">
            Checkout
          </button>

          <p className="text-xs text-center mt-2 text-gray-500">
            Powered by CoxFuture Technologies
          </p>
        </div>
      </div>
    </>
  );
}
