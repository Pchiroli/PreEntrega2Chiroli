import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({ items }) => {
  const {addItem} = useContext(CartContext);
  const onAdd = (quantity) => {
      addItem(items, quantity);
      //console.log("agregaste " + quantity + " productos");
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-2">
          <img src={items.imagen} className="img-fluid" alt={items.nombre} />
        </div>
        <div className="col-md-4">
          <h1 className="fs-3 text-uppercase fw-semibold">{items.nombre}</h1>
          <p className="fs-4 fw-bold">${items.precio}</p>
          <p className="small">{items.descripcion}</p>
          <ItemCount stock={items.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
