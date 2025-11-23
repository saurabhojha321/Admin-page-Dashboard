import React from 'react';
import './Topbar.css';
import { FaBars, FaSearch, FaGlobe, FaCaretDown, FaBell, FaUser, FaRegCommentDots } from 'react-icons/fa';

const Topbar = ({ isSidebarCollapsed, toggleSidebar }) => {
    return (
        <div className="topbar" >
            <div className="topbar-left">
                {/* Hamburger button */}
                <div className="menu-icon" onClick={toggleSidebar}>
                    <FaBars />
                </div>
                {/* Logo */}
            </div>

            <div className="topbar-right">
                {/* Search box */}
                <div className="search-box">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search Ctrl+K" className="search-input" />
                </div>
                
                
                
                {/* Notification Icon */}
                <div className="notification-icon-container">
                    <FaBell className="notification-icon" />
                    <span className="notification-badge">0</span>
                </div>
                {/* User Profile */}
                <div className="user-profile">
                    <div className="profile-image-placeholder">
                        <FaUser className="profile-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;