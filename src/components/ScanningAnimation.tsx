import { motion } from "framer-motion";
import { ScanLine, Shield, Fingerprint, Eye } from "lucide-react";

const steps = [
  { icon: ScanLine, label: "Analyzing pixel data..." },
  { icon: Fingerprint, label: "Running ELA detection..." },
  { icon: Eye, label: "Checking AI signatures..." },
  { icon: Shield, label: "Computing trust score..." },
];

const ScanningAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mx-auto flex max-w-md flex-col items-center gap-8 py-16"
    >
      {/* Central scanner */}
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="h-24 w-24 rounded-full border-2 border-primary/30"
          style={{
            borderTopColor: "hsl(var(--neon-cyan))",
            borderRightColor: "hsl(var(--neon-purple))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ScanLine className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute inset-0 animate-pulse-neon rounded-full bg-primary/5 blur-2xl" />
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold neon-text-cyan">Scanning Image</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Running forensic analysis...
        </p>
      </div>

      {/* Step indicators */}
      <div className="flex flex-col gap-3 w-full">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.8, duration: 0.4 }}
            className="glass-card flex items-center gap-3 rounded-lg px-4 py-3"
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            >
              <step.icon className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-sm text-muted-foreground">{step.label}</span>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: i * 0.8, duration: 2 }}
              className="ml-auto h-0.5 max-w-[60px] rounded-full bg-primary/40"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ScanningAnimation;
