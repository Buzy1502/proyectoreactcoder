import { useContext } from 'react';
import { Link } from "react-router-dom";
import './cart.css';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";


function CartWidget() {
  const { getQuantity } = useContext(CartContext)
  const quantity = getQuantity()

  return (
    quantity > 0
      ? (
        <Link className="cartWidget-container" to={'/cart'}>
          <FaShoppingCart className="cartIcon" />
          <span className="cartCounter">{quantity}</span>
        </Link>
      )
      : (
        <Link className="cartWidget-container" to={'/cart'}>
        <FaShoppingCart className="cartIcon" />
      </Link>
      )
  );
}
export default CartWidget;