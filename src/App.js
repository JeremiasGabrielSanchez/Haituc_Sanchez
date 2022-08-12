import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import "./style.css"
import ItemDetailConteiner from "./components/ItemDetailConteiner";

function App(){
    return (
        <div className="body">
        <NavBar/>
        {/* <ItemListContainer greeting="Bienvenido a mi Tienda Online! :D"/> */}
        <ItemDetailConteiner/>
        </div>
    )
}
export default App;