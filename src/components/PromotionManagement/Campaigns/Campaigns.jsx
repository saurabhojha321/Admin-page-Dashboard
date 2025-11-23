import React, { useState } from "react";
import "./Campaigns.css";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "CaptaQ Launch",
      discountType: "Category",
      discountTitle: "Welcome to CaptaQ",
      applicableOn:
        "Ecommerce, Consultancy Services, Vehicle Washing/Detailing, Beauty, Power Washing, Painting, Pest Control, Mechanic, Electrician, Cleaning, Plumber",
      zones: "World",
      status: true,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    name: "",
    discountType: "",
    discountTitle: "",
    applicableOn: "",
    zones: "",
    status: true,
  });

  const handleChange = (e) => {
    setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value });
  };

  const handleAddCampaign = () => {
    if (!newCampaign.name || !newCampaign.discountType) {
      alert("Please fill campaign name & discount type");
      return;
    }

    setCampaigns([
      ...campaigns,
      { id: Date.now(), ...newCampaign, status: true },
    ]);
    setNewCampaign({
      name: "",
      discountType: "",
      discountTitle: "",
      applicableOn: "",
      zones: "",
      status: true,
    });
    setShowModal(false);
  };

  return (
    <div className="campaigns-container">
      <div className="header">
        <h2 className="title">Campaigns</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Campaign
        </button>
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
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Sl</th>
              <th>Campaign name</th>
              <th>Discount type</th>
              <th>Discount title</th>
              <th>Applicable On</th>
              <th>Zones</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.discountType}</td>
                <td>{item.discountTitle}</td>
                <td>
                  <strong>Category :</strong> {item.applicableOn}
                </td>
                <td>{item.zones}</td>
                <td>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={item.status}
                      onChange={() => {
                        const updated = campaigns.map((c) =>
                          c.id === item.id ? { ...c, status: !c.status } : c
                        );
                        setCampaigns(updated);
                      }}
                    />
                    <span className="slider"></span>
                  </label>
                </td>
                <td>
                  <button className="edit-btn">✏️</button>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      setCampaigns(campaigns.filter((c) => c.id !== item.id))
                    }
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="footer-info">Total Campaigns: {campaigns.length}</div>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Campaign</h3>
            <div className="form-grid">
              <input
                type="text"
                name="name"
                placeholder="Campaign Name"
                value={newCampaign.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="discountType"
                placeholder="Discount Type"
                value={newCampaign.discountType}
                onChange={handleChange}
              />
              <input
                type="text"
                name="discountTitle"
                placeholder="Discount Title"
                value={newCampaign.discountTitle}
                onChange={handleChange}
              />
              <input
                type="text"
                name="applicableOn"
                placeholder="Applicable On"
                value={newCampaign.applicableOn}
                onChange={handleChange}
              />
              <input
                type="text"
                name="zones"
                placeholder="Zones"
                value={newCampaign.zones}
                onChange={handleChange}
              />
            </div>
            <div className="modal-actions">
              <button className="add-btn" onClick={handleAddCampaign}>
                Save
              </button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;
