import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

function CartDetails() {

    const { cartItems} = useContext(CartContext)
    const numOfCartItems = cartItems.length;
    let cartTotalPrice = 0;

    for (var i of cartItems) {
        cartTotalPrice += i.price.raw;
    }

    return (
        <div>
            <h5>Subtotal ( {numOfCartItems} item): ${cartTotalPrice}</h5>
        </div>
    );
}

export default CartDetails;
