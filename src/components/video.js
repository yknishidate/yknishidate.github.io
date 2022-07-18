import * as React from "react";

const Video = ({ src }) => {
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <video
        src={src}
        controls
        autoplay
        loop
        muted
        playsinline
        style={{
          width: "100%",
          filter: "drop-shadow(0px 0px rgba(0,0,0,0))",
          border: "1px solid #333",
          outline: "none",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      ></video>
    </div>
  );
};

export default Video;
