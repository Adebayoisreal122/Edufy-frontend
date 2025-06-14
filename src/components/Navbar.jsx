import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
    <div className='navba'>

    <nav className="navbar navbar-expand-lg  text-light fixed-top" >
  <div className="container-fluid navbar ">
    <h1 className="navbar-brand  ms-5" href="#">Edufy</h1>
    <button className="navbar-toggler navi text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navi  navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className=" navi navbar-nav">
        <li className="nav-item">
          <a className="nav-link nat text-light" aria-current="page" href="#">About us</a>
        </li>
        <li className="nav-item ">
          <Link className="nav-link navi text-light" to="/home#courses"> Our Courses</Link>
        </li>
        <li className="nav-item dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownClose}>
          <a className="nav-link navi dropdown-toggle bg-dark text-light" href="#" role="button" aria-expanded={isDropdownOpen ? 'true' : 'false'}>
            E-portal
          </a>
          <ul className={`dropdown-menu navi ${isDropdownOpen ? 'show' : ''} bg-dark`}>
          <li><Link to={"/studentsignin"} className="dropdown-item  bg-dark text-light" href="#">Student</Link></li>
            <li><Link to={"/adminsignin"} className="dropdown-item  bg-dark text-light" href="#">Staff</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>


    </>
  )
}

export default Navbar