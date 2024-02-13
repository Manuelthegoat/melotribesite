import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footeritem">
          <div className="foot">
            <p className="foottitle">Get Started</p>
            <p className="footertext">Get This Theme</p>
            <p className="footertext">Read Documents</p>
            <p className="footertext">Get Supported</p>
            <p className="footertext">More Music Themes</p>
          </div>
          <div className="foot">
            <p className="foottitle">Browse & Explore</p>
            <p className="footertext">Streaming Library</p>
            <p className="footertext">Live Radio Stations</p>
            <p className="footertext">Icecast</p>
            <p className="footertext">Shoutcast</p>
            <p className="footertext">Youtube Music</p>
            <p className="footertext">Press</p>
          </div>
          <div className="foot">
            <p className="foottitle">Account</p>
            <p className="footertext">Sign Up</p>
            <p className="footertext">Verified on Melotribe</p>
            <p className="footertext">Start Upload</p>
          </div>
          <div className="foot">
            <p className="foottitle">About</p>
            <p className="footertext">About Us</p>
            <p className="footertext">Contact</p>
            <p className="footertext">Terms</p>
            <p className="footertext">Service Policy</p>
          </div>
        </div>
        <div className="hr"></div>
        <div className="footerbottomtext">
          <div className="footerbottomtexttop">
            <p>
              Waveme is a music WordPress theme with many features to build a
              professional music web application, It aim for Music platform,
              Audio publisher, Sophisticated DJ application. The Social Network
              for who love music.
            </p>
            <div className="socialicons">
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-solid fa-envelope"></i>
            </div>
          </div>
          <p className="footerfinaltext">© Copyright 2023 Melotribe Inc.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
