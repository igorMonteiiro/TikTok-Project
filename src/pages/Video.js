import React, { useRef, useState } from "react";
import "./video.css";
import Videofooter from "./components/footer/Videofooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handlleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handlleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <Videofooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
