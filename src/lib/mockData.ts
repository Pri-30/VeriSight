export const mockAnalysisResult = {
  ai_score: 0.73,
  digital_trust_score: 34,
  verdict: "Likely Manipulated" as const,
  ela_image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
  metadata: {
    camera: "Canon EOS R5",
    software: "Adobe Photoshop 2024",
    created_at: "2025-11-14T08:32:00Z",
    gps: {
      lat: 37.7749,
      lng: -122.4194,
    },
  },
  reverse_results: [
    {
      title: "Original image found on Stock Photography Site",
      url: "https://example.com/stock/12345",
      first_seen: "2024-03-15",
    },
    {
      title: "Similar image on social media platform",
      url: "https://example.com/social/67890",
      first_seen: "2024-06-22",
    },
    {
      title: "Cached version on news aggregator",
      url: "https://example.com/news/cached/111",
      first_seen: "2025-01-10",
    },
  ],
};

export const mockTrustedResult = {
  ai_score: 0.12,
  digital_trust_score: 89,
  verdict: "Likely Human" as const,
  ela_image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  metadata: {
    camera: "iPhone 15 Pro Max",
    software: "iOS 18.1",
    created_at: "2025-12-01T14:22:00Z",
    gps: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  reverse_results: [],
};

export type AnalysisResult = typeof mockAnalysisResult;
