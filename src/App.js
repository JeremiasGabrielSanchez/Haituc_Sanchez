import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import "./style.css"
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
    return (
        <BrowserRouter>
            <div className="body">
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Bienvenido a mi Tienda Online! :D"/>}/>
                <Route path="/category/:category" element={<ItemListContainer greeting="Bienvenido a mi Tienda Online! :D"/>}/> 
                <Route path="/productos/:id" element={<ItemDetailConteiner/>}/>                 
            </Routes>
            </div>  
        </BrowserRouter>
    )
}
export default App;