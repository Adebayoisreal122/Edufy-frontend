import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Adsignup = () => {
    const navigate = useNavigate();
    const URL = "https://new-edufy-backend.onrender.com/admin/register";

    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(URL, { firstName, secondName, userName, email, password })
            .then((res) => {
                setSuccessMessage("Registration successful! Redirecting...");
                setErrorMessage("There is an error in registration");
                setTimeout(() => {  
                    navigate('/adminsignin');
                }, 2000); 
            })
            .catch((err) => {
                console.error(err);
                setErrorMessage("Registration failed. Please try again.");
                setSuccessMessage("");
            });
    };

    return (
        <div className="container my-5" style={{
            background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)'
        }}>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="position-relative border bg-dark border-info p-3 rounded rounded-4">
                        <center className='bg-dark'>
                            <form onSubmit={handleSubmit} className="form bg-dark">
                                <h1 className='text-center bg-dark title text-light mb-4'>Sign Up here</h1>

                                {successMessage && <p className="text-success text-center">{successMessage}</p>}
                                {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

                                <div className="d-flex bg-dark gap-3">
                                    <label className='bg-dark'>
                                        <input
                                            name="firstName"
                                            required
                                            placeholder=""
                                            value={firstName}
                                            type="text"
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="bg-dark text-light input"
                                        />
                                        <span className='bg-dark text-light'>Firstname</span>
                                    </label>

                                    <label className='bg-dark'>
                                        <input
                                            name="secondName"
                                            required
                                            placeholder=""
                                            value={secondName}
                                            type="text"
                                            onChange={(e) => setSecondName(e.target.value)}
                                            className="bg-dark text-light input"
                                        />
                                        <span className='bg-dark text-light'>Lastname</span>
                                    </label>
                                </div>

                                <label className='bg-dark'>
                                    <input
                                        name="email"
                                        required
                                        placeholder=""
                                        value={email}
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-dark text-light input"
                                    />
                                    <span className='bg-dark text-light'>Email</span>
                                </label>

                                <label className='bg-dark'>
                                    <input
                                        name="password"
                                        required
                                        placeholder=""
                                        value={password}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-dark input text-light"
                                    />
                                    <span className='bg-dark text-light'>Password</span>
                                </label>

                                <button type="submit" className="submit">Submit</button>
                                <div className="bg-dark form-check">
                                    <p className='bg-dark text-light'>
                                        Already have an account? <Link to="/adminsignin" className='bg-dark'>Sign in here</Link>
                                    </p>
                                </div>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adsignup;
