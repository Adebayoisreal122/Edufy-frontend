import React, { useState }  from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Adsignup = () => {

  let URL = "http://localhost:3200/admin/adminsignin";
  
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post(URL, {
    firstName, secondName, userName, email, password
  }
  ).then((res) => {
    console.log(res);
  Navigate('/adminsignin');
  }
  ).catch((err) => {
    console.log(err);
  })}


  return (
    <>

<div className="container  my-5">
    <div className="row  justify-content-center">
        <div className=" col-lg-6">
            <div className="position-relative border bg-dark border-info p-3 rounded rounded-4">
                
                <center className='bg-dark'>

                <form  onSubmit={handleSubmit} className="form bg-dark">
                <h1 className='text-center bg-dark title text-light  mb-4'>Sign Up here</h1>
                <div className=" d-flex bg-dark gap-3">
                <label className='bg-dark'>
                    <input name="firstName" required="" placeholder="" value={firstName} type="text" onChange={(e) => setFirstName (e.target.value)} className=" bg-dark input"/>
                    <span className='bg-dark text-light'>Firstname</span>
                </label>
        
                <label className='bg-dark'>
                    <input name="secondName" required="" placeholder="" value={secondName} type="text" onChange={(e) => setSecondName (e.target.value)} className=" bg-dark input"/>
                    <span className='bg-dark text-light'>Lastname</span>
                </label>
                
            </div>  
            
            <label className='bg-dark'>
                <input name="userName" required="" placeholder="" value={userName} type="text" onChange={(e) => setUserName (e.target.value)} className="bg-dark input"/>
                <span className='bg-dark text-light'>Username</span>
            </label> 

            <label className='bg-dark'>
                <input name="email" required="" placeholder="" value={email} type="email" onChange={(e) => setEmail (e.target.value)} className="bg-dark input"/>
                <span className='bg-dark text-light'>Email</span>
            </label> 
                
            <label className='bg-dark'>
                <input name="password" required="" placeholder="" value={password} type="password" onChange={(e) => setPassword (e.target.value)} className="bg-dark input"/>
                <span className='bg-dark text-light'>Password</span>
            </label>
            <button type="submit"  className="submit">Submit</button>
            <div className=" bg-dark form-check">
                        <p className='bg-dark text-light'>Already have an account? <Link to={"/adminsignin"} className='bg-dark '>Sign in here</Link></p>
                    </div>
        </form>
                </center>
            </div>
        </div>
    </div>
</div>


    </>
  )
}

export default Adsignup