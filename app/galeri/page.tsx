"use client";

import { motion } from "framer-motion";
import { Camera, Images } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = ["Semua", "Akademik", "Ekstrakurikuler", "Event", "Fasilitas"];

const galleryItems = [
  { id: 1, category: "Akademik", title: "Pembelajaran di Kelas" },
  { id: 2, category: "Ekstrakurikuler", title: "Pramuka" },
  { id: 3, category: "Event", title: "Hari Besar Islam" },
  { id: 4, category: "Fasilitas", title: "Musholla" },
  { id: 5, category: "Akademik", title: "Program Tahfidz" },
  { id: 6, category: "Ekstrakurikuler", title: "Seni Tari" },
  { id: 7, category: "Event", title: "Upacara Bendera" },
  { id: 8, category: "Fasilitas", title: "Perpustakaan" },
];

export default function GaleriPage() {
  return (
    <div className="">
      <section className="relative py-20 bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 0L20 10L10 20L0 10Z" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Galeri
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-100"
          >
            Momen berharga dari kegiatan sekolah
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? "bg-emerald-600 text-white"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-emerald-700">
                  <Camera className="w-12 h-12 mb-2 opacity-50" />
                  <span className="text-sm font-medium">{item.title}</span>
                  <span className="text-xs text-emerald-500 mt-1">{item.category}</span>
                </div>
                <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
