import React from 'react'




const Home = () => {

  return (
    <>
 <div className='homi p-5 '>
        <video autoPlay muted loop id="video-background">
          <source src={'/videos/file.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container-fluid text-center gradient-overlay">
          <div className="row hom align-items-center">
            <div className="col-12 p-5 text-light learn hom">
              <h1 className='hom'>Learn today’s most in-demand skills with our free online courses</h1>
              <p className='hom text-light'>Start, switch, or advance your career with more than 6,900 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
            </div>
          </div>
          <div className='navi container'>
          <button className="cssbuttons-io-button m-5 align-items-center">
  Get started
  <div class="icon">
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</button>

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
<div>
  <center><h1 className='my-4'> Our Courses</h1></center>
</div>
      <div className='container'>
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