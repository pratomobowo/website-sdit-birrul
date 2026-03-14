"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, Users, Star, ArrowRight, ChevronRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const kajianRutin = [
  {
    name: "Kajian Al-Quran",
    description: "Pembelajaran membaca Al-Quran dengan tartil dan tajwid yang benar",
    day: "Sabtu",
    time: "08.00 - 10.00",
    icon: "book",
    color: "emerald"
  },
  {
    name: "Kajian Hadits",
    description: "Pembelajaran hadits nabawi dan pengamalannya dalam kehidupan sehari-hari",
    day: "Minggu",
    time: "08.00 - 10.00",
    icon: "star",
    color: "gold"
  },
  {
    name: "Kajian Akhlaq",
    description: "Pembinaan akhlakul karimah berbasis Al-Quran dan As-Sunnah",
    day: "Jumat",
    time: "13.00 - 14.30",
    icon: "heart",
    color: "emerald"
  },
];

const kajianTematik = [
  {
    title: "Ramadhan",
    description: "Kajian khusus bulan Ramadhan, tadarus Al-Quran, dan shaum",
    date: "Bulan Ramadhan",
    color: "emerald"
  },
  {
    title: "Islamic Parenting",
    description: "Kajian untuk orang tua tentang mendidik anak dalam Islam",
    date: "Setiap Bulan",
    color: "gold"
  },
  {
    title: "Aqiqah & Undangan",
    description: "Acara aqiqah dan undangan special lainnya",
    date: "Sesuai Request",
    color: "emerald"
  },
  {
    title: "Kajian Special",
    description: "Kajian temáticas dengan tema pilihan sesuai kebutuhan",
    date: "Sesuai Jadwal",
    color: "gold"
  },
];

export default function KajianSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Kajian & Activities
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            Jadwal Kajian SDIT Birrul Walidayn
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kajian rutin dan tematik untuk membentuk generasi qurani yang cinta kepada Allah dan Rasul-Nya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-emerald-800">Kajian Rutin</h3>
                <p className="text-emerald-600 text-sm">Jadwal tetap setiap minggu</p>
              </div>
            </div>

            <div className="space-y-4">
              {kajianRutin.map((kajian, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-emerald-50 to-white p-5 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${kajian.color === "emerald" ? "bg-emerald-600" : "bg-gold-500"
                        }`}>
                        <BookOpen className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-emerald-800 text-lg mb-1">{kajian.name}</h4>
                        <p className="text-gray-600 text-sm mb-2">{kajian.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-emerald-600">
                            <Calendar className="w-4 h-4" />
                            {kajian.day}
                          </span>
                          <span className="flex items-center gap-1 text-emerald-600">
                            <Clock className="w-4 h-4" />
                            {kajian.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-emerald-300 group-hover:text-emerald-600 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-emerald-900" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-emerald-800">Kajian Tematik</h3>
                <p className="text-emerald-600 text-sm">Kajian khusus sesuai momentum</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {kajianTematik.map((kajian, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl cursor-pointer group ${kajian.color === "gold"
                      ? "bg-gradient-to-br from-gold-50 to-white border-gold-200 hover:border-gold-400"
                      : "bg-gradient-to-br from-emerald-50 to-white border-emerald-200 hover:border-emerald-400"
                    }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${kajian.color === "gold" ? "bg-gold-500" : "bg-emerald-600"
                    }`}>
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-emerald-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {kajian.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">{kajian.description}</p>
                  <span className={`inline-flex items-center gap-1 text-sm font-medium ${kajian.color === "gold" ? "text-gold-600" : "text-emerald-600"
                    }`}>
                    <Calendar className="w-4 h-4" />
                    {kajian.date}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 p-6 bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-2xl text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-lg mb-1">Ingin mengikuti kajian?</h4>
                  <p className="text-emerald-200 text-sm">Hubungi kami untuk informasi lebih lanjut</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
