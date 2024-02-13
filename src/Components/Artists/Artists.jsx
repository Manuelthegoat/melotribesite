import React from "react";
import "./Artists.css";

const Artists = () => {
  return (
    <>
      <div className="artists">
        <p className="artiststitle">Verified Artists</p>
        <div className="artistsbottom">
          <div className="artistscard">
            <img src="./assets/avatar.jpeg" alt="" />
            <p>hitsound producer</p>
            <button className="artistbtn">Follow</button>
          </div>
          <div className="artistscard">
            <img src="./assets/avatar2.jpeg" alt="" />
            <p>hitsound producer</p>
            <button className="artistbtn">Follow</button>
          </div>
          <div className="artistscard">
            <img src="./assets/avatar3.png" alt="" />
            <p>hitsound producer</p>
            <button className="artistbtn">Follow</button>
          </div>
          <div className="artistscard">
            <img src="./assets/avatar4.jpeg" alt="" />
            <p>hitsound producer</p>
            <button className="artistbtn">Follow</button>
          </div>
          <div className="artistscard">
            <img src="./assets/avatar5.jpeg" alt="" />
            <p>hitsound producer</p>
            <button className="artistbtn">Follow</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Artists;
