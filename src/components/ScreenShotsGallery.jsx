import React, { useState } from "react";
import "../css/ScreenshotsGallery.css";

const ScreenshotsGallery = ({ skImages = [] }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6); // load 6 more
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">🏆 Winning Moments</h2>

      <div className="gallery-grid">
        {(skImages || []).slice(0, visibleCount).map((img, idx) => (
          <div
            className="gallery-item"
            key={img.id || idx}
            onClick={() => setSelectedImg(img)}
          >
            <img src={img.image} alt={`screenshot-${idx}`} />
            <div className="mode">{img.mode}</div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < skImages.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={loadMore}>
            Load More 🔥
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImg(null)}>
              ✖
            </button>
            <img
              src={selectedImg.image}
              alt={`screenshot-${selectedImg.id}`}
              className="modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotsGallery;
