import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSecPage from './HomeSecPage'
import { Carousel } from 'react-bootstrap';
import Footer from './Footer';


import NavbarList from './NavbarList';
function Home  ()  {

  return (
    <div>
      
      <Carousel className='carousel-pr'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets-global.website-files.com/5e78f62c08f1bb8c2d788576/647a71b9db559ba84ef6ac5d_product_photography_hero%20(1)%20(1).png"
          alt="First slide"
          style={{ width: '50%', height: '55%' }}
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is the first slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/www.jewelryshoot.com/wp-content/uploads/2016/10/raw-jpg-tiff.png?fit=1024%2C512&ssl=1"
          alt="Second slide"
          style={{ width: '50%', height: '46%' }}
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>This is the second slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://uploads-ssl.webflow.com/637e10f2e381024cb9fa32a0/6383fbb073b91eefb096597c_SB0018LW_White_Beach%20Scene.png"
          alt="Third slide"
          style={{ width: '50%', height: '48%', objectFit:'cover' }}
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>This is the third slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  
    

      

    

    <NavbarList/>
    <div style={{display:'flex', marginLeft:50}}>
   <HomeSecPage/>
   <HomeSecPage/>
   <HomeSecPage/>
   <HomeSecPage/>
   <HomeSecPage/>
    </div>
    <Footer/>


    </div>
  )
}

export default Home;
