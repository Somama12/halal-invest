"use client";
import { Filter } from "lucide-react";
import { motion } from "framer-motion";

export default function FilterPanel() {
  return (
    <motion.div 
      className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 sticky top-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-green-600" />
        <h4 className="font-bold text-lg">Filters</h4>
      </div>
      <div className="space-y-4 text-sm">
        <label className="block">
          <div className="text-slate-700 font-medium mb-2">Sector</div>
          <select className="w-full border-2 border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white">
            <option>All sectors</option>
            <option>Technology</option>
            <option>Healthcare</option>
            <option>Financials</option>
            <option>Automotive</option>
            <option>Consumer</option>
          </select>
        </label>

        <label className="block">
          <div className="text-slate-700 font-medium mb-2">Halal status</div>
          <select className="w-full border-2 border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white">
            <option>All</option>
            <option>Halal</option>
            <option>Questionable</option>
            <option>Not Halal</option>
          </select>
        </label>

        <label className="block">
          <div className="text-slate-700 font-medium mb-2">Market cap</div>
          <select className="w-full border-2 border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white">
            <option>All</option>
            <option>Large cap</option>
            <option>Mid cap</option>
            <option>Small cap</option>
          </select>
        </label>

        <button className="w-full mt-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md">
          Apply Filters
        </button>
      </div>
    </motion.div>
  );
}
