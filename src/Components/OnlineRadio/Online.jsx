import React from 'react'
import './Online.css'

const Online = () => {
  return (
    <>
     <div className="online">
     <p className="onlinetext">Online Radio</p>
        <div className="online-body">
        <div className="onlinecard">
          <div className="onlinetopimg">
            <img src="./assets/image4.png" alt="" />
          </div>
          <div className="onlinebottomtext">
            <p className="onlinefirsttext">Sound Waveform</p>
            <p className="onlinesecondtext">Jack Orion</p>
          </div>
        </div>
        <div className="onlinecard">
          <div className="onlinetopimg">
            <img src="./assets/1.png" alt="" />
          </div>
          <div className="onlinebottomtext">
            <p className="onlinefirsttext">Sound Waveform</p>
            <p className="onlinesecondtext">Jack Orion</p>
          </div>
        </div>
        <div className="onlinecard">
          <div className="onlinetopimg">
            <img src="./assets/2.png" alt="" />
          </div>
          <div className="onlinebottomtext">
            <p className="onlinefirsttext">Sound Waveform</p>
            <p className="onlinesecondtext">Jack Orion</p>
          </div>
        </div>
        <div className="onlinecard">
          <div className="onlinetopimg">
            <img src="./assets/3.png" alt="" />
          </div>
          <div className="onlinebottomtext">
            <p className="onlinefirsttext">Sound Waveform</p>
            <p className="onlinesecondtext">Jack Orion</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Online