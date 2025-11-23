import React, { useState } from "react";
import "./AddCampaign.css";

const AddCampaign = () => {
  const [discountType, setDiscountType] = useState("category");
  const [amountType, setAmountType] = useState("percentage");

  return (
    <div className="campaign-container">
      <h2 className="page-title">Add New Campaign</h2>

      <div className="form-card landscape-form">
        {/* Campaign Name */}
        <div className="form-group full-width">
          <input
            type="text"
            placeholder="Campaign Name *"
            className="form-input"
          />
        </div>

        {/* Uploads Row */}
        <div className="form-group two-col">
          <div className="upload-box">
            <p className="upload-title">Upload cover image</p>
            <div className="upload-area">Upload File</div>
            <small className="upload-info">
              Format: png, jpg, jpeg, gif <br />
              Max: 2MB | Ratio: 2:1
            </small>
          </div>

          <div className="upload-box">
            <p className="upload-title">Upload thumbnail</p>
            <div className="upload-area">Upload File</div>
            <small className="upload-info">
              Format: png, jpg, jpeg, gif <br />
              Max: 2MB | Ratio: 1:1
            </small>
          </div>
        </div>

        {/* Discount Type */}
        <div className="form-group two-col">
          <label className="section-label">Discount type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                checked={discountType === "category"}
                onChange={() => setDiscountType("category")}
              />
              Category Wise
            </label>
            <label>
              <input
                type="radio"
                checked={discountType === "service"}
                onChange={() => setDiscountType("service")}
              />
              Service Wise
            </label>
            <label>
              <input
                type="radio"
                checked={discountType === "mixed"}
                onChange={() => setDiscountType("mixed")}
              />
              Mixed
            </label>
          </div>
        </div>

        {/* Discount Title + Category */}
        <div className="form-group two-col">
          <input
            type="text"
            placeholder="Discount Title *"
            className="form-input"
          />
          <select className="form-input">
            <option>Select Category</option>
            <option>Ecommerce</option>
            <option>Cleaning</option>
          </select>
        </div>

        {/* Zone + Amount Type */}
        <div className="form-group two-col">
          <select className="form-input">
            <option>Select Zone</option>
            <option>World</option>
            <option>India</option>
          </select>

          <div className="radio-group-inline">
            <label>
              <input
                type="radio"
                checked={amountType === "percentage"}
                onChange={() => setAmountType("percentage")}
              />
              Percentage
            </label>
            <label>
              <input
                type="radio"
                checked={amountType === "fixed"}
                onChange={() => setAmountType("fixed")}
              />
              Fixed Amount
            </label>
          </div>
        </div>

        {/* Amount + Dates */}
        <div className="form-group three-col">
          <input type="number" placeholder="Amount (%)" className="form-input" />
          <input type="date" className="form-input" />
          <input type="date" className="form-input" />
        </div>

        {/* Min & Max */}
        <div className="form-group two-col">
          <input
            type="number"
            placeholder="Min Purchase (₹) *"
            className="form-input"
          />
          <input
            type="number"
            placeholder="Max Discount (₹) *"
            className="form-input"
          />
        </div>

        {/* Buttons */}
        <div className="btn-row">
          <button className="btn reset">RESET</button>
          <button className="btn submit">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default AddCampaign;
