import CartWidget from "./CartWidget";

function NavBar(){
    return(
        <header>
            <h1 id="titulo"> Haituc </h1>
            <nav>
                <a href="#">Categoria 1</a>
                <a href="#">Categoria 2</a>
                <a href="#"><CartWidget/></a>
            </nav>
        </header>
    )
}
export default NavBar;