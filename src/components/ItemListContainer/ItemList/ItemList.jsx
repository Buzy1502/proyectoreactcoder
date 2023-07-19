import React from 'react'
import Item from '../ItemDetailContainer/Item/Item'
import './ItemList.css'

function ItemList({ item }) {
  return (
    <div className='itemList'>
      {
        item.map(item =>
          <div className='book-container'
            key={item.id}>
            <Item item={item} />
          </div>
        )
      }
    </div>
  )
}

export default ItemList
