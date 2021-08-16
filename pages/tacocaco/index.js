import { useState, useEffect } from "react";
import { Storage } from "aws-amplify";
import Head from "next/head";
import Modal from "react-modal";
import VideoPlayer from "../../components/VideoPlayer";

Modal.setAppElement("#__next");

export default function Tacocaco() {
  const activeVideoInitialState = { name: "", type: "" };
  const [videoList, setVideoList] = useState("");
  const [activeVideo, setActiveVideo] = useState(activeVideoInitialState);
  useEffect(() => {
    fetchVideos();
  }, []);
  async function fetchVideos() {
    const videos = await Storage.list("videos/");
    setVideoList(videos.slice(1));
  }
  async function handleActiveVideoInfo(name) {
    const type = name.split(".").slice(-1)[0].toLowerCase();

    setActiveVideo({
      name,
      type: type === "mov" ? "video/quicktime" : "video/mp4",
    });
  }

  function styleName(name) {
    const removeBaseDir = name.split("/")[1];
    const displayName = removeBaseDir.split(".")[0];
    return displayName;
  }

  return (
    <>
      <Head>
        <title>Tacocaco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {videoList &&
          videoList.map((video) => {
            return (
              <button
                className="px-10 py-20 text-center transition duration-300 transform bg-gray-900 rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl font-semibold text-gray-200"
                onClick={() => handleActiveVideoInfo(video.key)}
                key={video.key}
              >
                {styleName(video.key)}
              </button>
            );
          })}
        <Modal
          isOpen={Boolean(activeVideo.name != "")}
          onRequestClose={() => setActiveVideo(activeVideoInitialState)}
          contentLabel="Video modal"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              borderRadius: "0",
              right: "auto",
              bottom: "auto",
              padding: 0,
              border: "none",
            },
          }}
        >
          <VideoPlayer fileKey={activeVideo.name} />
        </Modal>
      </div>
    </>
  );
}
