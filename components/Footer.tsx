import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-900 font-bold text-lg sm:text-xl font-display">B</span>
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold">SDIT Birrul Walidayn</h3>
                <p className="text-xs text-emerald-300 sm:hidden">Membentuk Generasi Qurani</p>
              </div>
            </div>
            <p className="text-emerald-100 text-xs sm:text-sm leading-relaxed">
              Membentuk generasi qurani yang berakhlak mulia, berprestasi, dan siap menghadapi tantangan zaman.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm sm:text-base font-bold mb-3 sm:mb-4 text-gold-400">Tautan</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Tentang Kami", "Program", "Fasilitas", "Galeri", "Berita", "PMB"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-emerald-100 hover:text-gold-400 text-xs sm:text-sm transition-colors block py-1">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm sm:text-base font-bold mb-3 sm:mb-4 text-gold-400">Kontak</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin size={16} className="text-gold-400 mt-0.5 flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="text-emerald-100 text-xs sm:text-sm">[Alamat Sekolah]</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone size={16} className="text-gold-400 flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="text-emerald-100 text-xs sm:text-sm">[No. Telepon]</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail size={16} className="text-gold-400 flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="text-emerald-100 text-xs sm:text-sm">[Email]</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Clock size={16} className="text-gold-400 flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="text-emerald-100 text-xs sm:text-sm">Senin - Jumat</span>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-display text-sm sm:text-base font-bold mb-3 sm:mb-4 text-gold-400">Lokasi</h4>
            <div className="bg-emerald-800 rounded-lg h-24 sm:h-32 flex items-center justify-center">
              <span className="text-emerald-400 text-xs sm:text-sm">[Google Maps]</span>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-emerald-200 text-xs sm:text-sm">
            © {new Date().getFullYear()} SDIT Birrul Walidayn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
