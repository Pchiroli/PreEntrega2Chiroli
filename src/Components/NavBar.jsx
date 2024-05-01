import { Link, NavLink } from "react-router-dom";
import logo from "../assets/image/logopng.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row color-header">
        <div className="col-2 d-flex align-items-center justify-content-start">
          <Link to={"/"}>
            <img src={logo} alt="LogoPB" width={80} />
          </Link>
        </div>
        <div className="col-8 dancing-script-tittle text-center py-3 p-5">
          <h1>Pienso Bonito</h1>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-end">
            <CartWidget />
        </div>
      </div>
      <div className="row bg-dark">
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={"/"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/calza"}>
                Calzas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Buzo"}>
                Buzos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Campera"}>
                Camperas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Remera"}>
                Remeras
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
