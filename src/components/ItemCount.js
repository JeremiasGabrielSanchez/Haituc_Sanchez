import { useState} from "react"
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

    return (      
        <div id="onAdd">
                <button id="boton" onClick={restar}><BiMinusCircle/></button>
                <p id="parrafo">{contador}</p>
                <button id="boton" onClick={sumar}><BiPlusCircle/></button>
            <button className="butCarrito" onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount