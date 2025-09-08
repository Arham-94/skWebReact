import React from "react";
import "../css/PakFlagShowcase.css";
import pakFlag from "../assets/pakFlag.jpg"; // <- adjust path to your actual flag image

const PakFlagShowcase = () => {
  return (
    <div className="flag-container">
      <img src={pakFlag} alt="Pak Flag" className="pak-flag" />
      <p className="legend-message">
        "Legends are born where the crescent rises 🌙"
      </p>
    </div>
  );
};

export default PakFlagShowcase;
