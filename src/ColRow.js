import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Footer from './Footer'
import './App.css'
function ColRow() {
  return (
    <>
    <Container>
      <Row>
        <Col>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      
        
       </Col>
        <Col> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Col>
      </Row>
      <Row>
        <Col> when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries,</Col>
        <Col className='mt-5'> but also the leap into electronic typesetting, 
        remaining essentially unchanged.</Col>
        <Col className='mt-5'>  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </Col>
      </Row>
      <Row>
        <Col>
        <h1>Team Memebers</h1>
        </Col>

      </Row>
      <Row>
        <Col>
       


    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-card' variant="top" src="https://img.freepik.com/premium-vector/boy-cartoon_487647-251.jpg?w=360" />
      <Card.Body>
        <Card.Title>Bhout Accha bacha hain </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  

        </Col>
        <Col>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img className='img-card' variant="top" src="https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png" />
      <Card.Body>
        <Card.Title>Tom & jerry </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Tom & Jerry</ListGroup.Item>
        <ListGroup.Item> alwyse Jelious</ListGroup.Item>
        <ListGroup.Item> disturbing others</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        
        
        <Card style={{ width: '18rem' }}>
      <Card.Img  className='img-card' variant="top" src="https://cn.i.cdn.ti-platform.com/cnapac/content/2017/showpage/ben-10/sa/showicon.png" />
      <Card.Body>
        <Card.Title>Hero Ben 10</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>   Ben 10     </ListGroup.Item>
        <ListGroup.Item>Megician hero </ListGroup.Item>
        <ListGroup.Item>Alwayse fighting</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    <div className='lg-12'>
<Row>
        <Col >
      
        </Col>
      </Row>
    </div>
    </Container>
    </>
  );
}

export default ColRow;