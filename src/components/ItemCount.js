import { useState, useEffect, lazy } from "react"
import { BiPlusCircle } from 'react-icons/bi'
import { BiMinusCircle } from 'react-icons/bi'

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial)

    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1)}
    }
    const restar = () => {
        if(contador > 0){
        setContador(contador - 1)}
    }
    
    const confirmar = () => {
        if(contador <= stock && contador !== 0){
            alert("Se agrego al carrito " + contador)
        }        
    }
    

    return (      
        <div id="onAdd">
            <p id="tituloProducto">Producto "X"</p>
            <div id="onAddInterno">
                <button id="boton" onClick={restar}><BiMinusCircle/></button>
                <p id="parrafo">{contador}</p>
                <button id="boton" onClick={sumar}><BiPlusCircle/></button>
            </div>
            <button id="botonCarrito" onClick={confirmar}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount