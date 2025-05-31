import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDashboard } from '../services/authservice';
import { FaBars, FaTachometerAlt, FaUser, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Studentdash = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [student, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getDashboard()
      .then((response) => {
        setUser(response.data.user);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load dashboard');
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/studentsignin');
  };

  const handleNavClick = (section) => {
    setSelectedSection(section);
    // Close sidebar on mobile
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };

  const renderSection = () => {
    switch (selectedSection) {
      case 'dashboard':
        return (
          <div className="container p-4 shadow-sm rounded bg-white my-3">
            <h2>Student Dashboard</h2>
            <ul>
              <li><strong>First Name:</strong> {student.firstName}</li>
              <li><strong>Last Name:</strong> {student.lastName}</li>
              <li><strong>Email:</strong> {student.email}</li>
              <li><strong>Matric Number:</strong> {student.matricNumber}</li>
            </ul>
          </div>
        );
      case 'profile':
        return (
          <div className="container p-4 shadow-sm rounded bg-white my-3">
            <h2>Profile</h2>
            <p>This is the profile page.</p>
          </div>
        );
      case 'settings':
        return (
          <div className="container p-4 shadow-sm rounded bg-white my-3">
            <h2>Settings</h2>
            <p>This is the settings page.</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) return <p className="text-center mt-5">Loading dashboard...</p>;
  if (error) return <p className="text-danger text-center mt-5">{error}</p>;

  return (
    <div className="container-fluid p-0">
      <div className="d-flex flex-column flex-md-row">
        {/* Toggle button for small screens */}
        <button
          className="btn btn-outline-primary d-md-none m-2"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FaBars /> Menu
        </button>

        {/* Sidebar */}
        <motion.nav
          initial={{ x: -250 }}
          animate={{ x: showSidebar || window.innerWidth >= 768 ? 0 : -250 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className={`bg-light p-3 border-end col-md-3 col-lg-2 vh-100 d-md-block position-fixed ${showSidebar ? 'd-block' : 'd-none d-md-block'}`}
          style={{ zIndex: 1000 }}
        >
          <h4 className="mb-4">Student Dashboard</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <button
                className={`btn w-100 text-start ${selectedSection === 'dashboard' ? 'btn-primary text-white' : 'btn-light'}`}
                onClick={() => handleNavClick('dashboard')}
              >
                <FaTachometerAlt className="me-2" /> Dashboard
              </button>
            </li>
            <li className="nav-item mb-2">
              <button
                className={`btn w-100 text-start ${selectedSection === 'profile' ? 'btn-primary text-white' : 'btn-light'}`}
                onClick={() => handleNavClick('profile')}
              >
                <FaUser className="me-2" /> Profile
              </button>
            </li>
            <li className="nav-item mb-2">
              <button
                className={`btn w-100 text-start ${selectedSection === 'settings' ? 'btn-primary text-white' : 'btn-light'}`}
                onClick={() => handleNavClick('settings')}
              >
                <FaCogs className="me-2" /> Settings
              </button>
            </li>
            <li className="nav-item mt-3">
              <button
                className="btn btn-outline-warning w-100 text-start"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="me-2" /> Logout
              </button>
            </li>
          </ul>
        </motion.nav>

        {/* Main Content */}
        <main className="offset-md-3 offset-lg-2 col p-4">
          <div className="mb-3">
            <h2 className="h4">Welcome, {student.firstName} {student.lastName}</h2>
          </div>
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Studentdash;
