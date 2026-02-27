import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import UploadZone from "@/components/UploadZone";
import ScanningAnimation from "@/components/ScanningAnimation";
import ResultsDashboard from "@/components/ResultsDashboard";
import { mockAnalysisResult, type AnalysisResult } from "@/lib/mockData";

type AppState = "idle" | "scanning" | "results" | "error";

const Index = () => {
  const [mockMode, setMockMode] = useState(true);
  const [appState, setAppState] = useState<AppState>("idle");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleFileSelect = useCallback(
    async (file: File) => {
      // Generate preview
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target?.result as string);
      reader.readAsDataURL(file);

      setAppState("scanning");
      setError("");

      if (mockMode) {
        // Simulate delay
        await new Promise((r) => setTimeout(r, 3500));
        setResult(mockAnalysisResult);
        setAppState("results");
        return;
      }

      try {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch("/api/analyze", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setResult(data);
        setAppState("results");
      } catch (err: any) {
        setError(err.message || "Analysis failed");
        setAppState("error");
      }
    },
    [mockMode]
  );

  const handleReset = () => {
    setAppState("idle");
    setResult(null);
    setPreview("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Header mockMode={mockMode} onToggleMock={() => setMockMode((m) => !m)} />

      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {appState === "idle" && (
            <UploadZone
              key="upload"
              onFileSelect={handleFileSelect}
              isAnalyzing={false}
            />
          )}

          {appState === "scanning" && (
            <ScanningAnimation key="scanning" />
          )}

          {appState === "results" && result && (
            <ResultsDashboard
              key="results"
              result={result}
              originalPreview={preview}
              onReset={handleReset}
            />
          )}

          {appState === "error" && (
            <div key="error" className="mx-auto max-w-md py-16 text-center">
              <div className="glass-card rounded-2xl p-8">
                <p className="text-lg font-semibold" style={{ color: "hsl(var(--neon-red))" }}>
                  Analysis Failed
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{error}</p>
                <button
                  onClick={handleReset}
                  className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
