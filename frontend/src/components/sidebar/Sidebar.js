import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebat__img">
          <img src={logo} alt="MotorOctane" />
          <h1>AdminName</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar}
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
        <i class='bx bxs-home-heart'></i>
        <a href="#">Dashboard</a>
        </div>
        <h2>MNG</h2>
        <div className="sidebar__link">
        <i className='bx bxs-user-check'></i>
        <a href="/">Admin Management</a>
        </div>
        <div className="sidebar__link">
        <i className='bx bxs-user-check'></i>
        <a href="/">Mobile Management</a>
        </div>
        <div className="sidebar__link">
        <i className='bx bxs-user-check'></i>
        <a href="/">Mobile Management</a>
        </div>
        <div className="sidebar__link">
        <i className='bx bxs-user-check'></i>
        <a href="/">Mobile Management</a>
        </div>
        <h2>More</h2>
        <div className="sidebar__link">
        <i className='bx bxs-user-check'></i>
        <a href="/">Mobile Management</a>
        </div>
        <div className="sidebar__link">
        <i className='bx bxs-user-check'></i>
        <a href="/">Mobile Management</a>
        </div>
        <div className="sidebar__link">
        <i className='bx bxs-user-check'></i>
        <a href="/">Mobile Management</a>
        </div>
        <div className="sidebar__link">
        <i className='bx bxs-user-check'></i>
        <a href="/">Mobile Management</a>
        </div>
        <h2>Some More</h2>
        <div className="sidebar__link">
        <i className='bx bxs-user-check'></i>
        <a href="/">Mobile Management</a>
        </div>
        <div className="sidebar__link">
        <i class='bx bxs-log-out'></i>
        <a href="/">Log Out</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
