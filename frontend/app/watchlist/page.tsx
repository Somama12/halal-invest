"use client";
import StockCard from "@/components/ui/StockCart";
import { MOCK_STOCKS } from "@/lib/mock/stocks";
import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";

export default function Watchlist(){
  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <Bookmark className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Your Watchlist</h2>
            <p className="text-slate-600 text-sm mt-1">Track your favorite halal stocks</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_STOCKS.map((s, index) => (
            <motion.div
              key={s.ticker}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <StockCard stock={s} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
