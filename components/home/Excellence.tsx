"use client";

import { motion } from "framer-motion";
import { BookOpen, Star, Heart, Landmark } from "lucide-react";
import profileData from "@/data/profile.json";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Star,
  Heart,
  Landmark,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Excellence() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {profileData.excellence.map((item, index) => {
            const Icon = iconMap[item.icon] || BookOpen;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-emerald-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
