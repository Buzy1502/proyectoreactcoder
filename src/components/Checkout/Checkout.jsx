import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Checkout = () => {
  const [orderId, setOrderId] = useState()
  const [buyer, setBuyer] = useState({
    Nombre: "",
    Email: "",
    Telefono: ""
  })

  const { Nombre, Email, Telefono } = buyer
  const { cart } = useContext(CartContext)

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const total = cart.reduce((acum, unItem) => acum + (unItem.price * unItem.cant), 0)
    const dia = new Date()
    const data = { buyer, cart, total, dia }
    generateOrder(data)
  }

  const generateOrder = async (data) => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "Orders")
    const order = await addDoc(queryCollection, data)
    setOrderId(order.id)
  }

  return (
    <div className="bg-light p-5 m-5">
      <h1 className="text-center">Formulario Compra</h1>
      <hr />
      {!orderId &&

        <form onSubmit={handleSubmit} className="p-5 text-center">
          <input type="text"
            name="Nombre"
            placeholder='Nombre'
            value={Nombre}
            onChange={handleInputChange}
            required
          />
          <br /><br />
          <input type="email"
            name="Email"
            placeholder='Email'
            value={Email}
            onChange={handleInputChange}
            required
          />
          <br /><br />
          <input type="number"
            name="Telefono"
            placeholder='Telefono'
            value={Telefono}
            onChange={handleInputChange}
            required

          />
          <br /><br />
          <Button type="submit" variant="success">Confirmar Compra</Button>{' '}
          <Button variant="primary">
            <Link to={'/'}>Seguir comprando</Link>
          </Button>

        </form>
      }
      {orderId && <>
        <h1 className="text-center">Felicitaciones tu compra se realizo con exito</h1>
        <h3 className="text-center">Tu ID de Compra es: {orderId}</h3>
      </>}
    </div>
  )
}

export default Checkout