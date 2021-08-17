import LagRadar from "react-lag-radar";

if (process.env.NODE_ENV !== "development") {
  throw new Error("The LagRadar should only be included in development.");
}

export default function MyLagRadar() {
  return (
    <div
      style={{
        position: "fixed",
        background: "rgba(255, 255, 255, 0.8)",
        borderRadius: 80,
        right: 8,
        bottom: 8,
      }}
    >
      <LagRadar size={160} />
    </div>
  );
}
