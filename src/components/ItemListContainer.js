import { customFetch } from "../assets/customFetch"
import { useState, useEffect } from "react"
import { products } from "../assets/productos"
import { ImSpinner4 } from 'react-icons/im';
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {

  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams("/")

  useEffect(() => {
    setLoading(false)
    customFetch(products)
      .then(data => {
          if (category) {
            setLoading(true)
            setListProducts(data.filter(producto => producto.category === category))           
          }else{
            setLoading(true)
            setListProducts(data)
          }
        })
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