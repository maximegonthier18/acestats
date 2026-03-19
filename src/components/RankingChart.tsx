import { motion } from "framer-motion";
import { TennisPlayer } from "@/data/tennisPlayers";
import {
  LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Area, AreaChart,
} from "recharts";

interface Props {
  player: TennisPlayer;
}

export default function RankingChart({ player }: Props) {
  const data = player.rankingHistory
    .filter((r) => r.rank > 0)
    .map((r) => ({
      date: r.date,
      rank: r.rank,
      points: r.points,
    }));

  if (data.length < 2) return null;

  const maxRank = Math.max(...data.map((d) => d.rank));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-6"
    >
      <h3 className="font-display font-bold text-lg mb-1">Évolution du classement</h3>
      <p className="text-sm text-muted-foreground mb-6">Historique ATP</p>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
            <defs>
              <linearGradient id="rankGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(82, 100%, 50%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(82, 100%, 50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }}
            />
            <YAxis
              reversed
              domain={[1, maxRank + 2]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }}
              width={35}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(220, 18%, 10%)",
                border: "1px solid hsl(220, 15%, 18%)",
                borderRadius: "12px",
                color: "hsl(0, 0%, 95%)",
                fontSize: "13px",
              }}
              formatter={(value: number) => [`#${value}`, "Classement"]}
            />
            <Area
              type="monotone"
              dataKey="rank"
              stroke="hsl(82, 100%, 50%)"
              strokeWidth={2.5}
              fill="url(#rankGradient)"
              dot={{ fill: "hsl(82, 100%, 50%)", strokeWidth: 0, r: 3 }}
              activeDot={{ r: 6, strokeWidth: 2, stroke: "hsl(82, 100%, 50%)" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
