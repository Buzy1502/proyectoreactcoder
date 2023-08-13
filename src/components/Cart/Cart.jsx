import './cart.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa'
import CatImage from './CartImage';
import { CartContext } from "../context/CartContext";
import Button from 'react-bootstrap/Button';

const Cart = () => {
  const { cart, removeItem, clearCart, getQuantity, addQuantity, lessQuantity } = useContext(CartContext);

  let prodInCart = getQuantity();

  console.log("hay", prodInCart, "en el carrito");

  return (
    <div className="cartView">
      {cart.length === 0 ? (
        <div className="cartEmpty
          d-flex flex-column
          mx-5 mt-5 p-3
          justify-content-center
          align-items-center
          border border-secondary border-2 rounded
          bg-light
          "
        >
          <h1 className="text-center mt-3">No hay michis en el carrito!</h1>
          <Link className="btn btn-primary mt-3" size='lg' to="/">Ir al inicio</Link>
          <div className='p-3' >
            <CatImage />
          </div>
        </div>
      ) : (
        <div className="cart">

          <table className="tableCart">
            <thead>
              <tr>
                <th />
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th />
              </tr>
            </thead>

            <tbody style={{ textTransform: "uppercase" }}>
              {cart.map((product) => (
                <tr key={product.id} className="rowProd">
                  <td className="imgContainer">
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: 215, height: 150 }}
                    ></img>
                  </td>

                  <td>{product.title}</td>
                  <td>$ {product.price}</td>

                  <td className="btnTableCount">
                    <Button
                      variant="secondary"
                      disabled={product.quantity <= 1}
                      onClick={() => lessQuantity(product.id)}
                    >
                      {" "}-{" "}
                    </Button>

                    {" "}{product.quantity}{" "}

                    <Button
                      variant="primary"
                      disabled={product.quantity >= product.stock}
                      onClick={() => addQuantity(product.id)}
                    >
                      {" "}+{" "}
                    </Button>
                  </td>

                  <td>$ {product.price * product.quantity}</td>
                  <td>
                    <button onClick={() => removeItem(product.id)} className="btn btn-eliminar"><FaTrashAlt /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cartFooter text-center">
            <h3>Total: ${" "} {cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</h3>
            <Button variant="danger" onClick={clearCart} className='me-2'>Vaciar carrito</Button>
            <Button variant="success" onClick={clearCart} className='me-2'>
              <Link to="/checkout">Finalizar compra</Link>
            </Button>
            <Button variant="primary">
              <Link to='/'>Seguir comprando</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart