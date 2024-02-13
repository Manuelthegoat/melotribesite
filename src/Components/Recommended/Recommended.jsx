import React from "react";
import "./Recommended.css";

const Recommended = () => {
  return (
    <>
      <div className="recommended">
        <p className="recommendedtext">Recommended for you</p>
        <div className="recommended-body">
          <div className="recommendedcard">
            <div className="topimg">
              <img src="./assets/d1.png" alt="" />
            </div>
            <div className="bottomtext">
              <p className="firsttext">Sound Waveform</p>
              <p className="secondtext">Jack Orion</p>
            </div>
          </div>
          <div className="recommendedcard">
            <div className="topimg">
              <img src="./assets/d2.png" alt="" />
            </div>
            <div className="bottomtext">
              <p className="firsttext">Sound Waveform</p>
              <p className="secondtext">Jack Orion</p>
            </div>
          </div>
          <div className="recommendedcard">
            <div className="topimg">
              <img src="./assets/d3.png" alt="" />
            </div>
            <div className="bottomtext">
              <p className="firsttext">Sound Waveform</p>
              <p className="secondtext">Jack Orion</p>
            </div>
          </div>
          <div className="recommendedcard">
            <div className="topimg">
              <img src="./assets/d4.png" alt="" />
            </div>
            <div className="bottomtext">
              <p className="firsttext">Sound Waveform</p>
              <p className="secondtext">Jack Orion</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
