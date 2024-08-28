import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Studentsignup = () => {
  const URL = "http://localhost:4200/user/register";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); // Changed from secondName to lastName
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(URL, {
      firstName, lastName, email, password
    })
    .then((res) => {
      console.log(res.data.message);
      navigate('/studentsignin');
    })
    .catch((err) => {
      console.error(err.response?.data?.message || 'Registration failed');
    });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="position-relative border bg-dark border-info p-5 rounded rounded-4">
            <center className="bg-dark">
              <form onSubmit={handleSubmit} className="form bg-dark">
                <h1 className="text-center bg-dark title text-light mb-4">Sign Up here</h1>

                <div className="text-light d-flex bg-dark gap-3">
                  <label className="bg-dark">
                    <input
                      name="firstName"
                      required
                      placeholder=""
                      value={firstName}
                      type="text"
                      onChange={(e) => setFirstName(e.target.value)}
                      className="text-light bg-dark input"
                    />
                    <span className="bg-dark text-light">Firstname</span>
                  </label>

                  <label className="bg-dark">
                    <input
                      name="lastName"
                      required
                      placeholder=""
                      value={lastName}
                      type="text"
                      onChange={(e) => setLastName(e.target.value)}
                      className="text-light bg-dark input"
                    />
                    <span className="bg-dark text-light">Lastname</span>
                  </label>
                </div>

                <label className="bg-dark">
                  <input
                    name="email"
                    required
                    placeholder=""
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-dark text-light input"
                  />
                  <span className="bg-dark text-light">Email</span>
                </label>

                <label className="bg-dark">
                  <input
                    name="password"
                    required
                    placeholder=""
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-dark text-light input"
                  />
                  <span className="bg-dark text-light">Password</span>
                </label>
                
                <button type="submit" className="submit">Submit</button>
                <div className="bg-dark form-check">
                  <p className="bg-dark text-light">Already have an account? <Link to="/studentsignin" className="bg-dark">Sign in here</Link></p>
                </div>
              </form>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentsignup;
