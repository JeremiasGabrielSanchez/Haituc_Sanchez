import { ImCart } from "react-icons/im"
import {NavLink} from "react-router-dom";
import { useCartContext } from "./CartContext";

const CartWidget = () => {

    const {totalQuantity} = useCartContext()

    return (
        <NavLink to={"/cart"}>
            <div className="cartWidget">
                <ImCart/>
                <p className="cantidadCart">{totalQuantity()}</p>
            </div>
        </NavLink>
    )
}
export default CartWidget