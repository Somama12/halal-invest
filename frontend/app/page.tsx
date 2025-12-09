'use client'
import SearchBar from "@/components/ui/SearchBar";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Calculator, Lock, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="py-12 lg:py-20">
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-white via-green-50/50 to-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-green-100/50 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 backdrop-blur-sm rounded-full text-sm font-medium text-green-700 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Sharia-compliant investing made simple</span>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 bg-clip-text text-transparent">
              Halal investing,
            </span>
            <br />
            <span className="text-slate-900">reimagined.</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Instant halal screening, portfolio compliance, and zakat tools built for modern Muslim investors.
          </motion.p>

          <motion.div 
            className="mt-10 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SearchBar onSearch={(q) => console.log("search:", q)} />
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link 
              href="/explore" 
              className="group relative bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Halal Stocks
                <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link 
              href="/auth/signup" 
              className="group bg-white/80 backdrop-blur-sm border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl hover:bg-green-50 font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get started free
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>Instant access</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <motion.div 
          className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300 overflow-hidden"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">Why HalalInvest</h3>
            <p className="text-slate-600 leading-relaxed">Transparent screening, easy-to-understand rules, and tailored recommendations for sharia-compliant investments.</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300 overflow-hidden"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Calculator className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">Zakat & Purification</h3>
            <p className="text-slate-600 leading-relaxed">Calculate zakat automatically on portfolios and get purification guidance to ensure compliance.</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300 overflow-hidden"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Lock className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">Safe & Private</h3>
            <p className="text-slate-600 leading-relaxed">We don't custody funds — we only help you screen and track. Your data stays private and secure.</p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
