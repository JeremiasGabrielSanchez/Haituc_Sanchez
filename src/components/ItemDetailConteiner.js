import ItemDetail from "./ItemDetail"
import { products } from "../assets/productos"
import { useState, useEffect } from "react"
import { ImSpinner4 } from 'react-icons/im'
import { customFetch } from "../assets/customFetch"
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () => {
    
    const[listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(()=>{
        customFetch(products)
        .then(res => {
            setLoading(true)
            setListProduct(res.find(item => item.id === id))
        })
    }, [])

    return(
        <>
        <div className="logoCargando">{!loading && <ImSpinner4/>}</div>
        {loading && <ItemDetail listProduct={listProduct}/>}
        {/* {!loading ? <ItemDetail listProduct={listProduct}/> : <ImSpinner4/>} */}
        </>
    )
}
export default ItemDetailConteiner