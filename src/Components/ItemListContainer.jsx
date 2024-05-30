import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./itemlist";
import Loading from "./Loading";



const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const database = getFirestore();
    const itemsCollection = collection(database, "items");
    const queryCollection = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
    getDocs (queryCollection).then(snapShot => {
      if (snapShot.size > 0) {
        setItems(snapShot.docs.map(items => ({id:items.id, ...items.data()})));
        setVisible(false);
      }});
    }, [id]);
  

   /*  useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection (db, "items");
      getDocs(itemsCollection).then(snapShot => {
          if (snapShot.size > 0) {
              setItems(snapShot.docs.map (item => ({id:item.id, ...item.data()})));
          
          }
      });
  }, []); */


  return (
    <div className="container">
      <div className="row my-5">
        {visible ? <Loading /> : <ItemList items={items} />}  
       {/* <ItemList items={items} /> */}
       {/*  <p>{items.nombre}</p>
        <p><img src={items.imagen} alt={items.nombre} /></p>
        <p>${items.precio}</p> */}
      </div>
    </div>
  );
};

export default ItemListContainer;