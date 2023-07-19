import './itemlistcontainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemListContainer/ItemList/ItemList'
import mock from '../../mock.json'

function ItemListContainer({ greeting }) {

  const [item, setItem] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {

    const getItems = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(categoryId ? mock.filter(item => item.category === categoryId) : mock)
          }, 500);
        });
        setItem(data)
      } catch (error) {
        console.log(error)
      }
    };

    getItems()

  }, [categoryId])

  return (
    <>
      <h1 className="greeting">{greeting}</h1>
      <div className='itemlist-container'>
        <ItemList item={item} />
      </div>
    </>
  )

}

export default ItemListContainer;