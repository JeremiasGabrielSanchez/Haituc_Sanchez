import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import "./style.css"

function App(){
    return (
        <>
            <NavBar/>
            <ItemListContainer greeting="Bienvenido a mi Tienda Online! :D"/>
        </>
    )
}
export default App;