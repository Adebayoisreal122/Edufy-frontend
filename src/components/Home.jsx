import React from 'react'


const Home = () => {


  // useEffect(() => {
  //   const carouselElement = document.getElementById('carouselExampleAutoplaying');
  //   const carousel = new window.bootstrap.Carousel(carouselElement, {
  //     interval: 2000 // Change interval to 2000 milliseconds (2 seconds)
  //   });
  // }, []);

  return (
    <>
<div className='homi p-5 mt-5'>
  <div className="container-fluid hom text-center">
    <div className="row hom align-items-center">
      <div className="col-lg-6 col-md-12 col-sm-12 hom">
        <h1 className='hom'>Learn today’s most in-demand skills with our free online courses</h1>
        <p className='hom'>Start, switch, or advance your career with more than 6,900 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 hom">
      <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./src/assets/images/learnweb.png" style={{height: 400}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./src/assets/images/backEdufy.jpg" style={{height: 400}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./src/assets/images/mine.png" style={{height: 400}} className="d-block  w-100" alt="..."/>
    </div>
  </div>
</div>
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