import './itemlistcontainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { FaCat } from "react-icons/fa";


function ItemListContainer({ greeting }) {

  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  const getData = async (category) => {
    const querydb = getFirestore();
    const queryCollection = category
      ? query(collection(querydb, 'items'), where("category", "==", category))
      : collection(querydb, 'items');

    const results = await getDocs(queryCollection)
    const data = results.docs.map(p => ({ id: p.id, ...p.data() }))
    setItems(data)
  }
  useEffect(() => {
    getData(categoryId)
  }, [categoryId])

  return (
    <>
      <h1 className="greeting">
        <FaCat />{" "}  
        {greeting}
      </h1>
      <div className='itemlist-container'>
        <ItemList item={items} />
      </div>
    </>
  )

}

export default ItemListContainer;