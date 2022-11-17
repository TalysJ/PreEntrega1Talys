import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return(
            <>
                <p>Aun no agregas nada al carrito</p>
                <Link to='/'>Volver al menu</Link>
            </>
        );

    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>
                total: {totalPrice()}
            </p>
        </>
    ) 
}

export default Cart