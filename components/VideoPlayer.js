import { useRef, useEffect } from "react";
import { Storage } from "aws-amplify";
import VideoJs from "video.js";

const videoJsOptions = {
  // techOrder: ['html5', 'flash'],
  controls: true,
  autoplay: false,
  aspectRatio: "4:3",
  responsive: true,
  fluid: true,
  loop: false,
  breakpoints: {
    tiny: 300,
    xsmall: 400,
    small: 500,
    medium: 600,
    large: 700,
    xlarge: 800,
    huge: 900,
  },
};

export default function VideoPlayer({ fileKey }) {
  const videoRef = useRef(null);
  const VideoHtml = () => (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
  //  Setup the player
  useEffect(() => {
    const videoElement = videoRef.current;
    let player;
    if (videoElement) {
      player = VideoJs(videoElement, videoJsOptions, async () => {
        const url = await Storage.get(fileKey);
        // Storage.get generates a signed url
        player.src({ src: url, type: "video/mp4" });
      });
    }

    //  When destruct dispose the player
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [fileKey]);

  return <VideoHtml />;
}
