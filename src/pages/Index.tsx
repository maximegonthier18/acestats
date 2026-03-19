import { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import PlayerCard from "@/components/PlayerCard";
import { tennisPlayers, searchPlayers } from "@/data/tennisPlayers";
import tennisBall from "@/assets/tennis-ball.png";
import heroBg from "@/assets/hero-bg.jpg";

export default function Index() {
  const [filter, setFilter] = useState<"all" | "active" | "retired">("all");

  const filtered = tennisPlayers.filter((p) => {
    if (filter === "active") return p.currentRank > 0;
    if (filter === "retired") return p.currentRank === 0;
    return true;
  });

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        <div className="relative z-10 px-4 pt-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.img
                src={tennisBall}
                alt="Tennis"
                className="w-10 h-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight">
                <span className="text-foreground">ACE</span>
                <span className="text-gradient-primary">STATS</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
              Statistiques complètes des joueurs de tennis professionnels
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <SearchBar />
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-4 pb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-2 justify-center mb-8"
        >
          {([
            ["all", "Tous"],
            ["active", "Actifs"],
            ["retired", "Retraités"],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-display font-semibold transition-all duration-300 ${
                filter === key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Player Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((player, i) => (
            <PlayerCard key={player.id} player={player} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 pb-8"
        >
          <div className="neon-line max-w-xs mx-auto mb-6" />
          <p className="text-xs text-muted-foreground/60 font-body">
            ACE STATS © 2026 · Données à titre indicatif
          </p>
        </motion.div>
      </div>
    </div>
  );
}
