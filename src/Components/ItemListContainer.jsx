import arrayProductos from "./Catalog/Productos.json"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemListGroup from "./itemlist";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 2000)
        });
        
        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, [id])
    return (
        <div className="container">
                <div className="row my-5">
                    <ItemListGroup items={items} />
                </div>
            </div>
        
    )
}

export default ItemListContainer
