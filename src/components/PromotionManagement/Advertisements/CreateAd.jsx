import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAd.css"; // Ensure this CSS file is linked

const CreateAd = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    provider: "",
    priority: "",
    type: "Video Promotion",
    dateRange: "",
    title: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    alert("Ad Submitted Successfully ✅");
    navigate("/"); // Redirects to AdsList page
  };

  return (
    <div className="create-ad-container">
      {/* Top Bar with Back Button and Settings Icon */}
      <div className="ad-header-bar">
        <div className="header-left">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back to Ads List
          </button>
          {/* This is a placeholder for the settings icon, you'd typically use an SVG or an icon library */}
          <span className="settings-icon">⚙️</span>
        </div>
      </div>

      <h2 className="page-title">Create New Advertisement</h2>
      <p className="subtitle">Boost Your Visibility with Targeted Ads</p>

      {/* Tabs for Default/English */}
      <div className="tabs">
        <button className="tab active">Default</button>
        <button className="tab">English</button>
      </div>

      <div className="form-preview-wrapper">
        {/* ===== Left Form Section ===== */}
        <form className="ad-form" onSubmit={handleSubmit}>
          {/* Select Provider */}
          <select
            name="provider"
            value={form.provider}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select Provider</option>
            <option value="Hemant Kumar">Hemant Kumar</option>
            <option value="Raj Kumar">Raj Kumar</option>
          </select>

          {/* Priority Input */}
          <input
            type="number"
            name="priority"
            placeholder="Priority"
            className="form-input"
            value={form.priority}
            onChange={handleChange}
          />

          {/* Ad Type Select */}
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="form-input"
          >
            <option value="Video Promotion">Video Promotion</option>
            <option value="Banner Promotion">Banner Promotion</option>
          </select>

          {/* Date Range Input */}
          <input
            type="text"
            name="dateRange"
            placeholder="09/29/2025 - 10/09/2025"
            className="form-input"
            value={form.dateRange}
            onChange={handleChange}
          />

          {/* Title Input */}
          <input
            type="text"
            name="title"
            placeholder="Title (Default)"
            className="form-input"
            value={form.title}
            onChange={handleChange}
          />

          {/* Description Textarea */}
          <textarea
            name="description"
            placeholder="Description (Default)"
            className="form-input textarea"
            value={form.description}
            onChange={handleChange}
          ></textarea>

          {/* File Upload Section */}
          <div className="file-upload">
            <label htmlFor="fileInput" className="upload-label">
              Upload Your Video (16:9)
            </label>
            <input
              id="fileInput"
              type="file"
              accept="video/mp4, video/mkv, video/webm"
              onChange={handleFileChange}
            />
            {form.file && <p className="file-name">{form.file.name}</p>}
            <p className="file-note">
              Maximum 50 MB | Supports: MP4, MKV, WEBM
            </p>
          </div>
        </form>

        {/* ===== Right Preview Section ===== */}
        <div className="ad-preview">
          <h3>Advertisement Preview</h3>
          <div className="preview-box">
            {form.file ? (
              <video controls width="100%">
                <source src={URL.createObjectURL(form.file)} type="video/mp4" />
              </video>
            ) : (
              <div className="placeholder">
                <span>🎥 Preview</span>
              </div>
            )}
            <div className="preview-text">
              <h4>{form.title || "Ad Title"}</h4>
              <p>{form.description || "Ad description will appear here."}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Moved form-actions outside the form to match screenshot layout */}
      <div className="form-actions-bottom">
        <button
          type="reset"
          className="reset-btn"
          onClick={() =>
            setForm({
              provider: "",
              priority: "",
              type: "Video Promotion",
              dateRange: "",
              title: "",
              description: "",
              file: null,
            })
          }
        >
          RESET
        </button>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default CreateAd;
