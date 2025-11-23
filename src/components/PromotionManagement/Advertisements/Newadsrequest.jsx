import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdsRequest.css'; // Naya CSS file name

// Dummy data for the table
const DUMMY_REQUESTS = [];

const Newadsrequest = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState(DUMMY_REQUESTS);
  const [activeTab, setActiveTab] = useState('New');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering requests based on tab selection
  const filteredRequests = requests.filter(request => {
    // Logic for filtering based on tabs and search term
    return true; // For now, showing all or filtered results if data existed
  });

  return (
    <div className="ads-container">
      {/* Header and Info Icon */}
      <div className="header-row">
        <h2 className="ads-title">Advertisement Requests <span className="request-count">0</span></h2>
        <span className="info-icon" title="Request Information">ⓘ</span>
      </div>

      {/* Tabs Section */}
      <div className="request-tabs">
        {['New', 'Update Request', 'Expired'].map(tab => (
          <button
            key={tab}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} <span className="tab-count">0</span>
          </button>
        ))}
      </div>

      {/* Search and Download Bar */}
      <div className="action-bar-requests">
        <div className="search-group">
          <span className="search-icon-inside">🔍</span>
          <input
            type="text"
            placeholder="Search here"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">SEARCH</button>
        </div>
        
        <div className="download-group">
          <button className="download-btn-request">
            Download <span className="dropdown-arrow">▼</span>
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-container-requests">
        <table>
          <thead>
            <tr>
              <th style={{width: '5%'}}>SL</th>
              <th style={{width: '20%'}}>Title</th>
              <th style={{width: '15%'}}>Advertisement ID</th>
              <th style={{width: '20%'}}>Provider Info</th>
              <th style={{width: '10%'}}>Ads Type</th>
              <th style={{width: '10%'}}>Duration</th>
              <th style={{width: '10%'}}>Status</th>
              <th style={{width: '10%'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">No data available</td>
              </tr>
            ) : (
              // Map through data here if available
              null 
            )}
          </tbody>
        </table>
      </div>
      
      {/* Floating Settings Button */}
      <button className="floating-settings-btn">⚙️</button>
    </div>
  );
};

export default Newadsrequest;