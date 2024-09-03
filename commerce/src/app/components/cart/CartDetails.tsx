import React from "react";

function CartDetails(props:any) {
    const { cartItems } = props;
    const numOfCartItems = cartItems.length;
    let cartTotalPrice = 0;
    
    for (const i of cartItems) {
        cartTotalPrice += i.line_total.raw;
    }

    return (
        <div>
            <h5>Subtotal ( {numOfCartItems} item): ${cartTotalPrice}</h5>
        </div>
    );
}   

export default CartDetails;
