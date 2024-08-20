import CartContext from "../../contexts/CartContext";
import { useContext } from "react";

function ProceedToBuy() {
    const { cartItems } = useContext(CartContext)
    const numOfCartItems = cartItems.length;
    let cartTotalPrice = 0;

    for (var i of cartItems) {
        cartTotalPrice += i.price.raw;
    }

    return (
        <div className="row">
            {cartTotalPrice < 100 ? (<div className="col-12">
                <p>
                    Add <label className="text-danger"> ${(200 - (cartTotalPrice))} </label> of eligible items to your order to qualify for FREE Delivery. </p>
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