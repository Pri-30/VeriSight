import { Shield, ToggleLeft, ToggleRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  mockMode: boolean;
  onToggleMock: () => void;
}

const Header = ({ mockMode, onToggleMock }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass-card border-b border-border/20 px-6 py-4"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Shield className="h-8 w-8 text-primary" />
            <div className="absolute inset-0 animate-pulse-neon rounded-full bg-primary/20 blur-lg" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="neon-text-cyan">Veri</span>
              <span className="neon-text-purple">Sight</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Digital Forensic Toolkit
            </p>
          </div>
        </div>

        <button
          onClick={onToggleMock}
          className="flex items-center gap-2 rounded-lg border border-border/30 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
        >
          {mockMode ? (
            <ToggleRight className="h-4 w-4 text-primary" />
          ) : (
            <ToggleLeft className="h-4 w-4" />
          )}
          Mock {mockMode ? "ON" : "OFF"}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
