import { useState } from "react";
import { motion } from "framer-motion";

interface ImageComparisonProps {
  originalUrl: string;
  elaUrl: string;
}

const ImageComparison = ({ originalUrl, elaUrl }: ImageComparisonProps) => {
  const [hoveredImage, setHoveredImage] = useState<"original" | "ela" | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-card rounded-2xl p-6"
    >
      <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
        Image Comparison
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          { label: "Original", url: originalUrl, key: "original" as const },
          { label: "ELA Analysis", url: elaUrl, key: "ela" as const },
        ].map(({ label, url, key }) => (
          <div key={key} className="group relative">
            <p className="mb-2 text-center text-xs font-medium text-muted-foreground">
              {label}
            </p>
            <div
              className="relative overflow-hidden rounded-lg border border-border/20"
              onMouseEnter={() => setHoveredImage(key)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img
                src={url}
                alt={label}
                className={`w-full object-cover transition-transform duration-500 ${
                  hoveredImage === key ? "scale-150" : "scale-100"
                }`}
                style={{ aspectRatio: "4/3" }}
              />
              {hoveredImage === key && (
                <div className="absolute bottom-2 left-2 rounded bg-background/80 px-2 py-0.5 text-[10px] text-muted-foreground backdrop-blur-sm">
                  Hover to zoom
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ImageComparison;
