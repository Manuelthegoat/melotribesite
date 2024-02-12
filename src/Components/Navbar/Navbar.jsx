import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <div className="breadcrumb">
            <i class="fas fa-bars" aria-hidden="true"></i>
          </div>
          <div className="icon">
            <img src="./assets/melotribe.png" alt="" className="logo-img" />
          </div>
        </div>
        <div className="nav-middle">
          <div className="nav-search">
            <input type="text" placeholder="search..." />
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-texts">
            <p>Explore</p>
            <p>
              <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            </p>
            <p>Signin</p>
          </div>
          <div className="nav-btn">
            <button className="navbar-btn">
              <i class="fa-solid fa-user"></i> Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
