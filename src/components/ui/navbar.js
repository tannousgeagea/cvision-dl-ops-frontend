
import React from 'react';
import './navbar.css';

const Navbar = () => {

  const items = ['Projects', 'Dataset', 'Models', 'Deploy']
  return (
    <div className="navbar">
      <div className='navbar-header'>
        <h2>WASTEANT CVision</h2>
      </div>
      <div className='navbar-content'>
        {items.map((item, index) => (
          <div className='navbar-item'>
            <a href=''>
              <span>{item}</span>
            </a>
          </div>
        ))}
      </div>


      {/* You can add more items here */}
    </div>
  );
};

export default Navbar;