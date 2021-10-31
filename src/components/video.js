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
        }}
      ></video>
    </div>
  );
};

export default Video;
