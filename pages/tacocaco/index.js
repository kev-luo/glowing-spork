import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Storage } from "aws-amplify";
import Link from "next/link";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function Tacocaco() {
  const activeVideoInitialState = { name: "", media: "" };
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
  async function fetchActiveVideo(name) {
    const s3Video = await Storage.get(name);

    setActiveVideo({ name, media: s3Video });
  }

  return (
    <div className="grid grid-cols-3 mt-4 gap-1 md:gap-6 -mx-4 md:mx-0">
      {videoList &&
        videoList.map((video) => {
          return (
            <button key={video.key} onClick={() => fetchActiveVideo(video.key)}>
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
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "0",
            right: "auto",
            bottom: "auto",
            padding: 0,
            border: "none",
            width: "65vw",
          },
        }}
      >
        <div className="md:flex w-full">
          <div
            className="md:w-2/3 flex-grow-0 flex items-center justify-center bg-black overflow-hidden"
            style={{ maxHeight: "95vh" }}
          >
            <iframe
              width="640"
              height="390"
              src={activeVideo.media}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal>
    </div>
  );
}
