import { ImageResponse } from "next/og";

export const alt = "Dylan CDO - Je conçois, je transmets, j’automatise";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#f1efe8", color: "#151719", fontFamily: "Arial, sans-serif" }}>
      <div style={{ width: "56%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "54px 58px" }}>
        <div style={{ display: "flex", fontSize: 27, fontWeight: 700, letterSpacing: "-1.5px" }}>Dylan <span style={{ color: "#224dff", marginLeft: 7 }}>CDO</span></div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 700, letterSpacing: "-4px", lineHeight: .92 }}>
          <span>Je conçois,</span><span>je transmets,</span><span style={{ color: "#224dff" }}>j’automatise.</span>
        </div>
        <span style={{ fontSize: 17, color: "#626660" }}>Développement · Écoles · Automatisations IA</span>
      </div>
      <div style={{ width: "44%", display: "flex", alignItems: "center", padding: 38, background: "#181a1e" }}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", border: "1px solid #3c4047", borderRadius: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "23px", borderBottom: "1px solid #353940", color: "#f5f4ee" }}><span>Tableau d’opérations</span><span style={{ color: "#58e19d" }}>● actif</span></div>
          {["Demande reçue", "Besoin extrait", "Validation humaine"].map((item, index) => <div key={item} style={{ display: "flex", justifyContent: "space-between", padding: "24px 23px", borderBottom: index < 2 ? "1px solid #30343a" : "1px solid transparent", color: index === 2 ? "#ffffff" : "#989da6", background: index === 2 ? "#253485" : "transparent" }}><span>0{index + 1} / {item}</span><span>{index < 2 ? "OK" : "EN COURS"}</span></div>)}
        </div>
      </div>
    </div>,
    size,
  );
}
