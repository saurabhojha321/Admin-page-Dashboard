import React, { useState } from "react";
import "./PromotionalBanners.css";

const PromotionalBanners = () => {
  const [banners, setBanners] = useState([
    { id: 1, title: "Household Appliances Repair", type: "category", status: true },
    { id: 2, title: "Plumbing Services", type: "category", status: true },
    { id: 3, title: "Ecommerce", type: "category", status: false },
    { id: 4, title: "Beauty services at home", type: "category", status: false },
    { id: 5, title: "Beauty services at home", type: "category", status: true },
    { id: 6, title: "Beauty services at home", type: "category", status: false },
  ]);

  const toggleStatus = (id) => {
    setBanners(
      banners.map((b) =>
        b.id === id ? { ...b, status: !b.status } : b
      )
    );
  };

  return (
    <div className="banner-container">
      <h2 className="page-title">Promotional Banners</h2>

      {/* ==== Form Section ==== */}
      <div className="form-section">
        <div className="form-left">
          <label>Title *</label>
          <input type="text" placeholder="Enter banner title" />

          <label>Resource type</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="type" defaultChecked /> Category Wise
            </label>
            <label>
              <input type="radio" name="type" /> Service Wise
            </label>
            <label>
              <input type="radio" name="type" /> Redirect Link
            </label>
          </div>

          <select>
            <option>Electrician Services</option>
            <option>Plumbing</option>
            <option>Beauty Services</option>
            <option>Household Repair</option>
          </select>
        </div>

        <div className="form-right">
          <p>Upload cover image</p>
          <div className="upload-box">
            <input type="file" />
            <small>
              Image format: jpg, png, jpeg, gif <br />
              Max size: 2 MB <br />
              Ratio: 2:1
            </small>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="reset-btn">RESET</button>
        <button className="submit-btn">SUBMIT</button>
      </div>

      {/* ==== Table Section ==== */}
      <div className="table-section">
        <div className="table-header">
          <input type="text" placeholder="Search here" />
          <button className="search-btn">SEARCH</button>
          <button className="download-btn">Download</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>St</th>
              <th>Title</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {banners.map((banner, i) => (
              <tr key={banner.id}>
                <td>{i + 1}</td>
                <td>{banner.title}</td>
                <td>{banner.type}</td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={banner.status}
                      onChange={() => toggleStatus(banner.id)}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromotionalBanners;
