import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../../../assets/icons/nav/vision.png'
import HamburgerIcon from '../../../assets/icons/nav/menu.png'; // Hamburger menu icon
import CloseIcon from '../../../assets/icons//nav/close.png';
import ProjectIcon from '../../../assets/icons//nav/projects.png'
import DatalakeIcon from '../../../assets/icons//nav/datalake.png'
import UploadIcon from '../../../assets/icons//nav/projects.png'
import LiveStreamIcon from '../../../assets/icons/nav/live-stream.png'
import ModelsIcon from '../../../assets/icons/nav/ai-model.png'
import DeployIcon from '../../../assets/icons/nav/shuttle.png'

import './navbar.css';



const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const items = [
    { item: 'Projects', ref: '/projects', 'icon':  ProjectIcon},
    { item: 'Datalake', ref: '/datalake', 'icon': DatalakeIcon },
    { item: 'Upload', ref: '/upload', 'icon': UploadIcon },
    { item: 'Models', ref: '/models', 'icon': ModelsIcon},
    { item: 'Deploy', ref: '/deploy', 'icon': DeployIcon},
  ];

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded); // Toggle the navbar state
  };

  return (
    <div className={`navbar ${isExpanded ? 'expand' : 'collapsed'}`}>
      <div className="navbar-header">
        <button className="toggle-button" onClick={toggleNavbar}>
          <img src={isExpanded ? CloseIcon : HamburgerIcon} alt="Toggle" />
        </button>
        <div className='navbar-title'>
          <img src={Logo}></img>
          {isExpanded && <h2>CVision</h2>}
        </div>
      </div>

      <div className="navbar-content">
        {items.map((item, index) => (
          <div className={`navbar-item ${isExpanded ? 'expand' : 'collapsed'}`} key={index}>
            <Link to={item.ref}> {/* Replace <a> with <Link> */}
              <img src={item.icon} alt={item.icon}></img>
              {isExpanded && <span>{item.item}</span>}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
