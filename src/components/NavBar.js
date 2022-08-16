import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <header>
            <NavLink to="/">
                <h1 id="titulo"> Haituc </h1>
            </NavLink>
            <nav>             
                <NavLink to="/category/familiar">             
                    <a>Familiar</a>
                </NavLink>
                <NavLink to="/category/juguetes">             
                    <a>Juguetes</a>
                </NavLink>
                <NavLink to="/category/puzzles">             
                    <a>Puzzles</a>
                </NavLink> 

                <CartWidget/>
            </nav>
        </header>
    )
}
export default NavBar;