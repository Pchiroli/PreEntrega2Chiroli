import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, clear, getCountProducts, getSumProducts } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cpostal, setCpostal] = useState("");
  const [buyOrderId, setBuyorderId] = useState("");

  const generateOrder = () => {
    if (nombre == "" || email == "" || telefono == "" ) {
    return false;
  }
  const buyer = {
    nombre:nombre,
    email:email,
    telefono:telefono,
    cpostal:cpostal};
  const items = cart.map((items) => ({
    id:items.id,
    title:items.nombre,
    price:items.precio
  }));
  const date = new Date();
  const currentDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const buyOrder = {
    buyer:buyer,
    items:items,
    date:currentDate,
    total: getSumProducts()};

  //Desde aca cargo una nueva orden de compra a la coleccion
  const database = getFirestore();
  const ordersCollection = collection(database, "buyorders");
  addDoc(ordersCollection, buyOrder).then(data => {
    setBuyorderId(data.id);
    setNombre("");
    setEmail("");
    setTelefono("");
    setCpostal("");
    clear();
  });
  }
  if (getCountProducts() === 0 && !buyOrderId) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <h3>No tienes productos en tu carro!</h3>
            <Link to={"/"} className="btn text-white bd-dark rounded-0 my-5">Volver a la pagina principal</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setNombre(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">telefono</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setTelefono(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Codigo postal</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setCpostal(event.target.value);
                }}
              />
            </div>

            <button
              type="button"
              className="btn text-white bg-black"
              onClick={generateOrder}>Confirmar compra </button>
          </form>
        </div>
        <div className="col">
          <table className="table">
            <tbody>
              {cart.map((items) => (
                <tr key={items.id}>
                  <td> <img src={items.imagen} alt={items.nombre} width={80} /></td>
                  <td>{items.nombre}</td>
                  <td className="text-end">${items.precio}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}>
                  <b>Total a pagar</b>
                </td>
                <td className="text-end">
                  <b>${getSumProducts()}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row my-5">
        <div className="col text-center">
          {buyOrderId ? (
            <div className="alert alert-light" role="alert">
              Felicitaciones! Tu ID de Compra es: <b>{buyOrderId}</b>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
