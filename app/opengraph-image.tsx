import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CivicAI Solutions — Practical software, delivered properly.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0a",
          color: "#f5f5f4",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 25% 20%, rgba(94,234,212,0.18), transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(212,165,116,0.18), transparent 60%)",
          }}
        />
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            opacity: 0.6,
          }}
        />

        {/* Top: brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#111114",
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 24,
              fontWeight: 600,
              color: "#d4a574",
            }}
          >
            C
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.01em" }}>
              CivicAI Solutions
            </div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#a8a29e",
                marginTop: 2,
              }}
            >
              Practical software
            </div>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 500,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            <span>We build practical </span>
            <span
              style={{
                background: "linear-gradient(135deg, #d4a574 0%, #e6c189 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              software systems
            </span>
            <span> for businesses that need to move.</span>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            color: "#a8a29e",
            fontSize: 16,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span>Coffs Harbour, AU</span>
          <span style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#5eead4",
              }}
            />
            Available globally
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
