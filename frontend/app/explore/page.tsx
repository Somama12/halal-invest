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

        <section className="flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-3xl font-bold">Explore Halal Stocks</h2>
              <p className="text-slate-600 mt-1">Discover sharia-compliant investment opportunities</p>
            </div>
            <div className="text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full font-medium">
              {MOCK_STOCKS.length} results
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
        </section>
      </motion.div>
    </div>
  );
}
