import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Same no-explicit-font rationale as opengraph-image.tsx (see docs/DECISIONS.md).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0b0d",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            backgroundColor: "#ef233c",
            position: "absolute",
            top: 32,
            right: 32,
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 104,
            fontWeight: 600,
            color: "#edf2f4",
            display: "flex",
          }}
        >
          R
        </div>
      </div>
    ),
    { ...size },
  );
}
