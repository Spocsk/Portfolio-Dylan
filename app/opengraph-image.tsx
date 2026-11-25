import { ImageResponse } from "next/og";

export const alt = "Dylan Couto de Oliveira · Fullstack TypeScript, Angular × NestJS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", gap: 16, padding: 40, background: "#ededea", fontFamily: "Arial, sans-serif" }}>
      <div style={{ flex: 2, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 44, borderRadius: 28, background: "#ffffff", color: "#0e0e0e" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, fontWeight: 700 }}>
          <div style={{ display: "flex", width: 52, height: 52, borderRadius: 14, background: "#2d3bff", color: "#ffffff", alignItems: "center", justifyContent: "center", fontSize: 20 }}>DC</div>
          Dylan.
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700, letterSpacing: "-3px", lineHeight: 0.95 }}>
          <span>Fullstack TypeScript,</span>
          <span style={{ display: "flex" }}>Angular<span style={{ color: "#2d3bff", margin: "0 18px" }}>×</span>NestJS.</span>
        </div>
        <span style={{ fontSize: 24, color: "#3d3d3a" }}>Dylan Couto de Oliveira · développeur full-stack sénior</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 32, borderRadius: 28, background: "#2d3bff", color: "#ffffff" }}>
          <span style={{ fontSize: 20, fontWeight: 600 }}>Pipelines GitLab CI</span>
          <span style={{ fontSize: 80, fontWeight: 700, letterSpacing: "-3px" }}>−30 %</span>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 32, borderRadius: 28, background: "#ffd43b", color: "#0e0e0e" }}>
          <span style={{ fontSize: 20, fontWeight: 600 }}>Tests</span>
          <span style={{ fontSize: 80, fontWeight: 700, letterSpacing: "-3px" }}>80 %+</span>
        </div>
      </div>
    </div>,
    size,
  );
}
