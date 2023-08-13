import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const ItemCount = ({ stockItems, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const incrementCounter = () => {
    quantity !== stockItems && setQuantity(quantity + 1)
  }

  const decrementCounter = () => {
    quantity !== initial && setQuantity(quantity - 1)
  }

  return (
    <div className="counter-container mt-5">
      <h3 className="counter-num">cantidad: {quantity}</h3>
      <Button variant="secondary" disabled={quantity <= initial ? true : false} onClick={decrementCounter}>eliminar</Button>{' '}
      <Button variant="primary" disabled={quantity >= stockItems} onClick={incrementCounter}>agregar</Button>{' '}{''}
      <Button variant="success" onClick={() => onAdd(quantity)}>agregar al carrito</Button>{' '}
      <Button variant="primary" onClick={() => onAdd(quantity)} >
        <Link to='/cart'>Ver compra</Link>
      </Button>
    </div>
  )
}

export default ItemCount
