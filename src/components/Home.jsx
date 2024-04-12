import React from 'react'




const Home = () => {

  return (
    <>
<div className='homi p-5 mt-5'>
      <video autoPlay muted loop id="video-background">
        <source src={'/videos/file.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container-fluid text-center gradient-overlay">
        <div className="row hom align-items-center">
          <div className="col-12 learn hom">
            <h1 className='hom'>Learn today’s most in-demand skills with our free online courses</h1>
            <p className='hom'>Start, switch, or advance your career with more than 6,900 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
          </div>
        </div>
      </div>
    </div>





    </>
  )
}

export default Home