"use client";

import { X, Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function InstagramReelModal({ open, onClose, reel }) {
  const [muted, setMuted] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white"
      >
        <X size={28} />
      </button>

      <div className="bg-white rounded-xl w-[90%] max-w-[1100px] h-[90%] flex overflow-hidden">
        {/* LEFT – VIDEO */}
        <div className="w-1/2 bg-black relative flex items-center justify-center">
          <video
            src={reel.video}
            autoPlay
            loop
            muted={muted}
            className="h-full w-full object-cover"
          />

          {/* Mute Button */}
          <button
            onClick={() => setMuted(!muted)}
            className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="w-1/2 p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 border-b pb-4">
            <Image
              src="/images/logo.png"
              alt="brand"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-semibold">fraganote</p>
          </div>

          {/* Caption */}
          <div className="mt-6 text-sm text-gray-700 leading-relaxed overflow-y-auto">
            <p>{reel.caption}</p>
            <br />
            <p className="text-gray-500">{reel.tags}</p>
          </div>

          {/* Date */}
          <div className="mt-auto text-xs text-gray-400">
            {reel.date}
          </div>
        </div>
      </div>
    </div>
  );
}
