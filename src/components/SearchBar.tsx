import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { searchPlayers, TennisPlayer } from "@/data/tennisPlayers";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const results = query.length > 0 ? searchPlayers(query) : [];
  const showResults = focused && results.length > 0;

  const handleSelect = (player: TennisPlayer) => {
    setQuery("");
    setFocused(false);
    navigate(`/player/${player.id}`);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <motion.div
        className="relative"
        animate={focused ? { scale: 1.02 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          placeholder="Rechercher un joueur..."
          className="search-input pl-14"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </motion.div>

      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 glass-card overflow-hidden"
          >
            {results.map((player, i) => (
              <motion.button
                key={player.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleSelect(player)}
                className="w-full flex items-center gap-4 px-5 py-4 hover:bg-secondary/50 transition-colors text-left border-b border-border/30 last:border-0"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg font-display font-bold text-primary">
                  {player.countryCode}
                </div>
                <div className="flex-1">
                  <p className="font-display font-semibold text-foreground">
                    {player.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {player.country} · {player.currentRank > 0 ? `${player.gender === "F" ? "WTA" : "ATP"} #${player.currentRank}` : player.gender === "F" ? "Retraitée" : "Retraité"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-primary">
                    {player.grandSlams} GS
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
