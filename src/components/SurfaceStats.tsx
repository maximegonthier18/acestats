import { motion } from "framer-motion";
import { TennisPlayer } from "@/data/tennisPlayers";

interface Props {
  player: TennisPlayer;
}

export default function SurfaceStats({ player }: Props) {
  const maxWins = Math.max(...player.surfaceStats.map((s) => s.wins + s.losses));

  const surfaceColors: Record<string, string> = {
    "Dur": "hsl(82, 100%, 50%)",
    "Terre battue": "hsl(25, 90%, 55%)",
    "Gazon": "hsl(140, 70%, 45%)",
    "Tapis": "hsl(270, 60%, 55%)",
    "Dur intérieur": "hsl(200, 70%, 50%)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-card p-6"
    >
      <h3 className="font-display font-bold text-lg mb-1">Stats par surface</h3>
      <p className="text-sm text-muted-foreground mb-6">Victoires / Défaites</p>

      <div className="space-y-5">
        {player.surfaceStats.map((s, i) => {
          const total = s.wins + s.losses;
          const winPct = Math.round((s.wins / total) * 100);
          const barColor = surfaceColors[s.surface] || "hsl(82, 100%, 50%)";

          return (
            <motion.div
              key={s.surface}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-display font-semibold text-foreground">{s.surface}</span>
                <span className="text-xs text-muted-foreground">
                  {s.wins}W - {s.losses}L · <span className="text-foreground font-semibold">{winPct}%</span>
                </span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${winPct}%` }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: barColor }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
