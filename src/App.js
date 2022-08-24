import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Cart from "./components/Cart";
import { useCartContext } from "./CartContext";
import "./style.css"
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
                <Route path="/cart" element={<Cart/>}/>             
            </Routes>
            </div>  
        </BrowserRouter>
    )
}
export default App;