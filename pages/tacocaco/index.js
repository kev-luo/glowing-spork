import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Storage } from "aws-amplify";
import Link from "next/link";
import Modal from "react-modal";
import VideoPlayer from "../../components/VideoPlayer";

Modal.setAppElement("#__next");

export default function Tacocaco() {
  const activeVideoInitialState = { name: "", type: "" };
  const router = useRouter();
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

  function styleName(name) {}

  return (
    <div className="grid grid-cols-3 mt-4 gap-1 md:gap-6 -mx-4 md:mx-0">
      {videoList &&
        videoList.map((video) => {
          return (
            <button
              key={video.key}
              onClick={() => handleActiveVideoInfo(video.key)}
            >
              {video.key}
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
  );
}
