import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Forgot() {

    const URL = "https://new-edufy-backend.onrender.com/user/login";

    const [forgotEmail, setforgotEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();


        const handleEmail = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post(URL, { matricNumber, password });
                console.log(response.data.message);
                setSuccessMessage("Login successful! Redirecting...");
                setErrorMessage("");
                setTimeout(() => {
                    // Store token in localStorage if needed
                    localStorage.setItem('token', response.data.token);
                    navigate('/student'); // Adjust the redirect path as needed
                }, 2000); // Redirect after 2 seconds to show success message
            
            } catch (error) {
                console.error(error.response?.data?.message || 'Sign-in failed');
    
                setErrorMessage(error.response?.data?.message || "An error occurred during login.");
                setSuccessMessage("");
            }
        };

  return (
    <>
              <div className="container my-5">
                  <div className="row justify-content-center">
                      <div className="col-lg-6">
                          <div className="position-relative border bg-dark border-info p-5 rounded rounded-4">
                              <h1 className="text-center bg-dark text-light mb-4">Enter your email here</h1>
      
                              <form className="bg-dark" onSubmit={handleEmail}>
      
                              {successMessage && <p className="text-success text-center">{successMessage}</p>}
                              {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
      
                                  <div className="mb-3 bg-dark">
                                      <label htmlFor="matricNumber" className="bg-dark text-light form-label">
                                          Your Email
                                      </label>
                                      <input
                                          type="text"
                                          className="bg-dark text-light form-control"
                                          id="forgotEmail"
                                          value={forgotEmail}
                                          onChange={(e) => setforgotEmail(e.target.value)}
                                          required
                                      />
                                  </div>
      
                                  <div className="bg-dark">
                                      <button type="submit" className="btn btn-primary">
                                          Send OTP
                                      </button>
                                      <div className="bg-dark">
                                  <Link  className="bg-dark" to='/user/forgot'>back to sign in </Link>
                                        
                              </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
    </> 
  )
}

export default Forgot
