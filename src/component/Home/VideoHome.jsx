import React, { useRef } from "react";

// This imports the functional component from the previous sample.
import VideoJS from "../VideoComp";
// import Video from "../../assets/company-profile.MP4"

const VideoHome = () => {
  const refPlayer = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "../../assets/company-profile.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    refPlayer.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div className="container-md">
        <div className="video-section">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
    </>
  );
};

export default VideoHome;
