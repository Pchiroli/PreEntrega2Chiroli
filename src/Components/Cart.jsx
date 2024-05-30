import { Link } from "react-router-dom";
import tarro from "../assets/image/trash-fill.svg"
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, removeItem, clear, getCountProducts, getSumProducts} = useContext(CartContext);

    if (getCountProducts() == 0) {
        return( 
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h2>No hay productos en el carrito!!!</h2>
                        <Link to={"/"} className="btn text-white bg-dark rounded-0 my-5">Volver a la pagina principal</Link>
                    </div>
                </div>
            </div>
        )
    }
    
    return (  
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn text-white bg-dark rounded-0" onClick={clear}>Vaciar carrito</button></td>
                            </tr>
                            {cart.map(items => (
                                <tr key={items.id}>
                                    <td><img src={items.imagen} alt={items.nombre} width={100} /></td>
                                    <td className="align-middle text-star">{items.nombre}</td>
                                    <td className="align-middle text-center">${items.precio}</td>
                                    <td className="align-middle text-center">{items.quantity}</td>
                                    <td className="align-middle text-center">${items.quantity * items.precio}</td>
                                    <td className="align-middle text-end"><img src={tarro} width={20} alt="eliminar producto" title="Eliminar Producto" onClick={() => {removeItem(items.id)}} /></td>
                                    
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4} className="text-center"><b>Total a pagar</b></td>
                                <td className="text-center"><b>${getSumProducts()}</b></td>
                                <td className="text-end"><Link to={"/Checkout"} className="btn text-white bg-dark rounded-0">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      )}
export default Cart ;