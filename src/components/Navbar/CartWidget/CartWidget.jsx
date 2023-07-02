import './cart.css';
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <div className="cartWidget-container">
      <FaShoppingCart className="cartIcon"/>
      <span className="cartCounter">1</span>
    </div>
  );
}
export default CartWidget;