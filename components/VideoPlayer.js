import React from "react";

export default function VideoPlayer({ fileKey, fileType }) {
  const videoContainer = useRef();

  //  Setup the player
  useEffect(() => {
    //  Setting content like this because player.dispose() remove also the html content
    videoContainer.current.innerHTML = `
        <div data-vjs-player>
          <video class="video-js" />
        </div>
      `;

    //  Setting logger level to all for dev
    if (process.env.NODE_ENV === "development") {
      VideoJs.log("all");
    }

    const player = VideoJs(
      videoContainer.current.querySelector("video"),
      videoJsOptions,
      async () => {
        logger.debug(`Version of video.js is ${VideoJs.VERSION}`);
        const url = await Storage.get(fileKey, { level: "protected" }); // Storage.get generates a signed url
        player.src({ src: url, type: fileType });
      }
    );

    //  When destruct dispose the player
    return () => player.dispose();
  }, [fileKey, fileType]);

  return <div ref={videoContainer} />;
}
