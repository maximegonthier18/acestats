import { motion } from "framer-motion";
import { TennisPlayer } from "@/data/tennisPlayers";
import { useNavigate } from "react-router-dom";
import { Trophy, TrendingUp } from "lucide-react";

interface Props {
  player: TennisPlayer;
  index: number;
}

export default function PlayerCard({ player, index }: Props) {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/player/${player.id}`)}
      className="glass-card-hover p-6 text-left w-full group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{player.countryCode}</span>
          <div>
            <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {player.name}
            </h3>
            <p className="text-sm text-muted-foreground">{player.country}</p>
          </div>
        </div>
        {player.currentRank > 0 ? (
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <TrendingUp className="w-3 h-3 text-primary" />
            <span className="text-sm font-bold text-primary">#{player.currentRank}</span>
          </div>
        ) : (
          <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">Retraité</span>
        )}
      </div>

      <div className="neon-line mb-4" />

      <div className="grid grid-cols-3 gap-3">
        <div>
          <p className="stat-label">Titres GS</p>
          <p className="text-2xl font-display font-bold text-primary">{player.grandSlams}</p>
        </div>
        <div>
          <p className="stat-label">Titres</p>
          <p className="text-2xl font-display font-bold text-foreground">{player.careerTitles}</p>
        </div>
        <div>
          <p className="stat-label">Win %</p>
          <p className="text-2xl font-display font-bold text-foreground">{player.winRate}%</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Trophy className="w-3.5 h-3.5 text-primary/60" />
        <span className="text-xs text-muted-foreground">
          Meilleur classement : #{player.highestRank}
        </span>
      </div>
    </motion.button>
  );
}
