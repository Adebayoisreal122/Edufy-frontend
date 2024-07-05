import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Adsignin = () => {

  const URL = "http://localhost:4000/admin/login";
  const navigate = useNavigate();



  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = (e) => {
      e.preventDefault();
      axios.post(URL, { email, password })
        .then(response => {
          if (response.data.status === 200) {
            // Handle successful login, e.g., redirect to admin dashboard
            console.log('Admin ID:', response.data.adminId);
            navigate('/admin');
          }
        })
        .catch(error => {
          // Handle sign-in error, e.g., show an error message to the user
          console.error(error.response.data.message);
        });
    };





  return (
    <>

<div className="container  my-5">
    <div className="row  justify-content-center">
        <div className=" col-lg-6">
            <div className="position-relative border bg-dark border-info p-5 rounded rounded-4">
                <h1 className='text-center bg-dark text-light  mb-4'>Sign Up here</h1>

                <form className='bg-dark'>
                    <div className="mb-3 bg-dark">
                        <label htmlFor="exampleInputEmail1" className=" bg-dark text-light form-label" onChange={e => setEmail(e.target.value)} >Email address</label>
                        <input type="email" className=" text-light bg-dark form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className=" bg-dark  text-info form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className=" bg-dark mb-3">
                        <label htmlFor="exampleInputPassword1" className=" bg-dark form-label"  onChange={e => setPassword(e.target.value)}  >Password</label>
                        <input type="password" className=" text-light bg-dark form-control" id="exampleInputPassword1"/>
                    </div>
                   

                    <div className=" bg-dark form-check">
                        <p className='bg-dark text-light'>You don't have an account? <Link to={"/adminsignup"} className='bg-dark '>Sign in here</Link></p>
                    </div>
               
                    <div className='bg-dark'>

                    <button type="submit" className="btn  btn-primary"  onClick={handleSignIn}  >Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Adsignin