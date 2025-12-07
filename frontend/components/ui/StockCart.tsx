import Link from "next/link";
import BadgeHalal from "@/components/ui/BadgeHalal";
import { motion } from "framer-motion";

export default function StockCard({ stock }: { stock: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Link 
        href={`/stock/${stock.ticker}`} 
        className="block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-5 border border-slate-100 hover:border-green-200 group"
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors">
              {stock.ticker} 
              <span className="text-slate-500 font-normal ml-1">· {stock.name}</span>
            </h3>
            <p className="text-sm text-slate-500 mt-1">{stock.sector}</p>
          </div>
          <div className="text-right ml-4">
            <div className={`text-xl font-bold ${stock.changePct >= 0 ? "text-green-600" : "text-red-600"}`}>
              ${stock.price.toFixed(2)}
            </div>
            <div className={`text-xs font-medium mt-1 ${stock.changePct >= 0 ? "text-green-600" : "text-red-600"}`}>
              {stock.changePct >= 0 ? "+" : ""}{stock.changePct.toFixed(2)}%
            </div>
            <div className="text-xs text-slate-400 mt-1">{stock.marketCap}</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BadgeHalal status={stock.halalStatus} />
            <div className="text-sm text-slate-600 font-medium">{stock.halalScore}% purity</div>
          </div>
          <div className="text-xs text-slate-400">Vol • {stock.volume ?? "—"}</div>
        </div>
      </Link>
    </motion.div>
  );
}
