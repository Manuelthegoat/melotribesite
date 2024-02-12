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
              <img src="./assets/image4.png" alt="" />
            </div>
            <div className="bottomtext">
              <p className="firsttext">Sound Waveform</p>
              <p className="secondtext">Jack Orion</p>
            </div>
          </div>
          <div className="recommendedcard">
            <div className="topimg">
              <img src="./assets/1.png" alt="" />
            </div>
            <div className="bottomtext">
              <p className="firsttext">Sound Waveform</p>
              <p className="secondtext">Jack Orion</p>
            </div>
          </div>
          <div className="recommendedcard">
            <div className="topimg">
              <img src="./assets/2.png" alt="" />
            </div>
            <div className="bottomtext">
              <p className="firsttext">Sound Waveform</p>
              <p className="secondtext">Jack Orion</p>
            </div>
          </div>
          <div className="recommendedcard">
            <div className="topimg">
              <img src="./assets/3.png" alt="" />
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
