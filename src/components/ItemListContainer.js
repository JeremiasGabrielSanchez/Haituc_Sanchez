import { useState, useEffect } from "react"
import { ImSpinner4 } from 'react-icons/im';
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

import { db } from "../assets/ItemCollection";
import {collection, getDocs} from "firebase/firestore";


const ItemListContainer = ({greeting}) => {
  
  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams("/")
  
  useEffect(() => {
    
    setLoading(false)
    const productsCollection = collection(db, "Products")
    const consulta = getDocs(productsCollection)

    consulta
      .then(snapshot => {
          if (category) {
            setLoading(true)

            const prod = snapshot.docs.map(doc => {
              return {
                ...doc.data(),
                id: doc.id
              }      
            })
            setListProducts(prod.filter(producto => producto.category === category))         
          }else{
            setLoading(true)

            const prod = snapshot.docs.map(doc => {
              return {
                ...doc.data(),
                id: doc.id
              }      
            })
            setListProducts(prod)
          }
        })
    .catch(err => {console.log(err)})
  }, [category])

  return (
    <>
      <h1>{greeting}</h1>
      <div className="logoCargando">{!loading && <ImSpinner4/>}</div>
      {loading && <ItemList listProducts={listProducts}/>}
    </>
  )
}
export default ItemListContainer