import React from 'react'
import NavbarList from './NavbarList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
function Contact  ()  {
  return (
    <div>

<Container className='mt-5'>
      <Row>
        <Col md={4}><h1>Contact  US</h1></Col>
        <Col md={{ span: 4, offset: 4 }} style={{marginTop:20}}> <h1>Let's Contact  US</h1></Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 3 }}><img src='https://t3.ftcdn.net/jpg/05/94/99/76/360_F_594997676_ERuTR88BO1Tofs1XGefpkRSfnbK4EZ5c.jpg  ' 
       style={{width:250, marginTop:25   }} alt='Rating-image'/></Col>
        <Col md={{ span: 3, offset: 3 }}>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Name :</Form.Label>
        <Form.Control type="text" placeholder="Your Name" />
        <Form.Label>Your Email :</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message Us</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button variant="info" style={{marginTop:10, }}>Submit</Button>
      </Form.Group>
    </Form>



        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 1 }} style={{marginTop:-25  }}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries,
              but also the leap into electronic typesetting, 
              remaining essentially unchanged.
               It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Col>
      </Row>
    </Container>




        <NavbarList/>
        <Footer/>
    </div>
  )
}

export default Contact;






    
