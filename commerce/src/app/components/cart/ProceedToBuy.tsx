import React from "react";

function ProceedToBuy(props:any) {
    const { cartItems } = props;
    const numOfCartItems = cartItems.length;
    let cartTotalPrice = 0;

    for (const i of cartItems) {
        cartTotalPrice += i.line_total.raw;
    }

    return (
        <div className="row">
            {cartTotalPrice < 100 ? (<div className="col-12">
                <p>
                    Add <label className="text-danger"> ${(500 - (cartTotalPrice))} </label> of eligible items to your order to qualify for FREE Delivery. </p>
            </div>) : (<div className="col-12 text-success">
                <p>
                   Eligible for free delivery </p>
            </div>)


            }
            <div className="p-3 pb-1">
                <h5>Subtotal ( {numOfCartItems} item): ${cartTotalPrice}</h5>
                <button className="btn btn-primary w-100 text-white fw-medium">Proceed to Buy </button>
            </div>

        </div>
    );
}

export default ProceedToBuy;