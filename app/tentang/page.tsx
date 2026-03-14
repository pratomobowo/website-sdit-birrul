"use client";

import { motion } from "framer-motion";
import { Target, Eye, Clock, Award, BookOpen, Star, Heart, Landmark } from "lucide-react";
import profileData from "@/data/profile.json";

export default function TentangPage() {
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
            Tentang Kami
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-100"
          >
            {profileData.tagline}
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <BookOpen className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-emerald-800 mb-2">Landasan Al-Quran</h4>
                <p className="text-sm text-gray-600">{profileData.foundation.quran}</p>
              </div>
              <div className="p-4 border-l-0 md:border-l border-r-0 md:border-r border-emerald-200">
                <Star className="w-10 h-10 text-gold-500 mx-auto mb-3" />
                <h4 className="font-bold text-emerald-800 mb-2">Landasan As-Sunnah</h4>
                <p className="text-sm text-gray-600">{profileData.foundation.hadith}</p>
              </div>
              <div className="p-4">
                <Heart className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-emerald-800 mb-2">Cinta Nabi</h4>
                <p className="text-sm text-gray-600">{profileData.foundation.sunnah}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-emerald-800 mb-6">
                SDIT Birrul Walidayn
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{profileData.history}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <span className="block text-2xl font-bold text-emerald-800">2015</span>
                  <span className="text-sm text-gray-500">Didirikan</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-emerald-900" />
                  </div>
                  <span className="block text-2xl font-bold text-emerald-800">50+</span>
                  <span className="text-sm text-gray-500">Prestasi</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-emerald-800 mb-4">Visi</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{profileData.vision}</p>
              <p className="text-lg font-arabic text-emerald-700">{profileData.visionArab}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-gold-500 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-emerald-900" />
              </div>
              <h3 className="font-display text-2xl font-bold text-emerald-800 mb-4">Misi</h3>
              <ul className="space-y-3">
                {profileData.mission.map((mission, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    {mission}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-emerald-800 mb-4">
              ☀️ Pembiasaan Sunnah Harian
            </h2>
            <p className="text-gray-600">Activities yang dilakukan setiap hari untuk meneladani Nabi Muhammad ﷺ</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.dailyHabits.map((habit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl border border-emerald-100 text-center"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-emerald-800 mb-2">{habit.name}</h4>
                <p className="text-sm text-gray-600">{habit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
