import CartDetails from "./CartDetails";
import CartItems from "./CartItems";
import ProceedToBuy from "./ProceedToBuy";
import RecommendedProducts from "../products/recommended-products/RecommendedProducts";
import CartProductRecommendation from "./CartProductRecommendation";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";



function Cart() {
    const { cartItems } = useContext(CartContext)

    return (
        <div style={{ backgroundColor: "#ebfafb" }}>
            <div className="row p-5 m-0 justify-content-around" >
                <div className="col-8 gap-3">
                    <div>
                        <div className="col-12 bg-white shadow p-3 rounded-2">
                            <div className="col-12 d-flex flex-column ps-4 pe-4 border-bottom">
                                {
                                cartItems.length === 0 ? (<h3 className="mb-0">Your cart is empty</h3>) : (<h3 className="mb-0">Shopping Cart</h3>)
                                }
                                <p className="text-end me-5 mb-1 fs-5">Total Price</p>
                            </div>
                            <div className="col-12 p-5 pe-4 pb-3 border-bottom overflow-y-scroll" style={{ maxHeight: "800px" }}>
                                <CartItems />
                            </div>
                            <div className="col-12 text-end pe-5 pt-3">
                                <CartDetails />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    {cartItems.length > 0 && 

                        <div className="col-12  bg-white shadow rounded-2 p-3 mb-3">
                            <ProceedToBuy />
                        </div>}
                    <div className="col-12  bg-white shadow rounded-2 p-2">
                        <div className="col-12 border-bottom">
                            <h5>Customers who bought items in your Recent History also bought:</h5>
                        </div>
                        <div className="col p-1 pt-3 overflow-scroll overflow-x-hidden me-0" style={{ height: "700px" }}>
                            <CartProductRecommendation />
                        </div>
                    </div>
                </div>

                <div className="ms-5 mt-3 me-5 rounded-3 shadow bg-white">
                    <h2 className="ms-4 pt-3">Recommended Products</h2>
                    <RecommendedProducts />
                </div>
                <div className="ms-5 mt-3 me-5 rounded-3 shadow bg-white">
                    <h2 className="ms-4 pt-3">Similar Products</h2>
                    <RecommendedProducts />
                </div>
                <div className="ms-5 mt-3 me-5 rounded-3 shadow bg-white">
                    <h2 className="ms-4 pt-3">More Items</h2>
                    <RecommendedProducts />
                </div>
            </div>
        </div>
    );
}

export default Cart;