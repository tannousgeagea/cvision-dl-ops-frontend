// src/components/Layout.js
import React from 'react';
import Navbar from './navbar';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className='layout-navbar'>
        <Navbar />
      </div>
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
