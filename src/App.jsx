import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";

import "./App.css";
import Sidebar from "./components/sidebar";
import SubCategorySetup from "./components/Servicemanagement/Subcategorysetup";
import CategorySetup from "./components/Servicemanagement/categorysetup";
import ServiceList from "./components/Servicemanagement/Servicelist";
import AddNewService from "./components/Servicemanagement/AddNewService";
import ServiceRequestList from "./components/Servicemanagement/ServiceRequestList";
import Discounts from "./components/PromotionManagement/Discounts/Discounts";
import AddDiscount from "./components/PromotionManagement/Discounts/AddDiscount";
import AddCoupon from "./components/PromotionManagement/Coupons/AddCoupon";
import Campaigns from "./components/PromotionManagement/Campaigns/Campaigns";
import AddCampaign from "./components/PromotionManagement/Campaigns/AddCampaign";
import AdsList from "./components/PromotionManagement/Advertisements/AdsList";
import CreateAd from "./components/PromotionManagement/Advertisements/CreateAd";
import Newadsrequest from "./components/PromotionManagement/Advertisements/Newadsrequest";
import PromotionalBanners from "./components/PromotionManagement/Promotionalbanners/PromotionalBanners";
import Topbar from "./components/Topbar";
import Gallery from "./components/Gallery";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <BrowserRouter>
      <div className="app-layout">
        {/* Sidebar Container */}
        <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
          <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content */}
        <div className={`main-content ${isCollapsed ? "collapsed" : ""}`}>
          {/* Navbar */}
          <Topbar toggleSidebar={toggleSidebar} />

          {/* Page Content */}
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/categories/setup" element={<CategorySetup />} />
              <Route
                path="/sub-categories/setup"
                element={<SubCategorySetup />}
              />
              <Route path="/services/list" element={<ServiceList />} />
              <Route path="/services/add" element={<AddNewService />} />
              <Route
                path="/services/requests"
                element={<ServiceRequestList />}
              />
              <Route path="/discounts/list" element={<Discounts />} />
              <Route path="/discounts/add" element={<AddDiscount />} />
              <Route path="/coupons/list" element={<Discounts />} />
              <Route path="/coupons/add" element={<AddCoupon />} />
              <Route path="/campaigns/list" element={<Campaigns />} />
              <Route path="/campaigns/add" element={<AddCampaign />} />
              <Route path="/advertisements/list" element={<AdsList />} />

              <Route path="/" element={<AdsList />} />
              <Route path="/createAd" element={<CreateAd />} />
              <Route path="/advertisements/add" element={<CreateAd />} />
              <Route
                path="/advertisements/request"
                element={<Newadsrequest />}
              />
              <Route path="/banners" element={<PromotionalBanners />} />
              <Route path="/settings/gallery" element={<Gallery />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
