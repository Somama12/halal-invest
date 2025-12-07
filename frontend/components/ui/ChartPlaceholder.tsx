"use client";
import { motion } from "framer-motion";

export default function ChartPlaceholder({ height = 160 }: { height?: number }) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm border border-slate-100 p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm font-medium text-slate-700">Price Chart</div>
          <div className="text-xs text-slate-500 mt-1">1 Month</div>
        </div>
        <div className="flex gap-2">
          <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded font-medium">1M</div>
          <div className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">3M</div>
          <div className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">1Y</div>
        </div>
      </div>
      <div 
        style={{ height }} 
        className="mt-3 bg-gradient-to-br from-green-50 via-slate-50 to-slate-100 rounded-lg border border-slate-200 flex items-end justify-center gap-1 p-4"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-green-400 rounded-t w-full max-w-[20px]"
            style={{ height: `${Math.random() * 60 + 40}%` }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5, delay: i * 0.02 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
