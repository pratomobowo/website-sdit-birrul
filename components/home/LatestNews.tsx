"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import newsData from "@/data/news.json";

export default function LatestNews() {
  const latestNews = newsData.news.slice(0, 3);
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          title="Berita Terbaru"
          subtitle="Informasi dan kegiatan terkini dari SDIT Birrul Walidayn"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                <span className="absolute inset-0 flex items-center justify-center text-gray-500">
                  [Foto]
                </span>
                <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-600 text-white text-xs rounded-full">
                  {news.category}
                </span>
              </div>
              
              <div className="p-6">
                <time className="text-sm text-gray-500">
                  {new Date(news.date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h3 className="font-display text-lg font-bold text-emerald-800 mt-2 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {news.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/berita" variant="secondary">
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  );
}
