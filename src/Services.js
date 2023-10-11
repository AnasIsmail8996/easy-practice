import React from 'react'
import NavbarList from './NavbarList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 
import { FaInstagram , FaFacebook, FaTwitter } from "react-icons/fa";
import Footer from './Footer';

const Services = () => {
  return (
    <div>
 <Container>
      <Row>
        <Col className='col-md-4'><h1>Web <br/> Design</h1></Col>
      <Col className='col-md-8'><img src='https://media.istockphoto.com/id/1160018180/vector/freelancer-home-workplace-man-sitting-on-the-chair-working-on-the-laptop.jpg?s=612x612&w=0&k=20&c=YdLb_TBJZ6AqlyBkhLct2311smR_ZC3n1AAE60SjK24=' alt='using laptop' /> </Col>
        <Col className='col-md-4  sec-text'  >LANDING PAGE </Col>
    
      </Row>
      <Row>
        
        
        <Col className='col-md-4 para '><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              
              <Button variant="info">Learn More</Button>{' '}
              </Col>
           
      <a href="https://www.instagram.com">
    <li>
      <FaInstagram />
      
      </li>    
      </a>
              
                   
      <a href="https://www.facebook.com">
    <li>
      <FaFacebook />
      
      </li>    
      </a>
                 
      <a href="https://www.twitter.com">
    <li>
      <FaTwitter />
      
      </li>    
      </a>
            

      </Row>
    </Container>



        <NavbarList/>
        <Footer/>
    </div>
  )
}

export default Services;