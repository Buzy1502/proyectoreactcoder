import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addItem = (itemToAdd) => {
    if (!isInCart(itemToAdd.id)) {
      setCart([...cart, itemToAdd])
    } else {
      const cartUpdated = cart.map(item => {
        if (item.id === itemToAdd.id) {
          const itemUpdated = { ...item, quantity: itemToAdd.quantity }
          return itemUpdated
        } else {
          return item
        }
      })

      setCart(cartUpdated)
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const removeItem = (id) => {
    const newCartWithoutItem = cart.filter(item => item.id !== id)
    setCart(newCartWithoutItem)
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  const getQuantity = () => {
    let accu = 0

    cart.forEach(item => {
      accu += item.quantity
    })

    return accu
  }

  const getTotal = () => {
    let accu = 0

    cart.forEach(item => {
      accu += item.quantity * item.price
    })

    return accu
  }

  const getProductQuantity = (id) => {
    const item = cart.find(item => item.id === id)

    return item?.quantity
  }

  const addQuantity = (id) => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        const productoActualizado = { ...item, quantity: item.quantity < item.stock ? item.quantity + 1 : item.quantity = item.stock }

        return productoActualizado
      } else {
        return item
      }
    }
    )
    setCart(newCart)
  }
  const lessQuantity = (id) => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        const productoActualizado = { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity = 1 }
        return productoActualizado
      } else {
        return item
      }
    }
    )
    setCart(newCart)
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart,
      addQuantity,
      lessQuantity,
      addItem,
      getQuantity,
      isInCart,
      removeItem,
      clearCart,
      getProductQuantity,
      getTotal,
    }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider