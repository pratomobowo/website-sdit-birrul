"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Pattern from "@/components/ui/Pattern";
import { Sun, Moon, BookOpen, Heart, Star, Clock } from "lucide-react";
import programsData from "@/data/programs.json";

const programs = [
  {
    title: "Program Tahfidz Al-Quran",
    description: "Program hafalan Al-Quran dengan metode ijazah yang telah terbukti efektif. Target minimal 5 juz dalam 6 tahun dengan bimbingan ustadz/ustadzah hafidz. Setiap siswa akan mendapat ijazah hafalan.",
    features: ["Metode Talaqqi", "Muraja'ah Harian", "Setoran Berkala", "Sertifikasi Ijazah", "Tahsin Al-Quran"],
    icon: BookOpen,
    color: "emerald"
  },
  {
    title: "Pengamalan Sunnah",
    description: "Program pembiasaan amalan sunnah nabawi dalam kehidupan sehari-hari. Siswa dilatih meneladani akhlaq dan kebiasaan Nabi Muhammad Shallallahhu 'Alaihi Wa Sallam.",
    features: ["Sunnah Sholat", "Sunnah Doa", "Sunnah Akhlaq", "Sunnah Mu'amalah", "Sunnah Ibadah"],
    icon: Star,
    color: "gold"
  },
  {
    title: "Akhlaqul Karimah",
    description: "Pembentukan karakter Islami berdasarkan Al-Quran dan Sunnah. Mengajarkan akhlak baik kepada sesama manusia, hewan, dan lingkungan.",
    features: ["Adab terhadap Guru", "Akhlak terhadap Teman", "Bakti kepada Orang Tua", "Kasih Sayang", "Jujur & Amanah"],
    icon: Heart,
    color: "emerald"
  },
];

const sunnahDaily = [
  { name: "Sholat Dhuha Berjamaah", icon: Sun },
  { name: "Dzikir Pagi & Sore", icon: Clock },
  { name: "Tilawah Al-Quran", icon: BookOpen },
  { name: "Membaca Sholawat", icon: Heart },
];

export default function FeaturedPrograms() {
  return (
    <section className="relative py-24 bg-emerald-50 overflow-hidden">
      {/* Playful Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 50, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -right-20 w-96 h-96 bg-gold-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-20 left-1/4 w-64 h-64 bg-emerald-100/50 rounded-full blur-2xl"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          title="Program Unggulan"
          subtitle="Program pendidikan berbasis Al-Quran dan As-Sunnah"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div 
                  className={`h-48 relative overflow-hidden ${
                    program.color === 'emerald' 
                      ? 'bg-gradient-to-br from-emerald-600 to-emerald-800' 
                      : 'bg-gradient-to-br from-gold-500 to-gold-600'
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-white/30" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-emerald-800 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-16 bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sun className="w-8 h-8 text-gold-400" />
            <h3 className="font-display text-2xl font-bold text-white text-center">
              Pembiasaan Sunnah Harian
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sunnahDaily.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                  <Icon className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                  <span className="text-white text-sm font-medium">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button href="/program" variant="secondary">
            Lihat Semua Program
          </Button>
        </div>
      </div>
    </section>
  );
}
