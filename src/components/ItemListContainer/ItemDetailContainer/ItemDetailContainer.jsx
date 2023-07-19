import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail/ItemDetail"
import mock from '../../../mock.json'


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mock.find(item => item.id === parseInt(itemId)))
      }, 500)
    });
    promesa.then((data) => {
      setItem(data)
    })
  }, [itemId])

  return (
    <div className='container'>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer
