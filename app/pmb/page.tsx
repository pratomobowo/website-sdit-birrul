"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle, HelpCircle, Phone, Mail } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import pmbData from "@/data/pmb.json";

export default function PMBPage() {
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
            {pmbData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-emerald-100"
          >
            {pmbData.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-emerald-800">Jadwal Pendaftaran</h3>
                  <p className="text-gray-600">{pmbData.registration.startDate} - {pmbData.registration.endDate}</p>
                </div>
              </div>
              <Button href="#" variant="gold" size="lg">
                Daftar Sekarang
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="Alur Pendaftaran"
                subtitle="Langkah-langkah mengikuti PMB"
                centered={false}
              />
              
              <div className="space-y-4">
                {pmbData.stages.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{stage.step}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-800">{stage.title}</h4>
                      <p className="text-sm text-gray-600">{stage.description}</p>
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
              <SectionTitle
                title="Syarat Pendaftaran"
                subtitle="Berkas yang perlu disiapkan"
                centered={false}
              />
              
              <div className="space-y-3">
                {pmbData.requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Pertanyaan Umum"
              subtitle="FAQ Seputar PMB"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pmbData.faq.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-emerald-50 rounded-xl p-6"
                >
                  <HelpCircle className="w-6 h-6 text-gold-500 mb-3" />
                  <h4 className="font-bold text-emerald-800 mb-2">{faq.question}</h4>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-16 bg-emerald-900 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Butuh Informasi Lebih Lanjut?
            </h3>
            <p className="text-emerald-100 mb-6">
              Hubungi kami melalui kontak di bawah ini
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${pmbData.contact.phone}`} className="inline-flex items-center gap-2 text-white">
                <Phone className="w-5 h-5" />
                {pmbData.contact.phone}
              </a>
              <a href={`mailto:${pmbData.contact.email}`} className="inline-flex items-center gap-2 text-white">
                <Mail className="w-5 h-5" />
                {pmbData.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
