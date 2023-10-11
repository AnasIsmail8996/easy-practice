import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram , FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <p style={{marginTop:'-5%'}}>&copy; {new Date().getFullYear()} Pluton</p>
        <ul style={footerLinksStyle}>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      
      <Container>
      <Row>
        
        <Col className='para-two'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          
           
        </Col>
        <Col className='para-two'> 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s 
        </Col>
      </Row>
      <Row>
        
        <Col className='links-icons'>
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
        </Col>
      </Row>
    </Container>

    
    </footer>

   
     
    </>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
 
};

const footerLinksStyle = {
  listStyle: 'none',
  padding: 25,
  display: 'flex',
  flexDirection:'column'
};

export default Footer;
