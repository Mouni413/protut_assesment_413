import React, { useEffect, useState } from "react";
import "./index.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSectionOne = () => {
  const [currentVideo, setCurrentVideo] = useState(1);

  useEffect(() => {
    const videoPlayer = document.getElementById("video-player");
    const videos = [
      "/assests/vedio5.mp4",
      "/assests/vedio6.mp4",
      "/assests/vedio7.mp4",
      "/assests/vedio8.mp4",
    ];
    const playNextVideo = () => {
      setCurrentVideo((prevVideo) => (prevVideo === 4 ? 1 : prevVideo + 1));
    };
    videoPlayer.src = videos[currentVideo - 1];
    videoPlayer.autoplay = true;
    videoPlayer.muted = true;
    videoPlayer.addEventListener("ended", playNextVideo);
    return () => {
      videoPlayer.removeEventListener("ended", playNextVideo);
    };
  }, [currentVideo]);
  const handleStepClick = (step) => {
    setCurrentVideo(step);
  };
  return (
    <div className="hero-section-one-container">
      <h1 className="hero-section-one-heading">Work Culture In Our Company</h1>
      <div className="hero-section-card">
        <div className="hero-section-card-one">
          <button onClick={() => handleStepClick(1)} className="request-button">
            Step 1
            <FaArrowRightLong />
          </button>
          <button onClick={() => handleStepClick(2)} className="request-button">
            Step 2
            <FaArrowRightLong />
          </button>
        </div>
        <video id="video-player" webkit-playsinline="true" playsinline="true">
          Your browser does not support the video tag.
        </video>
        <div className="hero-section-card-two">
          <button onClick={() => handleStepClick(3)} className="request-button">
            <FaArrowLeftLong />
            Step 3
          </button>
          <button onClick={() => handleStepClick(4)} className="request-button">
            <FaArrowLeftLong />
            Step 4
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionOne;
