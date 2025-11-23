import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // <-- ADDED: useNavigate import
import "./AdsList.css";

const AdsList = () => {
  const navigate = useNavigate(); // <-- ADDED: useNavigate initialization // Dummy data (backend से आने वाला मान लो)

  const dummyData = [
    {
      id: 1,
      title: "Beauty services at home",
      adId: "9239503647",
      provider: "Hemant Kumar verma",
      email: "hemantverma5664@gmail.com",
      type: "Video Promotion",
      duration: "2025-02-07 to 2025-02-14",
      status: "Approved",
      expired: true,
      priority: 1,
    },
    {
      id: 2,
      title: "Plumbing services",
      adId: "8923390749",
      provider: "bittu",
      email: "bssalvi12@gmail.com",
      type: "Video Promotion",
      duration: "2025-02-04 to 2025-02-14",
      status: "Approved",
      expired: true,
      priority: 2,
    },
    {
      id: 3,
      title: "Electrician services",
      adId: "8895672345",
      provider: "Raj Kumar",
      email: "rajkumar123@gmail.com",
      type: "Banner Promotion",
      duration: "2025-02-01 to 2025-02-20",
      status: "Running",
      expired: false,
      priority: 3,
    },
  ]; // States

  const [ads, setAds] = useState([]);
  const [search, setSearch] = useState("");
  const [filterTab, setFilterTab] = useState("All"); // Load data from backend (simulate with useEffect)

  useEffect(() => {
    // Future: yaha API call karna
    setAds(dummyData);
  }, []); // Filter logic

  const filteredAds = ads.filter((ad) => {
    const matchesSearch =
      ad.title.toLowerCase().includes(search.toLowerCase()) ||
      ad.provider.toLowerCase().includes(search.toLowerCase()) ||
      ad.adId.includes(search);

    const matchesTab = filterTab === "All" ? true : ad.status === filterTab;

    return matchesSearch && matchesTab;
  }); // Download CSV logic

  const downloadCSV = () => {
    const header = [
      "SL",
      "Title",
      "Advertisement ID",
      "Provider",
      "Email",
      "Ads Type",
      "Duration",
      "Status",
      "Priority",
    ];
    const rows = filteredAds.map((ad) => [
      ad.id,
      ad.title,
      ad.adId,
      ad.provider,
      ad.email,
      ad.type,
      ad.duration,
      ad.status,
      ad.priority,
    ]);
    let csvContent =
      "data:text/csv;charset=utf-8," +
      [header, ...rows].map((e) => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "ads_list.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="ads-container">
            <h2 className="ads-title">Ads List</h2>      {/* Tabs */}     {" "}
      <div className="tabs">
               {" "}
        {["All", "Approved", "Running", "Expired", "Denied", "Paused"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setFilterTab(tab)}
              className={filterTab === tab ? "active" : ""}
            >
                            {tab}           {" "}
            </button>
          )
        )}
             {" "}
      </div>
            {/* Search + Create + Download */}     {" "}
      <div className="action-bar">
               {" "}
        <input
          type="text"
          placeholder="Search here"
          className="search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
                <button className="search-btn">SEARCH</button>       {" "}
        <button
          className="create-btn"
          onClick={() => navigate("/advertisements/add")}
        >
                    CREATE ADS        {" "}
        </button>
               {" "}
        <div className="dropdown">
                   {" "}
          <button className="download-btn" onClick={downloadCSV}>
                        Download ▼          {" "}
          </button>
                 {" "}
        </div>
             {" "}
      </div>
            {/* Table */}     {" "}
      <div className="table-container">
               {" "}
        <table>
                   {" "}
          <thead>
                       {" "}
            <tr>
                            <th>SL</th>              <th>Title</th>             {" "}
              <th>Advertisement ID</th>              <th>Provider Info</th>     
                      <th>Ads Type</th>              <th>Duration</th>         
                  <th>Status</th>              <th>Priority</th>             {" "}
              <th>Action</th>           {" "}
            </tr>
                     {" "}
          </thead>
                   {" "}
          <tbody>
                       {" "}
            {filteredAds.length > 0 ? (
              filteredAds.map((ad) => (
                <tr key={ad.id}>
                                    <td>{ad.id}</td>                 {" "}
                  <td>{ad.title}</td>                  <td>{ad.adId}</td>       
                           {" "}
                  <td>
                                        {ad.provider}
                                        <br />                   {" "}
                    <span className="email">{ad.email}</span>                 {" "}
                  </td>
                                    <td>{ad.type}</td>                 {" "}
                  <td>{ad.duration}</td>                 {" "}
                  <td>
                                       {" "}
                    <span
                      className={`status ${
                        ad.status === "Approved"
                          ? "approved"
                          : ad.status === "Running"
                          ? "running"
                          : "denied"
                      }`}
                    >
                                            {ad.status}                   {" "}
                    </span>
                                        <br />                   {" "}
                    {ad.expired && <span className="expired">(Expired)</span>} 
                                   {" "}
                  </td>
                                    <td>{ad.priority}</td>                 {" "}
                  <td>
                                       {" "}
                    <button className="action-menu">⋮</button>                 {" "}
                  </td>
                                 {" "}
                </tr>
              ))
            ) : (
              <tr>
                               {" "}
                <td
                  colSpan="9"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                                    No Ads Found                {" "}
                </td>
                             {" "}
              </tr>
            )}
                     {" "}
          </tbody>
                 {" "}
        </table>
               {" "}
      </div>
           {" "}
    </div>
  );
};

export default AdsList;
