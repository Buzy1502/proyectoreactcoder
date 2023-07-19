import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({ stockItems, initial = 1 }) => {
  const [counter, setCounter] = useState(initial)

  const incrementCounter = () => {
    counter !== stockItems && setCounter(counter + 1)
  }

  const decrementCounter = () => {
    counter !== initial && setCounter(counter - 1)
  }

  return (
    <div className="counter-container">
      <h3 className="counter-num">cantidad: {counter}</h3>
      <Button variant="secondary" disabled={counter <= initial} onClick={decrementCounter}>remove</Button>{' '}
      <Button variant="primary" disabled={counter >= stockItems} onClick={incrementCounter}>add</Button>{' '}
      <Button variant="success">add to cart</Button>
    </div>
  )
}

export default ItemCount
