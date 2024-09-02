import React from "react";
import './youtube.css';
import img from './img/Untitled design (4).png';
import img1 from './img/Dark Green and White Simple Professional Artist YouTube Channel Logo.png';
export default function Youtube() {
    return (
        <div className="sec1">
            <div className="yt">
                <img 
                    src={img} 
                    alt="Thumbnail" 
                    className="thumbnail"
                />
                <div className="video-info">
                    <img 
                        src={img1}
                        alt="Channel" 
                        className="channel-icon"
                    />
                    <div className="text-content">
                        <p className="video-title">React full course for beginners in Tamil</p>
                        <p className="channel-name">FreeCodeCamp <i className="fas fa-check-circle"></i></p>
                        <p className="video-meta">500k views • 2 Hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
