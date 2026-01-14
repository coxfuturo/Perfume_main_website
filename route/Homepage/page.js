"use client";

import WatchAndBuy from "@/components/WatchAndBuy/page";
import NewLunches from "@/components/PerfumeItems/page";
import BrandMarquee from "@/components/BannerLogo/page";
import TestimonialSlider from "@/components/Review/page";
import Whatsapp from "@/components/Whatsapp/page";
import Instagram from "@/components/OurInstagram/page"

export default function HomePage() {
  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/home.jpg')",
        }}
      >
       
      </div>

      {/* Watch & Buy Section (Image ke niche) */}
      <div className="mt-10">
        <WatchAndBuy />
      </div>
      {/* New Launches Section */}
      <div className="mt-10">
        <NewLunches />
      </div>
      {/* Testimonials Section */}
      <div className="mt-10">
        <TestimonialSlider />
      </div>
      <div className="mt-10">
        <Instagram />
      </div>
      {/* Brand Marquee Section */}
      <div className="mt-10">
        <BrandMarquee />
      </div>
   
      {/* WhatsApp Floating Button */}
        <Whatsapp />
      
    </section>
  );
}
