import { motion } from "framer-motion";
import { TennisMatch } from "@/data/tennisPlayers";
import { Calendar, MapPin } from "lucide-react";

interface Props {
  matches: TennisMatch[];
}

export default function MatchHistory({ matches }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card p-6"
    >
      <h3 className="font-display font-bold text-lg mb-1">Matchs récents</h3>
      <p className="text-sm text-muted-foreground mb-6">Derniers résultats</p>

      <div className="space-y-3">
        {matches.map((match, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.08 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-border/60 transition-all"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm ${
                match.result === "W"
                  ? "bg-primary/15 text-primary border border-primary/30"
                  : "bg-destructive/15 text-destructive border border-destructive/30"
              }`}
            >
              {match.result}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-display font-semibold text-foreground truncate">
                vs. {match.opponent}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {match.tournament}
                </span>
                <span>{match.round}</span>
                <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                  {match.surface}
                </span>
              </div>
            </div>

            <div className="text-right">
              <p className="font-display font-bold text-foreground">{match.score}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end mt-1">
                <Calendar className="w-3 h-3" />
                {match.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
