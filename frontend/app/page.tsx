'use client'
import SearchBar from "@/components/ui/SearchBar";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Calculator, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="py-12">
      <motion.section 
        className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-slate-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Halal investing, reimagined.
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Instant halal screening, portfolio compliance, and zakat tools built for modern Muslim investors.
          </motion.p>

          <div className="mt-8">
            <SearchBar onSearch={(q) => console.log("search:", q)} />
          </div>

          <motion.div 
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/explore" 
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Explore Halal Stocks
            </Link>
            <Link 
              href="/auth/signup" 
              className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 font-medium transition-all duration-200"
            >
              Get started
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-200 group"
          whileHover={{ y: -4 }}
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Why HalalInvest</h3>
          <p className="text-sm text-slate-600 leading-relaxed">Transparent screening, easy-to-understand rules, and tailored recommendations.</p>
        </motion.div>
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-200 group"
          whileHover={{ y: -4 }}
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
            <Calculator className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Zakat & Purification</h3>
          <p className="text-sm text-slate-600 leading-relaxed">Calculate zakat automatically on portfolios and get purification guidance.</p>
        </motion.div>
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-200 group"
          whileHover={{ y: -4 }}
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
            <Lock className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Safe & Private</h3>
          <p className="text-sm text-slate-600 leading-relaxed">We don't custody funds — we only help you screen and track.</p>
        </motion.div>
      </motion.section>
    </div>
  );
}
