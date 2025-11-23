import React from "react";
import { FaFolder, FaArrowLeft, FaPlus, FaDownload } from "react-icons/fa";
import "./Gallery.css";

const Gallery = () => {
  const folders = [
    "Advertisement",
    "Banner",
    "Booking",
    "Business",
    "Campaign",
    "Category",
    "Conversation",
    "Employee",
    "Landing-Page",
    "Payment_module",
    "Provider",
    "Push-Notification",
    "Service",
    "Serviceman",
    "User",
  ];

  return (
    <div className="gallery-container">
      {/* ===== HEADER ===== */}
      <div className="gallery-header">
        <h1>File Manager</h1>
        <div className="gallery-actions">
          <button className="download-btn">
            <FaDownload /> DOWNLOAD
          </button>
          <button className="add-btn">
            <FaPlus /> ADD NEW
          </button>
        </div>
      </div>

      {/* ===== TABS ===== */}
      <div className="gallery-tabs">
        <button className="active-tab">Local Storage</button>
      </div>

      {/* ===== FOLDER SECTION ===== */}
      <div className="folder-section">
        <div className="folder-header">
          <h3>
            Public <span className="folder-count">{folders.length}</span>
          </h3>
          <button className="back-btn">
            <FaArrowLeft /> BACK
          </button>
        </div>

        {/* ===== FOLDER GRID ===== */}
        <div className="folder-grid">
          {folders.map((folder, index) => (
            <div key={index} className="folder-card">
              <FaFolder className="folder-icon" />
              <p className="folder-name">{folder}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
