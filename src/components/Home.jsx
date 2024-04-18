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
          <div className='navi'>
            <div className='btn btn-outline-primary m-5'>
                Get started
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
<div>
  <center><h1 className='my-4'>Courses offered in Edufy</h1></center>
</div>
      <div className='container'>
      <div className='row'>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/webdev.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-outline-primary">Apply</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/data.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Data Analytics</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-outline-primary">Apply</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/graphic.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Graphic Design</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-outline-primary">Apply</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/robot.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Robotics</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-outline-primary">Apply</a>
            </div>
          </div>
        </div>
        <div className='col-md-4 mb-4'>
          <div className="card">
            <img src="/images/cyber.webp" className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">Cyber Security</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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