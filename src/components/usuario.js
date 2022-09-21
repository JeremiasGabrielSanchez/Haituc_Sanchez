import { db } from "../assets/ItemCollection";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "./CartContext";
import {NavLink} from "react-router-dom";
import Page from "./Page";
import List from "./List";

// const usuariosCollection = collection(db, "usuario")
const Usuario = () => {
    const {cartList, totalPrice, cleanCart} = useCartContext()

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")
    const [celular, setCelular] = useState("")
    const [ordenCompra, setOrdenCompra] = useState("")
    const [btn, setBtn] = useState(false)
    const usuario = []

    const nombreCompleto = `${nombre} ${apellido}`

    const handleChangeNombre = (e) => {
        e.preventDefault()
        setNombre(e.target.value)
    }

    const handleChangeApellido = (e) => {
        e.preventDefault()
        setApellido(e.target.value)
    }

    const handleChangeEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handleChangeEmail2 = (e) => {
        e.preventDefault()
        setEmail2(e.target.value)
    }

    const handleChangeCelular = (e) => {
        e.preventDefault()
        setCelular(e.target.value)
    }

    const handleConfirm = () => {

            if(nombre === "" || apellido==="" || email === "" || celular === ""){
                alert(`Completa todos los campos`)
            }else if(celular.length === 10 && email === email2){
            const orden = {
                items: {
                    id: cartList.map(item => item.id),
                    tittle: cartList.map(item => item.product),
                    price: cartList.map(item => item.price)
                },
                buyer: {
                    name: nombreCompleto,
                    phone:celular,
                    email: email,
                    email2: email2
                },
                total: totalPrice(),
                date: serverTimestamp()
            }
            console.log(orden)

            const ordersCollection = collection(db, "orders")
            const consulta = addDoc(ordersCollection, orden)
            
            consulta
            .then((res)=>{
                    setOrdenCompra(res.id)
                })
                .catch(err => {console.log(err)})
                setBtn(true)
                
            }else{
                alert(`Numero de celular o Email incorrecto`)
            } 
            console.log(btn)
        }

    return(
        <Page>
            {!btn && <div className="ordenCompra">
            <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre}/> 
            <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido}/>
            <input type="email" placeholder="Correo electronico" onChange={handleChangeEmail} value={email}/>
            <input type="email" placeholder="Reescriba su correo" onChange={handleChangeEmail2} value={email2}/>
            <input type="number" placeholder="Celular" onChange={handleChangeCelular} value={celular} />
            </div>}
            {!btn && <button className="btnCompra" onClick={handleConfirm}>Confirmar Compra</button>}           

            {btn && <div className="ordenCompra">
                <h1 className="ordenTittle">Orden de Compra:</h1>
                <h2 className="idCompra">{ordenCompra}</h2>
            </div>}
            {btn && <NavLink to="/"><button className="btnClean" onClick={cleanCart}> Finalizar Compra </button></NavLink>}
            <List usuarios={usuario}/>
        </Page>
    )
}

export default Usuario