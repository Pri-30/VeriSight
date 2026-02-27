import { motion } from "framer-motion";
import { Camera, Code, Calendar, MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface MetadataCardProps {
  metadata: {
    camera: string;
    software: string;
    created_at: string;
    gps?: { lat: number; lng: number } | null;
  };
}

const MetadataCard = ({ metadata }: MetadataCardProps) => {
  const rows = [
    { icon: Camera, label: "Camera", value: metadata.camera },
    { icon: Code, label: "Software", value: metadata.software },
    {
      icon: Calendar,
      label: "Created",
      value: new Date(metadata.created_at).toLocaleString(),
    },
    {
      icon: MapPin,
      label: "GPS",
      value: metadata.gps
        ? `${metadata.gps.lat.toFixed(4)}, ${metadata.gps.lng.toFixed(4)}`
        : "Not available",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="glass-card rounded-2xl p-6"
    >
      <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
        EXIF Metadata
      </p>

      <div className="space-y-3">
        {rows.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-lg bg-muted/30 px-3 py-2"
          >
            <Icon className="h-4 w-4 text-primary" />
            <span className="w-20 text-xs text-muted-foreground">{label}</span>
            <span className="text-sm text-foreground">{value}</span>
          </div>
        ))}
      </div>

      {metadata.gps && (
        <div className="mt-4 overflow-hidden rounded-lg border border-border/20" style={{ height: "160px" }}>
          <MapContainer
            center={[metadata.gps.lat, metadata.gps.lng]}
            zoom={12}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
            attributionControl={false}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            <Marker position={[metadata.gps.lat, metadata.gps.lng]} />
          </MapContainer>
        </div>
      )}
    </motion.div>
  );
};

export default MetadataCard;
