import React from 'react';
import './Discounts.css';

const Discounts = () => {
  return (
    <div className="discounts-container">
      <h2>Discounts</h2>
      <div className="tabs">
        <button className="tab active">All</button>
        <button className="tab">Service Wise</button>
        <button className="tab">Category Wise</button>
        <button className="tab">Mixed</button>
      </div>

      <div className="search-download">
        <input type="text" placeholder="Search here" />
        <button className="search-button">SEARCH</button>
        <div className="download">
          <button className="download-button">⬇ Download</button>
        </div>
      </div>

      <table className="discounts-table">
        <thead>
          <tr>
            <th>Sl</th>
            <th>Title</th>
            <th>Discount type</th>
            <th>Zones</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>TTServMe Launch Discount</td>
            <td>category</td>
            <td>World</td>
            <td>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </td>
            <td>
              <button className="edit-btn">✏️</button>
              <button className="delete-btn">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total-discount">Total Discount: 1</div>
    </div>
  );
};

export default Discounts;
