import { customFetch } from "../assets/customFetch"
import { useState, useEffect } from "react"
import { products } from "../assets/productos"
import { ImSpinner4 } from 'react-icons/im';
import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    customFetch(products)
      .then(data => {
        setLoading(true)
        setListProducts(data)})
  }, [])

  return (
    <>
      <h1>{greeting}</h1>
      <div className="logoCargando">{!loading && <ImSpinner4/>}</div>
      <ItemList listProducts={listProducts}/>
    </>
  )
}
export default ItemListContainer