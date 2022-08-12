
const ItemDetail = ({listProduct}) => {

    return(
        <>
            <div className="productImgConteiner">
                <img className="imagenesDetail" src={listProduct.image} alt="imagen" />
                <div className="detailConteiner">
                    <h1 className="tittleDetail">{listProduct.product}</h1>
                    <p className="ProductDetail">{listProduct.description}</p>
                    <p className="productPrice"> ${listProduct.price} </p>
                    <button className="butCarrito" onClick={()=>{console.log("carrito")}}>Agregar al Carrito</button>
                </div>
            </div>
        </>
        
    )
}

export default ItemDetail