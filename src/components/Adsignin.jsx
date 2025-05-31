import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Adsignin = () => {
    const URL = "http://localhost:4200/admin/login";
    const navigate = useNavigate();

    const [adminId, setAdminId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        
        axios.post(URL, { adminId, password })
            .then(response => {
                if (response.data.status === 200) {
                    setSuccessMessage("Login successful! Redirecting...");
                    setErrorMessage("");
                    setTimeout(() => {
                        // Store token in localStorage if needed
                        localStorage.setItem('token', response.data.token);
                        navigate('/admin'); // Adjust the redirect path as needed
                    }, 2000); // Redirect after 2 seconds to show success message
                }
            })
            .catch(error => {
                setErrorMessage(error.response?.data?.message || "An error occurred during login.");
                setSuccessMessage("");
            });
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="position-relative border bg-dark border-primary shadow shadow-lg p-5 rounded rounded-4">
                        <h1 className='text-center bg-dark text-light mb-4'>Sign In here</h1>
                        
                        <form className='bg-dark' onSubmit={handleSignIn}>
                            {successMessage && <p className="text-success text-center">{successMessage}</p>}
                            {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

                            <div className="mb-3 bg-dark">
                                <label htmlFor="adminId" className="bg-dark text-light form-label">Admin ID</label>
                                <input
                                    type="text"
                                    className="text-light bg-dark form-control"
                                    id="adminId"
                                    value={adminId}
                                    onChange={e => setAdminId(e.target.value)}
                                    placeholder="Enter your Admin ID"
                                    required
                                />
                            </div>

                            <div className="mb-3 bg-dark">
                                <label htmlFor="password" className="bg-dark text-light form-label">Password</label>
                                <input
                                    type="password"
                                    className="text-light bg-dark form-control"
                                    id="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="bg-dark form-check">
                                <p className='bg-dark text-light'>
                                    Don't have an account? <Link to="/adminsignup" className='bg-dark'>Sign up here</Link>
                                </p>
                            </div>

                            <div className='bg-dark'>
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adsignin;
