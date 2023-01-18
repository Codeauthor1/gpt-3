import React from "react";
import Story from "./Story";

function GPT() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxHeight: "fit-content",
      }}
    >
      <div>
        <div
          style={{
            height: "3px",
            width: "40px",
            backgroundColor: "#ae67fa",
            background: "linear-gradient(to right, #ae67fa 10%, #f49867 60%)",
          }}
        ></div>
        <h2
          style={{
            font: "700, 2em sans-serif",
            lineHeight: "55px",
            color: "#fff",
            flex: "1",
          }}
        >
          What is GPT-3
        </h2>
      </div>
      <Story />
    </div>
  );
}

export default GPT;
