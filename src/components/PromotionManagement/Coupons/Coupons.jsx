import React, { useState } from "react";
import "./coupons.css";

const Coupons = () => {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title: "CaptaQ Welcome Special",
      type: "first booking",
      code: "Launch01",
      discountType: "category",
      zones: "World",
      limit: 1,
      status: true,
    },
  ]);

  const toggleStatus = (id) => {
    setCoupons(
      coupons.map((c) =>
        c.id === id ? { ...c, status: !c.status } : c
      )
    );
  };

  return (
    <div className="coupon-container">
      <div className="coupon-header">
        <h2>Coupons</h2>
        <p>Total Coupons: {coupons.length}</p>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="active">All</button>
        <button>Service Wise</button>
        <button>Category Wise</button>
        <button>Mixed</button>
      </div>

      {/* Search */}
      <div className="search-bar">
        <input type="text" placeholder="Search here" />
        <button className="search-btn">SEARCH</button>
        <button className="download-btn">Download ⬇</button>
      </div>

      {/* Table */}
      <table className="coupon-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Title</th>
            <th>Coupon type</th>
            <th>Coupon code</th>
            <th>Discount type</th>
            <th>Zones</th>
            <th>Limit per user</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map((c, index) => (
            <tr key={c.id}>
              <td>{index + 1}</td>
              <td>{c.title}</td>
              <td>{c.type}</td>
              <td>{c.code}</td>
              <td>{c.discountType}</td>
              <td>{c.zones}</td>
              <td>{c.limit}</td>
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={c.status}
                    onChange={() => toggleStatus(c.id)}
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
  );
};

export default Coupons;
