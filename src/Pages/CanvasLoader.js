import React from "react";
import ContentLoader from "react-content-loader";
import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ContentLoader
        speed={2}
        width={200}
        height={100}
        viewBox="0 0 200 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#212121"
      >
        {/* Your loader animation */}
        <circle cx="10" cy="20" r="8" />
        <circle cx="30" cy="20" r="8" />
        <circle cx="50" cy="20" r="8" />
        <circle cx="70" cy="20" r="8" />
        <circle cx="90" cy="20" r="8" />
        <circle cx="110" cy="20" r="8" />
      </ContentLoader>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
