"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Users, Award, Sparkles, Sun, Moon, Star, Heart, BookMarked } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import programsData from "@/data/programs.json";

export default function ProgramPage() {
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

  const sunnahIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    Sun,
    Moon,
    Star,
    Heart,
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
            Program Akademik
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-100"
          >
            Kurikulum terintegrasi Al-Quran dan As-Sunnah
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              ☀️ Kegiatan Pengamalan Sunnah
            </h2>
            <p className="text-emerald-200">Activities harian yang Berdasarkan As-Sunnah Nabawi</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programsData.sunnahActivities.map((activity, index) => {
              const Icon = sunnahIcons[Object.keys(sunnahIcons)[index % 4]] || Star;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur rounded-xl p-6"
                >
                  <Icon className="w-10 h-10 text-gold-400 mb-4" />
                  <h4 className="font-bold mb-2">{activity.name}</h4>
                  <p className="font-arabic text-gold-300 text-sm mb-3">{activity.arabic}</p>
                  <p className="text-emerald-200 text-sm mb-3">{activity.description}</p>
                  <p className="text-xs text-emerald-300 italic">{activity.reference}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100"
            >
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-emerald-800 mb-4">
                {programsData.curriculum.title}
              </h3>
              <p className="text-gray-600 mb-6">{programsData.curriculum.description}</p>
              <ul className="space-y-3">
                {programsData.curriculum.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <Sparkles className="w-5 h-5 text-gold-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100"
            >
              <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-emerald-900" />
              </div>
              <h3 className="font-display text-2xl font-bold text-emerald-800 mb-4">
               Jam Belajar
              </h3>
              <p className="text-gray-600 mb-2">{programsData.schedule.days}</p>
              <p className="text-gray-600 mb-2">{programsData.schedule.hours}</p>
              <p className="text-gray-600 mb-4">{programsData.schedule.jumatan}</p>
              <p className="text-gray-600">{programsData.schedule.details}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle
            title="Program Unggulan"
            subtitle="Program khusus yang membedakan SDIT Birrul Walidayn"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programsData.featured.map((program, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="font-display text-2xl font-bold text-emerald-800 mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="flex flex-wrap gap-2">
                  {program.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionTitle
            title="Ekstrakurikuler"
            subtitle="Activities untuk pengembangan minat dan bakat"
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {programsData.extracurricular.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100 hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookMarked className="w-6 h-6 text-white" />
                </div>
                <span className="font-medium text-emerald-800 block">{activity.name}</span>
                <span className="text-xs text-gray-500">{activity.description}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
