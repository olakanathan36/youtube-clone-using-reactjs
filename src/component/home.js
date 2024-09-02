import React from "react";
import { FaBars, FaHome,FaYoutube, FaVideo, FaHeart, FaUser, FaSearch, FaMicrophone, FaCamera, FaBell, FaUserCircle } from 'react-icons/fa'; 
import './home.css';
import Youtube from "./youtube";
export default function Call() {
    return (
        <div className="element">
            <div className="maintag">
                <div className="sections">
                    <div className="icon">
                        <FaBars />
                    </div>
                    <div className="icon">
                        <FaHome />
                        <p>Home</p>
                    </div>
                    <div className="icon">
                        <FaVideo />
                        <p>Shorts</p>
                    </div>
                    <div className="icon">
                        <FaHeart />
                        <p>Subscription</p>
                    </div>
                    <div className="icon">
                        <FaUser />
                        <p>You</p>
                    </div>
                </div>
            </div>
            <div className="section1">
                <div className="searchbox">
                    <div className="split1">
                        <h1 className="headh1"><FaYoutube /> YouTube</h1>
                    </div>
                    <div className="split2">
                        <input type="text" placeholder="Search" />
                        <FaSearch />
                        <FaMicrophone />
                    </div>
                    <div className="split3">
                        <FaCamera />
                        <FaBell />
                        <FaUserCircle />
                    </div>
                </div>
                
            </div>
            <div className="youtubecom">
                <Youtube/>
                <Youtube/>
                <Youtube/>
                <Youtube/>
                <Youtube/>
                <Youtube/>
                <Youtube/>
                <Youtube/>
                <Youtube/>
                <Youtube/>
                <Youtube/>
                <Youtube/>
                

            </div>
        </div>
    );
}

