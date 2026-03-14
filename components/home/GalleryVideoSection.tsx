"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, Pause, Camera, Video, Images, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const galleryItems = [
  { id: 1, category: "Akademik", title: "Pembelajaran Kelas", size: "large" },
  { id: 2, category: "Tahfidz", title: "Hafalan Al-Quran", size: "small" },
  { id: 3, category: "Sholat", title: "Sholat Dhuha", size: "small" },
  { id: 4, category: "Event", title: "Peringatan Hari Besar Islam", size: "wide" },
  { id: 5, category: "Olahraga", title: " Activities", size: "medium" },
  { id: 6, category: "Kaligrafi", title: "Seni Islami", size: "medium" },
];

const videos = [
  {
    id: 1,
    title: "Profil SDIT Birrul Walidayn",
    thumbnail: "school",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Program Tahfidz",
    thumbnail: "quran",
    duration: "2:30",
  },
  {
    id: 3,
    title: "Activities Santri",
    thumbnail: "activities",
    duration: "4:15",
  },
];

export default function GalleryVideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-emerald-900" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold mb-4 border border-emerald-100 shadow-sm">
            <Images className="w-4 h-4" />
            Galeri & Video
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-950 mb-4">
            Momen Berkah SDIT Birrul Walidayn
          </h2>
          <p className="text-emerald-700/70 max-w-2xl mx-auto font-medium">
            Kenangan indah dari kegiatan pembelajaran dan kegiatan Islami kami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 mb-16"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
                item.size === "large" ? "col-span-2 row-span-2" :
                item.size === "wide" ? "col-span-2 md:col-span-3" :
                item.size === "medium" ? "col-span-2" :
                "col-span-1"
              }`}
              style={{ minHeight: item.size === "large" ? "320px" : item.size === "wide" ? "180px" : "150px" }}
            >
              <div className="absolute inset-0 bg-emerald-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-8 h-8 md:w-12 md:h-12 text-emerald-600/30 group-hover:text-emerald-600/50 transition-colors" />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-gold-400 text-emerald-950 text-[10px] font-bold rounded-full mb-2">
                  {item.category}
                </span>
                <h4 className="text-white font-bold text-sm md:text-base leading-tight">{item.title}</h4>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/30">
                <ArrowRight className="w-4 h-4 text-emerald-950" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-12 bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="w-12 h-12 bg-gold-400 rounded-2xl flex items-center justify-center shadow-lg shadow-gold-400/20 rotate-3">
              <Video className="w-6 h-6 text-emerald-950" />
            </div>
            <div className="text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-emerald-950">Video Kegiatan</h3>
              <p className="text-emerald-700/60 text-sm font-semibold tracking-wide uppercase">Life at Birrul Walidayn</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video bg-emerald-100 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 border-4 border-white">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-400 transition-all shadow-xl">
                      <Play className="w-7 h-7 text-emerald-950 ml-1 fill-emerald-950" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-emerald-950 text-white text-[10px] font-bold rounded-md">
                    {video.duration}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent opacity-60" />
                </div>
                <h4 className="text-emerald-900 font-bold mt-4 group-hover:text-emerald-600 transition-colors text-center px-2">
                  {video.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button href="/galeri" variant="primary" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-10 py-4 shadow-xl shadow-emerald-600/20 transition-all hover:scale-105 font-bold">
            Lihat Semua Galeri
          </Button>
        </motion.div>
      </div>

      <motion.div
        style={{ y: y1 }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-gold-200/30 rounded-full blur-3xl opacity-50 pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl opacity-50 pointer-events-none"
      />
    </section>
  );
}
