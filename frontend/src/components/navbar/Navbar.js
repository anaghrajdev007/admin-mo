import "./Navbar.css"
import image from "../../assets/images.svg";

import React from 'react'

const Navbar = ({sidebarOpen, openSidebar}) => {
  return (
    <nav className="navbar">
    <div className="nav_icon" onClick={()=>openSidebar()}>
    <i class='bx bx-menu'></i>
    </div>
    <div className="navbar__left">
        <a href="#">Subscrivers</a>
        <a href="#">Video MAnagers</a>
        <a href="#">Admin</a>
    </div>
    <div className="navbar__right">
      <a href="">
      <i class='bx bx-search-alt'></i>
      </a>
      <a href="#">
      <i class='bx bx-stopwatch'></i>
      </a>
      <a href="#">
        <img width="30" src={image} alt="avatar" />
      </a>
    </div>

    </nav>
  )
}

export default Navbar
