import React from 'react'




const Home = () => {

  return (
    <>
<div className='homi p-5 mt-5'>
      <video autoPlay muted loop id="video-background">
        <source src={'./src/assets/videos/file.mp4'} type="video/mp4" />
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

<div className="marquee">
  <div className="marquee-content"> 
    <div className="marquee-item">
      <img src="https://via.placeholder.com/600/000000/FFFFFF/?text=01" alt=""/>
    </div>
    
    <div className="marquee-item">
      <img src="https://via.placeholder.com/600/000000/FFFFFF/?text=02" alt=""/>
    </div>
    
    <div className="marquee-item">
      <img src="https://via.placeholder.com/600/000000/FFFFFF/?text=03" alt=""/>
    </div>
    
    <div className="marquee-item">
      <img src="https://via.placeholder.com/600/000000/FFFFFF/?text=04" alt=""/>
    </div>
    
    <div className="marquee-item">
      <img src="https://via.placeholder.com/600/000000/FFFFFF/?text=05" alt=""/>
    </div>
    
    <div className="marquee-item">
      <img src="https://via.placeholder.com/600/000000/FFFFFF/?text=06" alt=""/>
    </div>
    
    <div className="marquee-item">
      <img src="https://via.placeholder.com/600/000000/FFFFFF/?text=07" alt=""/>
    </div>
    
    <div className="marquee-item">
      <img src="https://via.placeholder.com/600/000000/FFFFFF/?text=08" alt=""/>
    </div>

  </div>
</div>



    </>
  )
}

export default Home