import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'




const Home = () => {




  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);



  return (
    <>
<div className='homi position-relative'>
  {/* Background Image */}
  <img src="/images/background.png" alt="" className='back-image position-absolute w-100 h-100 object-fit-cover' />

  {/* Overlay Content */}
  <div className="container-fluid text-center gradient-overlay position-relative z-1">
    <div className="row align-items-center min-vh-100">
      {/* Left Content */}
      <div className="col-12 col-md-6 p-5 text-light text-start">
        <h1 className="mb-4">
          Learn today’s most in-demand skills with our free online courses
        </h1>
        <p className="mb-4">
          Start, switch, or advance your career with more than 6,900 courses, Professional Certificates, and degrees from world-class universities and companies.
        </p>
        <Link to="/studentsignin" className="btn btn-outline-light">
          Get started
        </Link>
      </div>

      {/* Right Image */}
      <div className="col-12 col-md-6 p-5">
        <img src="/images/online-school.svg" alt="Online School" className="img-fluid" />
      </div>
    </div>
  </div>
</div>


      <div className='container-fluid  w-85'>
        <div className='row'>
          <div className='col-md-6 p-5'>
            <img src="/images/edufy2.webp" alt="" className="img-fluid" />
          </div>
          <div className='col-md-6 p-5'>
            <h1 className=''>Learn Anywhere and Anytime!!</h1>
            <p>"We need to bring learning to people instead of people to learning." Elliot Masie</p>
            <p>With eduFY, you can learn on your own time and from anywhere. You can learn on your computer, tablet, or phone with eduFY’s mobile-friendly courses and programs. You can also download our mobile app to watch video lectures offline.</p>
          </div>
        </div>
      </div>
<div id='courses'>
  <center><h1 className='my-4'> Our Courses</h1></center>
</div>
      <div  className='container'>
      <div className='row'>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/webdev.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">Learn the Fundamentals of Web Development!

HTML & CSS: Start with the building blocks of the web.
JavaScript: Dive into interactive web development.
Responsive Design: Create websites that look great on any device.
Backend Basics: Understand server-side technologies.
Hands-On Projects: Apply your skills in real-world scenarios.
Expert Instructors: Gain insights from industry professionals.</p>
              <a href="#" className="btn btn-outline-primary">Apply</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/data.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Data Analytics</h5>
              <p className="card-text">Master the Art of Data Analysis!
Data Collection: Learn methods to gather quality data.
Data Cleaning: Understand how to prepare data for analysis.
Statistical Analysis: Explore various methods to interpret data.
Data Visualization: Present your findings with impactful visuals.
Software Tools: Gain proficiency in Excel, Python, R, and more.
Real-World Projects: Apply your knowledge to practical scenarios.
Expert Guidance: Learn from experienced data analysts.</p>
              <a href="#" className="btn btn-outline-primary">Apply</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/graphic.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Graphic Design</h5>
              <p className="card-text">Unlock Your Creativity with Graphic Design!
Design Principles: Learn the fundamentals of layout, color, and typography.
Software Tools: Master Adobe Photoshop, Illustrator, and InDesign.
Creative Projects: Build a portfolio with real-world design tasks.
Branding: Understand how to create a cohesive brand identity.
Typography: Explore the art of using type effectively.
User-Centered Design: Focus on creating designs that resonate with your audience.
Expert Instructors: Learn from professional designers.</p>
              <a href="#" className="btn btn-outline-primary">Apply</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/robot.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Robotics</h5>
              <p className="card-text">Explore the Exciting World of Robotics!
Introduction to Robotics: Learn the basics of robots and their applications.
Mechanical Design: Understand how to build robot structures and mechanisms.
Electronics and Sensors: Explore the components that power robots.
Programming: Learn to code and control robots using languages like Python and C++.
AI and Machine Learning: Discover how to incorporate intelligence into robots.
Hands-On Projects: Engage in practical robotics challenges and projects.
Expert Instructors: Gain insights from professionals in the robotics industry.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-outline-primary">Apply</a>
            </div>
          </div>
        </div>

        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/ux.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">UI & UX Design</h5>
              <p className="card-text">Design Engaging and Intuitive User Experiences!
User Research: Learn how to gather and analyze user feedback.
Information Architecture: Understand how to organize content for optimal navigation.
Wireframing & Prototyping: Create low-fidelity designs to test concepts.
Visual Design: Develop aesthetically pleasing interfaces.
Interaction Design: Explore how to create smooth and effective user interactions.
Usability Testing: Evaluate designs to improve user experience.
Real-World Projects: Apply your skills to real-life design challenges.
Expert Mentors: Learn from experienced UI/UX designers.</p>
              <a href="#" className="btn btn-outline-primary">Apply</a>
            </div>
          </div>
        </div>

        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/cyber.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Cyber Security</h5>
              <p className="card-text">
              Protect and Secure Digital Systems!
Introduction to Cybersecurity: Learn the basics of securing information systems.
Network Security: Understand how to safeguard networks from cyber threats.
Ethical Hacking: Explore penetration testing to identify system vulnerabilities.
Data Privacy: Learn best practices for protecting sensitive data.
Cyber Threats: Study various forms of cyber attacks and how to defend against them.
Incident Response: Develop strategies for handling security breaches.
Compliance and Regulations: Understand laws and policies related to cybersecurity.
Expert Instructors: Gain insights from seasoned cybersecurity professionals.
              </p>
              <a href="#" className="btn btn-outline-primary">Apply</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home