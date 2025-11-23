import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaGift,
  FaTags,
  FaBullhorn,
  FaFlag,
  FaThLarge,
  FaCog,
  FaRocket,
  FaWrench,
  FaBriefcase,
  FaFileAlt,
  FaImages,
  FaBars,
  FaBoxOpen,
  FaClipboardList,
  FaShippingFast,
  FaHeadset,
  FaChartBar,
  FaFileContract,
  FaRegFileAlt,
} from "react-icons/fa";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import userAvatar from "../assets/images/logo-capta.jpg";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const [openMenus, setOpenMenus] = useState({});

  // Function to close the sidebar if the screen is small
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  const toggleMenu = (menuName) => {
    if (isCollapsed) {
      toggleSidebar();
    }
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  const menuSections = [
    {
      title: "MAIN",
      items: [
        { name: "Dashboard", icon: <FaThLarge className="icon" />, path: "/" },
      ],
    },
    {
      title: "PROMOTION MANAGEMENT",
      items: [
        {
          name: "Discounts",
          icon: <FaGift className="icon" />,
          hasSubmenu: true,
          subLinks: [
            { name: "Discount List", path: "/discounts/list" },
            { name: "Add new discount", path: "/discounts/add" },
          ],
        },
        {
          name: "Coupons",
          icon: <FaTags className="icon" />,
          hasSubmenu: true,
          subLinks: [
            { name: "Coupon list", path: "/coupons/list" },
            { name: "Add new coupon", path: "/coupons/add" },
          ],
        },
        {
          name: "Campaigns",
          icon: <FaBullhorn className="icon" />,
          hasSubmenu: true,
          subLinks: [
            { name: "Campaign list", path: "/campaigns/list" },
            { name: "Add new campaign", path: "/campaigns/add" },
          ],
        },
        {
          name: "Advertisements",
          icon: <FaBullhorn className="icon" />,
          hasSubmenu: true,
          subLinks: [
            { name: "Ads List", path: "/advertisements/list" },
            { name: "New Ads Request", path: "/advertisements/request" },
          ],
        },
        {
          name: "Promotional Banners",
          icon: <FaFlag className="icon" />,
          path: "/banners",
        },
      ],
    },
    {
      title: "SERVICE MANAGEMENT",
      items: [
        {
          name: "Categories",
          icon: <FaTags className="icon" />,
          hasSubmenu: true,
          subLinks: [
            { name: "Category Setup", path: "/categories/setup" },
            { name: "Sub Category Setup", path: "/sub-categories/setup" },
          ],
        },
        {
          name: "Services",
          icon: <FaWrench className="icon" />,
          hasSubmenu: true,
          subLinks: [
            { name: "Service list", path: "/services/list" },
            { name: "Add new service", path: "/services/add" },
            { name: "New Service Requests", path: "/services/requests" },
          ],
        },
      ],
    },
    {
      title: "OPERATION MANAGEMENT",
      items: [
        {
          name: "Inventory Management",
          icon: <FaBoxOpen className="icon" />,
          path: "/inventory",
        },
        {
          name: "Order Management",
          icon: <FaClipboardList className="icon" />,
          path: "/orders",
        },
        {
          name: "Delivery Management",
          icon: <FaShippingFast className="icon" />,
          path: "/delivery",
        },
        {
          name: "Customer Support",
          icon: <FaHeadset className="icon" />,
          path: "/support",
        },
        {
          name: "Analytics & Reports",
          icon: <FaChartBar className="icon" />,
          path: "/analytics",
        },
         {
          name: "Staff-vendor Management",
          icon: <FaChartBar className="icon" />,
          path: "/staff",
        },
         {
          name: "Payments Management",
          icon: <FaChartBar className="icon" />,
          path: "/payments",
        },
        {
          name: "Customer Support",
          icon: <FaChartBar className="icon" />,
          path: "/support",
        },
    ],
    },
    {
      title: "SYSTEM MANAGEMENT",
      items: [
        {
          name: "Settings Management",
          icon: <FaBriefcase className="icon" />,
          hasSubmenu: true,
          subLinks: [
            { name: "Landing Page Settings", path: "/settings/landing" },
            { name: "Page Settings", path: "/settings/pages" },
            { name: "Gallery", path: "/settings/gallery" },
          ],
        },
        {
          name: "Subscription Management",
          icon: <FaBullhorn className="icon" />,
          hasSubmenu: true,
          subLinks: [
            { name: "Subscription list", path: "/subscriptions/list" },
            { name: "Subscription Plans", path: "/subscriptions/plans" },
          ],
        },
        {
          name: "Landing Page Settings",
          icon: <FaRocket className="icon" />,
          path: "/settings/landing",
        },
        {
          name: "Page Settings",
          icon: <FaRegFileAlt className="icon" />,
          path: "/settings/pages",
        },
        {
          name: "Gallery",
          icon: <FaImages className="icon" />,
          path: "/settings/gallery",
        },
      ],
    },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Sidebar Header with Logo and Menu Icon */}
      <div className="sidebar-header">
        {!isCollapsed && (
          <img src={userAvatar} alt="CaptaQ Logo" className="sidebar-logo" />
        )}
        {!isCollapsed && (
          <FaBars className="menu-toggle-icon" onClick={toggleSidebar} />
        )}
      </div>

      {/* User Information Section */}
      {!isCollapsed && (
        <div className="sidebar-user-info">
          <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          <div className="user-details">
            <p className="user-email">care.captaq.in@...</p>
            <p className="user-role">admin-employee</p>
          </div>
        </div>
      )}

      {/* Dynamic Menu Sections */}
      {menuSections.map((section, index) => (
        <React.Fragment key={index}>
          {!isCollapsed && <h3 className="sidebar-title">{section.title}</h3>}
          <ul className="sidebar-menu">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.hasSubmenu ? (
                  <>
                    <div
                      className="menu-link submenu-toggle"
                      onClick={() => toggleMenu(item.name)}
                    >
                      <div className="left">
                        {item.icon} {!isCollapsed && item.name}
                      </div>
                      {!isCollapsed &&
                        (openMenus[item.name] ? (
                          <MdKeyboardArrowDown className="arrow" />
                        ) : (
                          <MdKeyboardArrowRight className="arrow" />
                        ))}
                    </div>
                    {openMenus[item.name] && !isCollapsed && (
                      <ul className="submenu">
                        {item.subLinks.map((subLink, subIndex) => (
                          <li key={subIndex}>
                            <NavLink
                              to={subLink.path}
                              className="submenu-link"
                              onClick={handleLinkClick}
                            >
                              {subLink.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className="menu-link"
                    onClick={handleLinkClick}
                  >
                    <div className="left">
                      {item.icon} {!isCollapsed && item.name}
                    </div>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
