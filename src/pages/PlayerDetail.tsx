import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Award, Target, Calendar, Ruler, Weight, Hand, Trophy, TrendingUp, DollarSign } from "lucide-react";
import { getPlayerById } from "@/data/tennisPlayers";
import RankingChart from "@/components/RankingChart";
import MatchHistory from "@/components/MatchHistory";
import SurfaceStats from "@/components/SurfaceStats";

export default function PlayerDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const player = getPlayerById(id || "");

  if (!player) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-display font-bold text-foreground mb-4">Joueur introuvable</p>
          <button onClick={() => navigate("/")} className="text-primary hover:underline">
            Retour
          </button>
        </div>
      </div>
    );
  }

  const stats = [
    { icon: Trophy, label: "Grand Chelems", value: player.grandSlams, highlight: true },
    { icon: Award, label: "Titres", value: player.careerTitles, highlight: false },
    { icon: Target, label: "Win Rate", value: `${player.winRate}%`, highlight: false },
    { icon: TrendingUp, label: "Meilleur rang", value: `#${player.highestRank}`, highlight: false },
    { icon: DollarSign, label: "Gains", value: player.prizeMoney, highlight: false },
  ];

  const infos = [
    { icon: Calendar, label: "Âge", value: `${player.age} ans` },
    { icon: Ruler, label: "Taille", value: player.height },
    { icon: Weight, label: "Poids", value: player.weight },
    { icon: Hand, label: "Main", value: player.hand },
  ];

  return (
    <div className="min-h-screen bg-background gradient-mesh">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="relative z-10 px-4 pt-6 pb-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-display">Retour</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-5"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              className="w-20 h-20 rounded-2xl bg-card glow-border flex items-center justify-center text-4xl"
            >
              {player.countryCode}
            </motion.div>
            <div>
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="text-3xl md:text-4xl font-display font-black text-foreground"
              >
                {player.firstName}{" "}
                <span className="text-gradient-primary">{player.lastName}</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="flex items-center gap-3 mt-1"
              >
                <span className="text-muted-foreground">{player.country}</span>
                {player.currentRank > 0 ? (
                  <span className="px-3 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-bold">
                    ATP #{player.currentRank}
                  </span>
                ) : (
                  <span className="px-3 py-0.5 rounded-full bg-muted text-muted-foreground text-sm">
                    Retraité
                  </span>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-4 pb-12 max-w-5xl mx-auto space-y-6">
        {/* Info pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {infos.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border/30"
            >
              <info.icon className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs text-muted-foreground">{info.label}</span>
              <span className="text-sm font-display font-semibold text-foreground">{info.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="glass-card p-4 text-center"
            >
              <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.highlight ? "text-primary" : "text-muted-foreground"}`} />
              <p className={`text-2xl font-display font-bold ${stat.highlight ? "glow-text" : "text-foreground"}`}>
                {stat.value}
              </p>
              <p className="stat-label mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* W/L record */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-5 flex items-center justify-between"
        >
          <div>
            <p className="stat-label mb-1">Bilan carrière</p>
            <p className="font-display text-xl font-bold text-foreground">
              <span className="text-primary">{player.totalWins}</span>
              <span className="text-muted-foreground mx-2">-</span>
              <span className="text-destructive">{player.totalLosses}</span>
            </p>
          </div>
          <div className="h-12 w-12 rounded-full border-4 border-primary/30 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">{player.winRate}%</span>
          </div>
        </motion.div>

        {/* Charts */}
        <RankingChart player={player} />

        {/* Surface + Matches */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SurfaceStats player={player} />
          <MatchHistory matches={player.recentMatches} />
        </div>
      </div>
    </div>
  );
}
