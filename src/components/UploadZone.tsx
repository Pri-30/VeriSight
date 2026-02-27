import { useState, useCallback } from "react";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
  isAnalyzing: boolean;
}

const UploadZone = ({ onFileSelect, isAnalyzing }: UploadZoneProps) => {
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) return;
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);
      onFileSelect(file);
    },
    [onFileSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const clearPreview = () => {
    setPreview(null);
    setFileName("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mx-auto w-full max-w-2xl"
    >
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`glass-card relative overflow-hidden rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
          dragOver
            ? "border-primary neon-glow-cyan"
            : "border-border/40 hover:border-primary/40"
        } ${isAnalyzing ? "pointer-events-none opacity-60" : "cursor-pointer"}`}
        onClick={() => {
          if (!isAnalyzing)
            document.getElementById("file-input")?.click();
        }}
      >
        {/* Scan line animation when dragging */}
        {dragOver && (
          <div className="scan-line absolute inset-0 z-10 h-1/3" />
        )}

        <input
          id="file-input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleInput}
        />

        <AnimatePresence mode="wait">
          {preview ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative"
            >
              <img
                src={preview}
                alt="Upload preview"
                className="mx-auto max-h-64 rounded-lg object-contain"
              />
              <p className="mt-3 text-sm text-muted-foreground">{fileName}</p>
              {!isAnalyzing && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    clearPreview();
                  }}
                  className="absolute right-0 top-0 rounded-full bg-muted p-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 py-8"
            >
              <div className="relative">
                <Upload className="h-12 w-12 text-primary" />
                <div className="absolute inset-0 animate-pulse-neon rounded-full bg-primary/10 blur-xl" />
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">
                  Drop an image to analyze
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  or click to browse • PNG, JPG, WEBP
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                <ImageIcon className="h-3 w-3" />
                <span>Max 20MB</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default UploadZone;
