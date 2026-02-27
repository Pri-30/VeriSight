import { motion } from "framer-motion";

interface AIBarProps {
  score: number; // 0-1
}

const AIBar = ({ score }: AIBarProps) => {
  const percentage = Math.round(score * 100);

  const getColor = () => {
    if (percentage <= 30) return "hsl(var(--neon-green))";
    if (percentage <= 60) return "hsl(var(--neon-yellow))";
    return "hsl(var(--neon-red))";
  };

  const color = getColor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-card rounded-2xl p-6"
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          AI Generation Probability
        </p>
        <span className="text-sm font-bold" style={{ color }}>
          {percentage}%
        </span>
      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          className="h-full rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 12px ${color}`,
          }}
        />
      </div>

      <div className="mt-2 flex justify-between text-[10px] text-muted-foreground/60">
        <span>Human</span>
        <span>AI Generated</span>
      </div>
    </motion.div>
  );
};

export default AIBar;
