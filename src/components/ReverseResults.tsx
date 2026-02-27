import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";

interface ReverseResultsProps {
  results: Array<{
    title: string;
    url: string;
    first_seen: string;
  }>;
}

const ReverseResults = ({ results }: ReverseResultsProps) => {
  if (results.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-card rounded-2xl p-6"
      >
        <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
          Reverse Image Search
        </p>
        <p className="text-sm text-muted-foreground">
          No matching images found online. This may be an original image.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="glass-card rounded-2xl p-6"
    >
      <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
        Reverse Image Search
      </p>

      <div className="space-y-3">
        {results.map((result, i) => (
          <motion.a
            key={i}
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="group flex items-start gap-3 rounded-lg bg-muted/30 p-3 transition-colors hover:bg-muted/50"
          >
            <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-primary transition-transform group-hover:scale-110" />
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm text-foreground group-hover:text-primary transition-colors">
                {result.title}
              </p>
              <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
                <Clock className="h-3 w-3" />
                First seen: {result.first_seen}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ReverseResults;
