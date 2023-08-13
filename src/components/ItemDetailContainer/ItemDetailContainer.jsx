import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, `items`, itemId);
    getDoc(queryDoc)
      .then(res => setItem(({ id: res.id, ...res.data() })));
  }, [itemId])

  return (
    <div className='container'>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer
