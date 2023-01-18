import React from "react";

function BioWrapper() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h3 style={clipText}>
        The possibilities are beyond <br /> your imagination
      </h3>
      <p
        style={{
          font: "700 1.2em sans-serif",
          background: "linear-gradient(to right, #ae67fa 10%, #f49867 60%)",
          backgroundColor: "#ae67fa",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozBackgroundClip: "text",
          MozTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        Explore The Library
      </p>
    </section>
  );
}

const clipText = {
  font: "700 2em sans-serif",
  background: "linear-gradient(to right, #ae67fa 10%, #f49867 60%)",
  backgroundColor: "#ae67fa",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  MozBackgroundClip: "text",
  MozTextFillColor: "transparent",
  color: "transparent",
};
export default BioWrapper;
