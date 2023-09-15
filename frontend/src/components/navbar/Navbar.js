import "./Navbar.css"
import image from "../../assets/images.svg";

import React from 'react'

const Navbar = ({sidebarOpen, openSidebar}) => {
  return (
    <nav className="navbar">
    <div className="nav_icon" onClick={()=>openSidebar()}>
        <i className="fa fa-bars"></i>
    </div>
    <div className="navbar__left">
        <a href="#">Option</a>
        <a href="#">option</a>
        <a href="#"></a>
    </div>

    </nav>
  )
}

export default Navbar
