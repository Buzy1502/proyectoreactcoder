import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {

  const handleClick = e => {
    console.log(`hice click en el libro ${item.title}`)
  }

  return (
    <Link to={`/item/${item.id}`}>
      <Card style={{ width: '18rem' }} onClick={handleClick} id={item.id}>
        <Card.Img variant="top" src={item.image} alt={item.title} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.author}</Card.Text>
          <Card.Text>{item.category}</Card.Text>
          <Card.Text>Precio: $ {item.price}</Card.Text>
          <Card.Text>Stock disponible: {item.stock}</Card.Text>
          <Button variant="primary" size="lg">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Item
