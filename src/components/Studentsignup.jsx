import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Studentsignup = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    axios.post('/api/signup', { email, password })
      .then(response => {
        // Handle successful sign-up, e.g., show a success message to the user
        console.log(response.data.message);
      })
      .catch(error => {
        // Handle sign-up error, e.g., show an error message to the user
        console.error(error.response.data.message);
      });
  };


  return (
    <>
  <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-6">
            <div className="position-relative border border-info p-5 rounded rounded-4">
                <h1 className='text-center mb-4'>Sign Up here</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" onChange={e => setEmail(e.target.value)} >Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"  onChange={e => setPassword(e.target.value)}  >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <p>Already have an account? <Link to={"/"}>Sign in here</Link></p>
                    </div>
                    <button type="submit" className="btn btn-primary"  onClick={handleSignUp}  >Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>


    </>
  )
}

export default Studentsignup