import { motion } from "framer-motion";
import type { AnalysisResult } from "@/lib/mockData";
import ScoreGauge from "./ScoreGauge";
import VerdictBadge from "./VerdictBadge";
import AIBar from "./AIBar";
import ImageComparison from "./ImageComparison";
import MetadataCard from "./MetadataCard";
import ReverseResults from "./ReverseResults";
import { RotateCcw } from "lucide-react";

interface ResultsDashboardProps {
  result: AnalysisResult;
  originalPreview: string;
  onReset: () => void;
}

const ResultsDashboard = ({ result, originalPreview, onReset }: ResultsDashboardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto max-w-6xl space-y-6"
    >
      {/* Top row: Score + Verdict */}
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-semibold text-foreground"
        >
          Forensic Analysis Report
        </motion.h2>
        <button
          onClick={onReset}
          className="flex items-center gap-2 rounded-lg border border-border/30 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <RotateCcw className="h-4 w-4" />
          New Analysis
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6">
          <ScoreGauge score={result.digital_trust_score} />
          <VerdictBadge verdict={result.verdict} />
          <AIBar score={result.ai_score} />
        </div>

        {/* Center + Right */}
        <div className="space-y-6 lg:col-span-2">
          <ImageComparison
            originalUrl={originalPreview}
            elaUrl={result.ela_image_url}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <MetadataCard metadata={result.metadata} />
            <ReverseResults results={result.reverse_results} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultsDashboard;
