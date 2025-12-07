"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image src="/logo.svg" alt="HalalInvest" width={36} height={36} className="transition-transform group-hover:scale-110" />
            </div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              HalalInvest
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link 
              href="/explore" 
              className="text-slate-700 hover:text-green-600 font-medium transition-colors relative group"
            >
              Explore
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/dashboard" 
              className="text-slate-700 hover:text-green-600 font-medium transition-colors relative group"
            >
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/zakat" 
              className="text-slate-700 hover:text-green-600 font-medium transition-colors relative group"
            >
              Zakat
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/auth/login" 
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 font-medium shadow-sm hover:shadow-md transition-all"
            >
              Login
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-slate-700 hover:text-green-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <nav className="px-4 py-4 space-y-3">
              <Link 
                href="/explore" 
                className="block py-2 text-slate-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore
              </Link>
              <Link 
                href="/dashboard" 
                className="block py-2 text-slate-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/zakat" 
                className="block py-2 text-slate-700 hover:text-green-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Zakat
              </Link>
              <Link 
                href="/auth/login" 
                className="block mt-4 py-2 text-center rounded-lg bg-green-600 text-white hover:bg-green-700 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
