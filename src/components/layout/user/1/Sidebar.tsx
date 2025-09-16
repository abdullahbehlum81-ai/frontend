"use client";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import "@/styles/css/sidebar.css";
import AppLogo from "../../AppLogo";
import NavigationSection from "../../Navigation";
function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        type="button"
        className="hamburger-menu-btn"
      >
        {isSidebarOpen ? <FaXmark /> : <FaBars />}
      </button>
      <div className="sidebar-overlay"></div>
      <div
        className={`sidebar sidebar--right full-width-sidebar ${
          isSidebarOpen ? "sidebar--active" : ""
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        <div className="hamburger-menu-header">
          <AppLogo imgClassName="app-logo" width={161} height={90} />{" "}
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            type="button"
            className="hamburger-close-menu-btn"
          >
            <FaXmark />
          </button>
        </div>
        <div className="sidebar-content-wrap">
          <NavigationSection
            sectionKey="responsive"
            ulClassName="responsive-nav-menu-list"
            listclassName="responsive-nav-menu-list-item"
            anchorClassName="responsive-nav-menu-link"
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
