import React from 'react';
import './Header.css';
import profilePic from './FerasAljoudi.jpg';
import headerCover from './headerCover.jpg';
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

function Header() {
  return (
    <div>
      <img src = {headerCover} alt = "Header Cover" className="scroll-image" />
    <header  >
      <div className="header">
        <div className = "header-section left">
          <img src = {profilePic} alt = "Feras Aljoudi" className = "profile-pic" />
          <b><h1 id='myName'>Feras Aljoudi</h1></b>
        </div>
        
        <div className="header-section right">
          <h1 id='contact'>Contact</h1>
          <hr></hr>
          <p><MdEmail size="25"/> : feras.aljoudi@gmail.com</p>
          <p><BsFillTelephoneForwardFill size="22"/> : (306)209-1033</p>
          <p><FaHome size="25"/> : 201-1281 McEachern Dr.</p>
          <p>Regina, Sk S4X 0N3</p>
          {/* <hr></hr> */}
          <p><AiOutlineGithub size="30"/>
            <a href="https://github.com/ferasaljoudi" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>GitHub</a>
            <FaLinkedin size="30" />

            <a href="https://ca.linkedin.com/in/feras-al-joudi-539727242" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>
      <p id='me'>Currently pursuing a Bachelor of Applied Science in Software Systems Engineering
      at the University of Regina, with an expected graduation date in April 2025.</p>
    </header>
      </div>
  );
}

export default Header;
