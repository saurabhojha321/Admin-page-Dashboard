import React, { useState } from "react";
import "./ServiceList.css";

const ServiceList = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Sofa Cleaning One Seater", category: "Cleaning", zones: "World", price: "199.00₹", active: true },
    { id: 2, name: "Deep Fridge Cleaning", category: "Cleaning", zones: "World", price: "649.00₹", active: true },
    { id: 3, name: "Bathroom Cleaning", category: "Cleaning", zones: "World", price: "549.00₹", active: true },
    { id: 4, name: "Glass And Window Cleaning", category: "Cleaning", zones: "World", price: "99.00₹", active: true },
    { id: 5, name: "Fan Repairing Service", category: "Electrician services", zones: "jaipur all, World", price: "349.00₹", active: true },
    { id: 6, name: "Electricity Breakdown Repair & Fixes", category: "Electrician services", zones: "jaipur all, World", price: "499.00₹", active: true },
    { id: 7, name: "Switch Board & Socket Repair & Fixes", category: "Electrician services", zones: "jaipur all, World", price: "149.00₹", active: true },
  ]);

  const toggleStatus = (id) => {
    setServices(
      services.map((s) =>
        s.id === id ? { ...s, active: !s.active } : s
      )
    );
  };

  return (
    <div className="service-container">
      <div className="service-header">
        <h2>Service List</h2>
        <button className="add-service-btn">+ Add Service</button>
      </div>

      <div className="service-tabs">
        <button className="tab active">All</button>
        <button className="tab">Active</button>
        <button className="tab">Inactive</button>
      </div>

      <div className="search-section">
        <input type="text" placeholder="Search here" />
        <button className="search-btn">SEARCH</button>
        <span className="total-services">Total Services: {services.length}</span>
      </div>

      <table className="service-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Category</th>
            <th>Zones</th>
            <th>Minimum Bidding Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, index) => (
            <tr key={s.id}>
              <td>{index + 1}</td>
              <td>{s.name}</td>
              <td>{s.category}</td>
              <td>{s.zones}</td>
              <td>{s.price}</td>
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={s.active}
                    onChange={() => toggleStatus(s.id)}
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

export default ServiceList;
