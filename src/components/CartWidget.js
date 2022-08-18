import { ImCart } from "react-icons/im"
import {NavLink} from "react-router-dom";

const CartWidget = () => {
    return (
        <NavLink to={"/cart"}>
            <ImCart/>
        </NavLink>
    )
}
export default CartWidget