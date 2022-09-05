import { useCartContext } from "./CartContext";
import { MdCancel } from 'react-icons/md';
import Usuario from "./usuario";

const Cart = () => {
    
    const {totalPrice, cartList, removeProduct, cleanCart} = useCartContext()   

    return (
        <>
        {cartList.map(prod => 
        <div className="contCart" key={prod.id}>
            <img className="imgCart" src={prod.image} alt=""/>
            <div>
                <h2 className="tittleCart">{prod.product}</h2>
                <p className="quantity">Cantidad: {prod.quantity}</p>
            </div>
            <button className="butRemove" onClick={()=>removeProduct(prod.id)}><MdCancel/></button>
        </div>
        )}
        {cartList.length === 0 ? 
            <h1 className="tittleCartVacio">Carrito Vacío</h1> 
            :
            <>
            <div className="contTotal">
                <h2> Total: ${totalPrice()}</h2>
            </div>
            <button className="vaciarCart" onClick={cleanCart}> Vaciar Carrito </button>
            <Usuario/>
            </>
        }
        </>
    )
}

export default Cart