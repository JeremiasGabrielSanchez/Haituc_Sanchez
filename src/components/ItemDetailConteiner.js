import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from "../assets/ItemCollection";
import { ImSpinner4 } from 'react-icons/im';
import {collection, getDocs} from "firebase/firestore";
const ItemDetailConteiner = () => {
    
    const[listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(()=>{
        const productsCollection = collection(db, "Products")
        const consulta = getDocs(productsCollection)

        consulta
        .then(snapshot => {const prod = snapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
                }      
            })
            setLoading(true)
            setListProduct(prod.find(item => item.id === id))
        })
    }, [id])

    return(
        <>
        <div className="logoCargando">{!loading && <ImSpinner4/>}</div>
        {loading && <ItemDetail listProduct={listProduct}/>}
        </>
    )
}
export default ItemDetailConteiner