import { Link } from "react-router-dom";

const itemCars = ({ item }) => {
  return (
    <div className="col-md-3 text-center">
      <Link to={"/item/" + item.id} className="text-decoration-none">
        <div className="card border-0">
          <img src={item.imagen} className="img-fluid" alt={item.nombre} />
          <div className="card-body">
            <p className="card-text text-center text-uppercase">
              <b>{item.nombre}</b>
              <br />${item.precio}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default itemCars;
