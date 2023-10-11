import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const HomeSecPage = () => {
  return (


    <div>



<Card style={{ width: '15rem', border:'1px solid', display:'inline-block', marginLeft:5, marginTop:5 }}>
      <Card.Img variant="top" className='img-p'  src={'https://www.lecards.com/pub/media/catalog/product/cache/d0dc77fcf82ed39e99a2fc88a96aaa55/t/a/table-tent-cards.jpg' } />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on <br/>
            the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info">Go somewhere</Button>
        <Button variant="danger">Go Back</Button>
      </Card.Body>
    
      
    </Card>



    </div>
  )
}

export default HomeSecPage;