import ItemCount from "./ItemCount"
import { useState } from "react"
import {NavLink} from "react-router-dom";
import { useCartContext } from "./CartContext";

const ItemDetail = ({listProduct}) => {

    const [isAdded, setIsAdded] = useState(false)

    const {addToCard, cartList} = useCartContext()

    const onAdd = (quantity) => {
        addToCard(listProduct, quantity)
        setIsAdded(true)
    }   
                                            console.log(cartList)
    return(
        <>
            <div className="productImgConteiner">
                <img className="imagenesDetail" src={listProduct.image} alt="imagen" />
                <div className="detailConteiner">
                    <h1 className="tittleDetail">{listProduct.product}</h1>
                    <p className="ProductDetail">{listProduct.description}</p>
                    <p className="productPrice"> ${listProduct.price} </p>
                    {
                        isAdded ? 
                        <NavLink to={"/cart"}> 
                            <button className="butCarrito">Ir al carrito</button> 
                        </NavLink>
                        :
                        <ItemCount initial={1} stock={listProduct.stock} onAdd={onAdd}/>
                    }
                    
                </div>
            </div>
        </>
        
    )
}

export default ItemDetail