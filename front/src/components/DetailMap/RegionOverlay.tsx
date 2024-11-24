import React from "react";

function RegionOverlay({ region }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "orange",
          width: "75px",
          height: "75px",
          borderRadius: "50%",
          position: "absolute",
          opacity: "0.8",
        }}
      />
      <div
        style={{
          color: "red",
          zIndex: "2",
          textAlign: "center",
          position: "absolute",
        }}
      >
        <div>{region.region}</div>
        <div>{region.campingCounts}</div>
      </div>
    </div>
  );
}

export default RegionOverlay;
