import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [visible, setVisible] = useState(true);
    const {id} = useParams();


    //Con esta funcion cargo el producto por id desde firestore
    useEffect(() => {
        const database = getFirestore();
        const docRef = doc(database, "items", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setVisible(false);
            }
        });
    },[id]);
    return (
        <div className="container">
            <div className="row my-5">
                {visible ? <Loading /> : <ItemDetail items={item} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer;