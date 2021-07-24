import { useRef, useEffect } from "react";
import { Storage } from "aws-amplify";
import VideoJs from "video.js";

const videoJsOptions = {
  // techOrder: ['html5', 'flash'],
  controls: false,
  autoplay: true,
  //   responsive: true,
  //   fluid: true,
  loop: false,
};

export default function VideoPlayer({ fileKey }) {
  const videoRef = useRef();

  //  Setup the player
  useEffect(() => {
    //  Setting content like this because player.dispose() remove also the html content
    videoRef.current.innerHTML = `
        <div data-vjs-player>
          <video class="video-js" />
        </div>
      `;
    let player;
    if (videoRef.current) {
      player = VideoJs(
        videoRef.current.querySelector("video"),
        videoJsOptions,
        async () => {
          const url = await Storage.get(fileKey);
          // Storage.get generates a signed url
          player.src({ src: url, type: "video/mp4" });
        }
      );
    }

    //  When destruct dispose the player
    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [fileKey]);

  return <div ref={videoRef} />;
}
