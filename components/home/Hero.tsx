"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import profileData from "@/data/profile.json";


export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-emerald-50/50 pt-20 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Character Images & Playful Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden z-0">
        {/* Left Character (2.png) - Enlarged and positioned with 15% overflow */}
        <motion.div
           initial={{ opacity: 0, x: -150 }}
           animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
           transition={{ 
             opacity: { duration: 1 }, 
             x: { duration: 1 },
             y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
           }}
           className="absolute bottom-[38%] left-0 -translate-x-1/2 sm:bottom-0 sm:left-auto sm:translate-x-0 sm:-left-8 lg:-left-16 w-[220px] sm:w-[300px] lg:w-[450px] z-10"
        >
          <Image 
            src="/2.png" 
            alt="Anak Laki-laki Berlari" 
            width={600} 
            height={600} 
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Right Character (1.png) - Enlarged and positioned with 15% overflow */}
        <motion.div
           initial={{ opacity: 0, x: 150 }}
           animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
           transition={{ 
             opacity: { duration: 1 }, 
             x: { duration: 1 },
             y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } 
           }}
           className="absolute bottom-[38%] right-0 translate-x-1/2 sm:bottom-0 sm:right-auto sm:translate-x-0 sm:-right-8 lg:-right-16 w-[220px] sm:w-[300px] lg:w-[450px] z-10"
        >
          <Image 
            src="/1.png" 
            alt="Anak Perempuan Berlari" 
            width={600} 
            height={600} 
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Abstract Blobs - Optimized for Performance */}
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-200/50 rounded-full blur-2xl opacity-60" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-32 -right-20 w-80 h-80 bg-gold-200/50 rounded-full blur-2xl opacity-60" 
        />
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-sky-200/50 rounded-full blur-2xl opacity-50" 
        />

        {/* Cloud Ornaments - Enlarged and moved higher up */}
        <motion.div
           animate={{ 
             x: [-30, 30, -30],
             y: [0, -15, 0] 
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[5%] left-[5%] w-48 md:w-80 opacity-50 hidden md:block"
        >
          <Image src="/awan1.png" alt="Cloud" width={400} height={300} className="w-full h-auto" />
        </motion.div>

        <motion.div
           animate={{ 
             x: [40, -40, 40],
             y: [0, 20, 0] 
           }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute top-[10%] right-[8%] w-56 md:w-96 opacity-40 hidden md:block"
        >
          <Image src="/awan2.png" alt="Cloud" width={400} height={300} className="w-full h-auto" />
        </motion.div>

        <motion.div
           animate={{ 
             x: [-50, 50, -50],
             y: [0, -25, 0] 
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute top-[25%] left-[25%] w-52 md:w-80 opacity-50 hidden md:block"
        >
          <Image src="/awan1.png" alt="Cloud" width={400} height={300} className="w-full h-auto" />
        </motion.div>

        <motion.div
           animate={{ 
             x: [30, -30, 30],
             y: [0, 15, 0] 
           }}
           transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
           className="absolute top-[18%] right-[30%] w-44 md:w-72 opacity-40 hidden md:block"
        >
          <Image src="/awan2.png" alt="Cloud" width={400} height={300} className="w-full h-auto" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center pt-4 sm:pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-700 rounded-full text-xs sm:text-sm font-bold border-2 border-emerald-100 shadow-sm tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-gold-500" />
              Pendaftaran Siswa Baru 2025/2026
            </span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-emerald-950 leading-[1.1] sm:leading-tight px-2">
            SDIT <br className="sm:hidden" />
            <span className="text-emerald-600 relative inline-block">
              Birrul Walidayn
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold-400 opacity-70 hidden sm:block" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg sm:text-2xl md:text-3xl text-emerald-800 font-medium max-w-4xl mx-auto leading-relaxed px-4">
            {profileData.tagline}
          </p>
          
          <p className="text-sm sm:text-lg text-emerald-600/80 max-w-2xl mx-auto leading-relaxed px-6">
            Mendidik generasi Qurani yang ceria, kreatif, dan cerdas berbasis Akhlakul Karimah & As-Sunnah Nabawiyah.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-8 px-4">
            <Button href="/pmb" variant="primary" size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 text-base rounded-full px-8 py-4 font-bold border-2 border-emerald-500 hover:border-emerald-600 transition-all hover:scale-105">
              Daftar Sekarang
            </Button>
            <Button href="/tentang" variant="secondary" size="lg" className="w-full sm:w-auto bg-white border-2 border-emerald-100 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-200 text-base rounded-full px-8 py-4 font-bold transition-all shadow-sm hover:shadow-md">
              Profil Sekolah
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - redesigned to be brighter */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 mt-8 hidden md:block pointer-events-none"
      >
        <div className="w-8 h-12 border-2 border-emerald-300 bg-white/50 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-emerald-500 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
