import React, { useState } from "react";
import "./addcoupon.css";

const AddCoupon = () => {
  const [formData, setFormData] = useState({
    couponType: "",
    couponCode: "",
    discountType: "category",
    discountTitle: "",
    category: "",
    zone: "",
    discountAmountType: "percentage",
    amount: "",
    minPurchase: "",
    maxDiscount: "",
    startDate: "",
    endDate: "",
    limit: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Coupon Data Submitted:", formData);
  };

  const handleReset = () => {
    setFormData({
      couponType: "",
      couponCode: "",
      discountType: "category",
      discountTitle: "",
      category: "",
      zone: "",
      discountAmountType: "percentage",
      amount: "",
      minPurchase: "",
      maxDiscount: "",
      startDate: "",
      endDate: "",
      limit: "",
    });
  };

  return (
    <div className="addcoupon-container">
      <h2 className="form-title">Add New Coupon</h2>

      <form className="coupon-form" onSubmit={handleSubmit}>
        {/* Coupon type & code */}
        <div className="form-row">
          <select
            name="couponType"
            value={formData.couponType}
            onChange={handleChange}
          >
            <option value="">Select coupon type</option>
            <option value="first">First Booking</option>
            <option value="referral">Referral</option>
            <option value="festival">Festival</option>
          </select>

          <input
            type="text"
            name="couponCode"
            value={formData.couponCode}
            onChange={handleChange}
            placeholder="Coupon Code"
          />
        </div>

        {/* Discount type */}
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="discountType"
              value="category"
              checked={formData.discountType === "category"}
              onChange={handleChange}
            />
            Category Wise
          </label>
          <label>
            <input
              type="radio"
              name="discountType"
              value="service"
              checked={formData.discountType === "service"}
              onChange={handleChange}
            />
            Service Wise
          </label>
          <label>
            <input
              type="radio"
              name="discountType"
              value="mixed"
              checked={formData.discountType === "mixed"}
              onChange={handleChange}
            />
            Mixed
          </label>
        </div>

        {/* Discount title, category, zone */}
        <input
          type="text"
          name="discountTitle"
          value={formData.discountTitle}
          onChange={handleChange}
          placeholder="Discount Title (Default)"
        />

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Select Category"
        />

        <input
          type="text"
          name="zone"
          value={formData.zone}
          onChange={handleChange}
          placeholder="Select Zone"
        />

        {/* Discount amount type */}
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="discountAmountType"
              value="percentage"
              checked={formData.discountAmountType === "percentage"}
              onChange={handleChange}
            />
            Percentage
          </label>
          <label>
            <input
              type="radio"
              name="discountAmountType"
              value="fixed"
              checked={formData.discountAmountType === "fixed"}
              onChange={handleChange}
            />
            Fixed Amount
          </label>
        </div>

        {/* Amount, Start date, End date */}
        <div className="form-row">
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount (%)"
          />
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        {/* Min purchase, Max discount, Limit */}
        <div className="form-row">
          <input
            type="number"
            name="minPurchase"
            value={formData.minPurchase}
            onChange={handleChange}
            placeholder="Min Purchase (₹)"
          />
          <input
            type="number"
            name="maxDiscount"
            value={formData.maxDiscount}
            onChange={handleChange}
            placeholder="Max Discount (₹)"
          />
          <input
            type="number"
            name="limit"
            value={formData.limit}
            onChange={handleChange}
            placeholder="Limit For Same User"
          />
        </div>

        {/* Buttons */}
        <div className="form-actions">
          <button type="button" className="reset-btn" onClick={handleReset}>
            RESET
          </button>
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoupon;
