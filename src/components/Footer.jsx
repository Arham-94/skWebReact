import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Credit Line */}
        <p className="footer-text">
          Made & Developed by{" "}
          <span className="pak-text">Arham Khan – Pakistani</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
