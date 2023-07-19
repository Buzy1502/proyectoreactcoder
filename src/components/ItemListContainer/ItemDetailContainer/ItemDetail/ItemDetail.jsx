import ItemCount from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemDetail = ({ item }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }} id={item.id}>
            <Card.Img variant="top" src={item.image} alt={item.title} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.author}</Card.Text>
              <Card.Text>Precio: $ {item.price}</Card.Text>
              <Card.Text>Stock disponible: {item.stock}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <p>
            {item.synopsis}
            <ItemCount stockItems={item.stock} />
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail