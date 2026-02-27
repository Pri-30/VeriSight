import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScoreGaugeProps {
  score: number; // 0-100
  label?: string;
}

const ScoreGauge = ({ score, label = "Digital Trust Score" }: ScoreGaugeProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 300);
    return () => clearTimeout(timer);
  }, [score]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  const getColor = (s: number) => {
    if (s >= 70) return "hsl(var(--neon-green))";
    if (s >= 40) return "hsl(var(--neon-yellow))";
    return "hsl(var(--neon-red))";
  };

  const getLabel = (s: number) => {
    if (s >= 70) return "Trusted";
    if (s >= 40) return "Suspicious";
    return "Untrusted";
  };

  const color = getColor(score);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="glass-card flex flex-col items-center gap-4 rounded-2xl p-6"
    >
      <p className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </p>

      <div className="relative">
        <svg width="180" height="180" viewBox="0 0 180 180">
          {/* Background circle */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
          />
          {/* Score arc */}
          <motion.circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            transform="rotate(-90 90 90)"
            style={{
              filter: `drop-shadow(0 0 8px ${color})`,
            }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            key={animatedScore}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
            style={{ color }}
          >
            {animatedScore}
          </motion.span>
          <span className="text-xs text-muted-foreground">/ 100</span>
        </div>
      </div>

      <span
        className="rounded-full px-3 py-1 text-xs font-medium"
        style={{
          color,
          backgroundColor: `${color}15`,
          border: `1px solid ${color}30`,
        }}
      >
        {getLabel(score)}
      </span>
    </motion.div>
  );
};

export default ScoreGauge;
