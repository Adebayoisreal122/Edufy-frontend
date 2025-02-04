import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Studentdash = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');

  const renderSection = () => {
    switch (selectedSection) {
      case 'dashboard':
        return (
          <div className='container p-5 shadow-lg p-3 mb-5 bg-body rounded'>
          
      <h1>Welcome to Dashboard</h1>

          </div>
        );
      case 'profile':
        return (
          <div className='container p-5 shadow-lg p-3 mb-5 bg-body rounded'>
            <h2>Profile</h2>
            <p>This is the profile page.</p>
          </div>
        );
      case 'settings':
        return (
          <div className='container p-5 shadow-lg p-3 mb-5 bg-body rounded'>
            <h2>Settings</h2>
            <p>This is the settings page.</p>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <>
    <div className='bg-body'>

<div className="bg-body container-fluid">
  <div className="row">
    <nav
      id="sidebar"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar vh-100"
    >
      <div className=" bg-light position-sticky">
        <h4 className=" bg-light mt-3">Student Dashboard</h4>
        <ul className="bg-light nav flex-column">
          <li className="bg-light nav-item">
            <button className=" nav-link btn" onClick={() => setSelectedSection('dashboard')}>
              Dashboard
            </button>
          </li>
          <li className="bg-light nav-item">
            <button className="nav-link btn" onClick={() => setSelectedSection('profile')}>
              Profile
            </button>
          </li>
          <li className="bg-light nav-item">
            <button className="nav-link btn" onClick={() => setSelectedSection('settings')}>
              Settings
            </button>
          </li>
          <li className=" bg-light nav-item">
            <Link className="nav-link" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <main className="col-md-9  ms-sm-auto col-lg-10 px-4">
      <div className="d-flex  justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Welcome!</h1>
      </div>

      {renderSection()}
    </main>
  </div>
</div>
</div>
    </>
  )
}

export default Studentdash