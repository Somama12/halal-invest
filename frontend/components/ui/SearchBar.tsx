"use client";
import { useState, KeyboardEvent } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBar({ onSearch }: { onSearch?: (q: string) => void }) {
  const [q, setQ] = useState("");
  
  const handleSearch = () => {
    if (q.trim()) {
      onSearch?.(q.trim());
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="flex items-center gap-2 bg-white border-2 border-slate-200 rounded-xl shadow-sm hover:shadow-md focus-within:border-green-500 focus-within:shadow-lg transition-all duration-200 px-4 py-3">
        <Search className="text-slate-400 w-5 h-5" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search ticker or company (e.g. AAPL, Tesla)"
          className="flex-1 outline-none text-sm text-slate-900 placeholder:text-slate-400"
        />
        <button
          onClick={handleSearch}
          disabled={!q.trim()}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-5 py-2 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200"
        >
          Search
        </button>
      </div>
    </motion.div>
  );
}
