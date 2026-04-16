import { ImageResponse } from "next/og";

export const alt = "Dylan COUTO DE OLIVEIRA — Développeur Web & Mobile Senior";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, rgb(15, 17, 21), rgb(34, 39, 48) 50%, rgb(232, 168, 124))",
          color: "white",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "860px",
          }}
        >
          <span
            style={{
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              opacity: 0.75,
            }}
          >
            dylan-cdo.fr
          </span>
          <h1
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Dylan COUTO DE OLIVEIRA
          </h1>
          <p
            style={{
              fontSize: 34,
              lineHeight: 1.3,
              margin: 0,
              opacity: 0.9,
            }}
          >
            Développeur web et mobile senior.
            <br />
            TypeScript, Angular, Nest.js, React.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          <span>Interfaces produit</span>
          <span>•</span>
          <span>Architecture TypeScript</span>
          <span>•</span>
          <span>Qualité perçue</span>
        </div>
      </div>
    ),
    size,
  );
}
