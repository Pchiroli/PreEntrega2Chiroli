import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="col-md-3 text-center">
      <Link to={"/item/" + item.id} className="text-decoration-none">
        <div className="card border-0">
          <img src={item.imagen} className="img-fluid" alt={item.nombre} />
          <div className="card-body">
            <p className="card-text text-center text-uppercase">
              <b>{item.nombre}</b>
              <br /><b>${item.precio}</b>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
