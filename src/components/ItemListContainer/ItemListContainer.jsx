import './itemlistcontainer.css';


function ItemListContainer(props) {
  return (
    <div className="itemlist-container">
      <h1 className="greeting">{props.greeting}</h1>
    </div>
  )

}

export default ItemListContainer;