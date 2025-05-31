import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Studentsignin = () => {
    const URL = "http://localhost:4200/user/login";
    const [matricNumber, setMatricNumber] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL, { matricNumber, password });
            console.log(response.data.message);
            setSuccessMessage("Login successful! Redirecting...");
            setErrorMessage("");
            setTimeout(() => {
                localStorage.setItem('token', response.data.token);
                navigate('/student'); 
            }, 2000); 
        localStorage.setItem('student', JSON.stringify(response.data.student));

        } catch (error) {
            console.error(error.response?.data?.message || 'Sign-in failed');

            setErrorMessage(error.response?.data?.message || "An error occurred during login.");
            setSuccessMessage("");
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="position-relative border bg-dark border-info p-5 rounded rounded-4">
                        <h1 className="text-center bg-dark text-light mb-4">Sign In here</h1>

                        <form className="bg-dark" onSubmit={handleSignIn}>

                        {successMessage && <p className="text-success text-center">{successMessage}</p>}
                        {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

                            <div className="mb-3 bg-dark">
                                <label htmlFor="matricNumber" className="bg-dark text-light form-label">
                                    Matric Number
                                </label>
                                <input
                                    type="text"
                                    className="bg-dark text-light form-control"
                                    id="matricNumber"
                                    value={matricNumber}
                                    onChange={(e) => setMatricNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="bg-dark mb-3">
                                <label htmlFor="password" className="bg-dark text-light form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="bg-dark text-light form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="bg-dark form-check">
                                <p className="bg-dark text-light">
                                    You don't have an account? <Link to="/studentsignup" className="bg-dark">Sign up here</Link>
                                </p>
                            </div>

                            <div className="bg-dark">
                                <button type="submit" className="btn btn-primary">
                                    Sign in
                                </button>
                                <div className="bg-dark">
                            <Link  className="bg-dark" to='/forgotpassword'>forget password?</Link>
                                  
                        </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studentsignin;
