import ItemCount from "../ItemCount/ItemCount"
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";

const ItemDetail = ({ item }) => {

  const { id, title, author, stock, synopsis, price, image } = item
  
  const [quantityToAdd, setQuantityToAdd] = useState(0)
  const { addItem, getProductQuantity } = useContext(CartContext)

  console.log(quantityToAdd)

  const handleOnAdd = (quantity) => {
    console.log('agregue al carrito', {quantity})

    setQuantityToAdd(quantity)

    const productToAdd = { id, title, price, quantity, image, stock }

    addItem(productToAdd)

  }

  const productQuantity = getProductQuantity(id)

  return (
    <Container className="itemDetail-container bg-light mt-5 p-3">
      <Row>
        <Col>
          <Card style={{ width: '18rem' }} id={id}>
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{author}</Card.Text>
              <Card.Text>Precio: $ {price}</Card.Text>
              <Card.Text>Stock disponible: {stock}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div className="pt-5">
            {synopsis}
            <ItemCount stockItems={stock} onAdd={handleOnAdd} initial={productQuantity}/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail