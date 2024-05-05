import React from "react";
import "./index.css";
import { FaArrowCircleLeft } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="nav-bottom-container-1">
      <div className="nav-card-1">
        <h1 className="nav-card-heading">
          Next Genration
          <br />
          Sustainability
          <br />
          Management
        </h1>
        <p className="nav-card-description">
          Create value from your ESG stratagy , data
          <br /> and reporting
        </p>
      </div>
      <img
        src="https://novisto.com/wp-content/uploads/slider/cache/4262df04298dab5ed8fa383aea335150/girl-laptop.webp"
        alt="gir"
        className="girl-image"
      />
      <div className="nav-card-2">
        <button type="button" className="request-button">
          <FaArrowCircleLeft size={30} />
          Demo 1
        </button>
        <button type="button" className="request-button">
          <FaArrowCircleLeft size={30} />
          Demo2
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
