import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
   <footer className="footer  text-light">
      <div className="container-fluid  p-5 bg-dark">
        <div className="row">
          <div className=" bg-dark col-md-6">
            <h5 className='bg-dark text-light'>About Us</h5>
            <p className='bg-dark text-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, turpis eget tincidunt tristique, velit eros commodo nulla.</p>
          </div>
          <div className="col-md-3 bg-dark text-light">
            <h5 className='bg-dark text-light'>Quick Links</h5>
            <ul className="list-unstyled bg-dark text-light d-flex gap-5 ">
            <Link className='bg-dark text-light' to={"/"} >Home</Link> 
            <Link className='bg-dark text-light' to={"/"} >About us</Link> 
            <Link className='bg-dark text-light' to={"/"} >Our Courses</Link> 
           
            </ul>
          </div>
          <div className="col-md-3 bg-dark text-light">
            <h5 className='bg-dark text-light'>Contact Us</h5>
            <ul className="list-unstyled bg-dark text-light">
              <li className='bg-dark text-light'>123 Main Street</li>
              <li className='bg-dark text-light'>City, State ZIP</li>
              <li className='bg-dark text-light'>Email: example@example.com</li>
              <li className='bg-dark text-light'>Phone: 123-456-7890</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center bg-dark text-light py-3">
        <p className='bg-dark text-light'>&copy; 2024 Edufy. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer