"use client";

import { motion } from "framer-motion";
import { School, Moon, Library, Trophy, Utensils, Monitor } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import facilitiesData from "@/data/facilities.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  School,
  Moon,
  Library,
  Trophy,
  Utensils,
  Monitor,
};

export default function FasilitasPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
            Fasilitas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-100"
          >
            Sarana dan prasana pendukung pembelajaran
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle
            title="Fasilitas Sekolah"
            subtitle="Fasilitas modern untuk mendukung proses pembelajaran"
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {facilitiesData.facilities.map((facility, index) => {
              const Icon = iconMap[facility.icon] || School;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-emerald-600 to-emerald-800 relative flex items-center justify-center">
                    <Icon className="w-16 h-16 text-emerald-200" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-emerald-800 mb-3">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Fasilitas Lainnya
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              SDIT Birrul Walidayn terus mengembangkan fasilitas untuk kenyamanan belajar siswa
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Ruang UKS", "Aula Pertemuan", "Taman Baca", "Area Parkir"].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur rounded-xl p-4 text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
