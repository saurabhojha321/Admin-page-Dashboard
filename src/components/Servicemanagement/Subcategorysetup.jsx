import React, { useState } from 'react';
import './Subcategorysetup.css'; // Importing the CSS file for this page

const SubCategorySetup = () => {
  const [activeTab, setActiveTab] = useState('default');
  const [subCategories, setSubCategories] = useState([
    { id: 1, name: 'Window AC', parentCategory: 'AC Repair & Service', serviceCount: 3, status: true },
    { id: 2, name: 'Split AC', parentCategory: 'AC Repair & Service', serviceCount: 5, status: true },
    { id: 3, name: 'AC Installation', parentCategory: 'AC Repair & Service', serviceCount: 2, status: false },
  ]);

  return (
    <div className="subcategory-page-wrapper">
      <div className="content-wrapper">
        <div className="main-content">
          <h1 className="title">Sub Category Setup</h1>

          {/* Tab Navigation */}
          <div className="tabs">
            <button
              className={activeTab === 'default' ? 'active' : ''}
              onClick={() => setActiveTab('default')}
            >
              Default
            </button>
            <button
              className={activeTab === 'english' ? 'active' : ''}
              onClick={() => setActiveTab('english')}
            >
              English
            </button>
          </div>

          {/* Form and Image Upload Section */}
          <div className="category-form">
            <div className="form-left">
              <div>
                <label htmlFor="selectCategoryName" className="label">
                  Select Category Name
                </label>
                <div className="input-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2zM5 7h14M9 13h6" />
                  </svg>
                  <select
                    id="selectCategoryName"
                    className="input-field"
                  >
                    <option value="">Select Category Name</option>
                    <option value="electrician">Electrician services</option>
                    <option value="acrepair">AC Repair & Service</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="subCategoryName" className="label">
                  Sub Category Name (Default)
                </label>
                <div className="input-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2zM5 7h14M9 13h6" />
                  </svg>
                  <input
                    id="subCategoryName"
                    type="text"
                    placeholder="Sub Category Name (Default)"
                    className="input-field"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="shortDescription" className="label">
                  Short Description (Default)
                </label>
                <div className="input-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                  <textarea
                    id="shortDescription"
                    rows="3"
                    placeholder="Short Description (Default)"
                    className="input-field"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Image Upload Area */}
            <div className="form-right">
              <div className="upload-box">
                <button className="edit-button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.232a4 4 0 11-4.95 4.95L7.586 16.586a2 2 0 01-1.414.586H4a1 1 0 01-1-1v-2.172a2 2 0 01.586-1.414l9.5-9.5z" />
                  </svg>
                </button>
                <div className="upload-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <p className="upload-text">Upload File</p>
                <p className="file-info">
                  Image format: .jpeg, .png, .gif<br/>
                  Image size: maximum 2 MB<br/>
                  Image Ratio: 1:1
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="form-buttons">
            <button className="reset">RESET</button>
            <button className="submit">SUBMIT</button>
          </div>
        </div>

        {/* Sub Categories Table Section */}
        <div className="table-section">
          <div className="table-header-controls">
            <div className="filter-tabs">
              <button className="active">All</button>
              <button>Active</button>
              <button>Inactive</button>
            </div>
            <p className="total">
              Total Sub Categories: <span>103</span>
            </p>
          </div>

          {/* Search and Download */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search here"
              className="search-input"
            />
            <button className="search-button">
              SEARCH
            </button>
            <button className="download-button">
              Download
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.707-8.707a1 1 0 001.414 0L10 9.586l1.879-1.879a1 1 0 111.414 1.414l-3.5 3.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Sub Categories Table */}
          <div className="table-container">
            <table className="category-table">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Parent category</th>
                  <th>Service count</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {subCategories.map((subCategory) => (
                  <tr key={subCategory.id}>
                    <td>{subCategory.id}</td>
                    <td>{subCategory.name}</td>
                    <td>{subCategory.parentCategory}</td>
                    <td>{subCategory.serviceCount}</td>
                    <td>
                      <label className="switch">
                        <input type="checkbox" checked={subCategory.status} readOnly />
                        <span className="slider round"></span>
                      </label>
                    </td>
                    <td>
                      <button className="action-button edit-button-table">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="action-button delete-button-table">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 01-1 1H7a1 1 0 00-1 1v1h4V4a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M4 7h12v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm2 2a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm2 4a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategorySetup;