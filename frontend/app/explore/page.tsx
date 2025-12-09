"use client";
import FilterPanel from "@/components/ui/FilterPanel";
import StockCard from "@/components/ui/StockCart";
import { MOCK_STOCKS } from "@/lib/mock/stocks";
import { motion } from "framer-motion";

export default function Explore() {
  return (
    <div className="py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row gap-6"
      >
        <aside className="md:w-72">
          <FilterPanel />
        </aside>

        <section className="flex-1 flex flex-col min-h-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 flex-shrink-0">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">Explore Halal Stocks</h2>
              <p className="text-lg text-slate-600">Discover sharia-compliant investment opportunities</p>
            </div>
            <div className="text-sm text-slate-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full font-semibold shadow-sm border border-slate-200">
              {MOCK_STOCKS.length} results
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 -mr-2" style={{ maxHeight: 'calc(100vh - 250px)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
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
          </div>
        </section>
      </motion.div>
    </div>
  );
}
