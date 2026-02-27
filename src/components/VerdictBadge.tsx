import { motion } from "framer-motion";
import { ShieldCheck, ShieldAlert } from "lucide-react";

interface VerdictBadgeProps {
  verdict: "Likely Human" | "Likely Manipulated";
}

const VerdictBadge = ({ verdict }: VerdictBadgeProps) => {
  const isHuman = verdict === "Likely Human";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className={`glass-card flex items-center gap-4 rounded-2xl p-6 ${
        isHuman ? "neon-glow-cyan" : "neon-glow-purple"
      }`}
      style={{
        borderColor: isHuman
          ? "hsl(var(--neon-green) / 0.3)"
          : "hsl(var(--neon-red) / 0.3)",
      }}
    >
      {isHuman ? (
        <ShieldCheck className="h-10 w-10" style={{ color: "hsl(var(--neon-green))" }} />
      ) : (
        <ShieldAlert className="h-10 w-10" style={{ color: "hsl(var(--neon-red))" }} />
      )}
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Verdict
        </p>
        <p
          className="text-2xl font-bold"
          style={{
            color: isHuman ? "hsl(var(--neon-green))" : "hsl(var(--neon-red))",
          }}
        >
          {verdict}
        </p>
      </div>
    </motion.div>
  );
};

export default VerdictBadge;
