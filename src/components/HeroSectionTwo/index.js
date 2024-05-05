import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./index.css";
const HeroSectionTwo = () => {
  const [currentTabVideo, setCurrentTabVideo] = useState(1);

  useEffect(() => {
    const videoPlayer = document.getElementById("video-player-two");
    const videos = [
      "/assests/vedio5.mp4",
      "/assests/vedio6.mp4",
      "/assests/vedio7.mp4",
      "/assests/vedio8.mp4",
    ];
    const playNextVideo = () => {
      setCurrentTabVideo((prevVideo) => (prevVideo === 4 ? 1 : prevVideo + 1));
    };
    videoPlayer.src = videos[currentTabVideo - 1];
    videoPlayer.autoplay = true;
    videoPlayer.muted = true;
    videoPlayer.addEventListener("ended", playNextVideo);
    return () => {
      videoPlayer.removeEventListener("ended", playNextVideo);
    };
  }, [currentTabVideo]);
  const handleTabClick = (tab) => {
    setCurrentTabVideo(tab);
  };

  return (
    <div>
      <div className="tab-container">
        <p onClick={() => handleTabClick(1)}>Tab 1</p>
        <p onClick={() => handleTabClick(2)}>Tab 2</p>
        <p onClick={() => handleTabClick(3)}>Tab 3</p>
        <p onClick={() => handleTabClick(4)}>Tab 4</p>
      </div>
      <div className="tab-container-card">
        <video
          id="video-player-two"
          webkit-playsinline="true"
          playsinline="true"
        >
          Your browser does not support the video tag.
        </video>
        <button className="request-button-hero ">
          Get Started
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default HeroSectionTwo;
