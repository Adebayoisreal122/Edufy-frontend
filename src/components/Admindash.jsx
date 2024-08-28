import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admindash = () => {
  const [adminDetails, setAdminDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const adminId = 'admin0479'; // Replace this with the actual admin ID from authentication or context
  const URL = `http://localhost:4200/admin/details/${adminId}`; // Update URL if needed

  useEffect(() => {
    axios.get(URL)
      .then(response => {
        setAdminDetails(response.data.data);
        setSuccessMessage('Admin details fetched successfully');
      })
      .catch(error => {
        setErrorMessage('Failed to fetch admin details');
        console.error("Error fetching admin details:", error);
      });
  }, [URL]);

  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <h4 className="mt-3">Admin Dashboard</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Welcome, {adminDetails?.firstName}</h1>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h3>Admin Details</h3>
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
              {successMessage && <p className="text-success">{successMessage}</p>}
              <ul>
                <li><strong>ID:</strong> {adminDetails?.adminId}</li>
                <li><strong>Name:</strong> {adminDetails?.firstName} {adminDetails?.lastName}</li>
                <li><strong>Email:</strong> {adminDetails?.email}</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Admindash;
