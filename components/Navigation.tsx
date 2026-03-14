"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Beranda" },
  { 
    href: "#", 
    label: "Profil",
    dropdown: [
      { href: "/tentang", label: "Tentang Kami" },
      { href: "/fasilitas", label: "Fasilitas" },
    ]
  },
  { href: "/program", label: "Program" },
  { href: "/galeri", label: "Galeri" },
  { href: "/berita", label: "Berita" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-transform duration-500 ease-in-out ${
        scrolled ? "-translate-y-[35px]" : "translate-y-0"
      }`}>
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:flex bg-emerald-900 text-white border-b border-emerald-800/30 h-[35px] items-center">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-xs font-medium w-full">
          <div className="flex items-center gap-6">
            <a href="tel:+628123456789" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Phone size={14} className="text-gold-400" />
              <span>+62 812 3456 789</span>
            </a>
            <a href="mailto:info@birrulwalidayn.sch.id" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
              <Mail size={14} className="text-gold-400" />
              <span>info@birrulwalidayn.sch.id</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-300/80 mr-2">Ikuti Kami:</span>
            <a href="#" className="hover:text-gold-400 transition-colors"><Instagram size={14} /></a>
            <a href="#" className="hover:text-gold-400 transition-colors"><Facebook size={14} /></a>
          </div>
        </div>
      </div>

      <div 
        className={`w-full bg-white transition-all duration-500 ease-in-out ${
          scrolled ? "shadow-md py-2 lg:py-3" : "shadow-sm py-3 lg:py-5"
        }`}
      >
        <nav className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-auto">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0 flex-1">
              <div className="relative shrink-0">
                <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-emerald-200 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-white font-bold text-lg sm:text-xl md:text-2xl font-display">B</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gold-400 rounded-full border-2 border-white" />
              </div>
              <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="font-display text-[14px] xxs:text-[15px] sm:text-lg lg:text-xl font-bold text-emerald-900 leading-tight truncate">
                  Birrul Walidayn
                </span>
                <span className="text-[8px] xxs:text-[9px] sm:text-xs text-emerald-600 font-semibold tracking-wider uppercase truncate">
                  SDIT & Boarding School
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-colors cursor-pointer outline-none">
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link 
                      href={link.href}
                      className={`px-4 py-2 text-sm font-semibold transition-all relative ${
                        pathname === link.href ? "text-emerald-700" : "text-gray-700 hover:text-emerald-700"
                      }`}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <motion.div 
                          layoutId="activeNav"
                          className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-600 rounded-full"
                        />
                      )}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-xl border border-gray-100 py-2 mt-1 overflow-hidden"
                        >
                          {link.dropdown.map((drop) => (
                            <Link
                              key={drop.href}
                              href={drop.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                            >
                              {drop.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              <div className="ml-4 pl-4 border-l border-gray-200">
                <Link 
                  href="/pmb" 
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Pendaftaran
                </Link>
              </div>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <Link 
                href="/pmb" 
                className="hidden xxs:flex px-3 sm:px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-bold rounded-full border border-emerald-100 whitespace-nowrap"
              >
                PMB
              </Link>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-emerald-900 bg-emerald-50 rounded-lg outline-none active:scale-95 transition-transform"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>

      {/* Mobile Sidebar Navigation - Moved OUTSIDE header to avoid transform issues */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden">
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-xs bg-white z-[101] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Sidebar Header */}
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shadow-emerald-100 shadow-lg">
                    <span className="text-white font-bold text-sm">B</span>
                  </div>
                  <span className="font-display font-black text-emerald-950 text-lg">Navigasi</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-emerald-950 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Sidebar Content */}
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.label} className="py-1">
                      {link.dropdown ? (
                        <div className="space-y-1">
                          <div className="px-4 py-2 text-[10px] font-black text-emerald-600/50 uppercase tracking-[0.2em]">
                            {link.label}
                          </div>
                          {link.dropdown.map((drop) => (
                            <Link
                              key={drop.href}
                              href={drop.href}
                              className={`block px-4 py-3.5 rounded-2xl text-base font-bold transition-all ${
                                pathname === drop.href 
                                  ? "bg-emerald-50 text-emerald-700 shadow-sm" 
                                  : "text-emerald-900/70 hover:bg-emerald-50/50 hover:text-emerald-700"
                              }`}
                            >
                              {drop.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block px-4 py-3.5 rounded-2xl text-base font-bold transition-all ${
                            pathname === link.href 
                              ? "bg-emerald-50 text-emerald-700 shadow-sm" 
                              : "text-emerald-900/70 hover:bg-emerald-50/50 hover:text-emerald-700"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-gray-100 space-y-6">
                <Link
                  href="/pmb"
                  className="flex items-center justify-center w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-xl shadow-emerald-200 transition-all active:scale-[0.98]"
                >
                  Daftar Sekarang
                </Link>
                <div className="flex justify-center gap-8 text-emerald-900/40">
                  <a href="#" className="hover:text-emerald-600 transition-colors"><Instagram size={22} /></a>
                  <a href="#" className="hover:text-emerald-600 transition-colors"><Facebook size={22} /></a>
                  <a href="tel:+628123456789" className="hover:text-emerald-600 transition-colors"><Phone size={22} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
