import React from 'react';
import Navbar from '../components/ui/navbar';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className='home-navbar'>
        <Navbar />
      </div>

      <div className="content">
        <div className='content-header'>
          <span>Projects</span>
        </div>
        <div className='content-section'>
          <div className="project-card">Project 1</div>
          <div className="project-card">Project 2</div>
          {/* Add more project cards as needed */}
        </div>

      </div>
    </div>
  );
};

export default Home;