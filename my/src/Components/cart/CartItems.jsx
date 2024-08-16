import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";

function CartItems() {
    const { cartLoading, cartItems, setCartProducts } = useContext(CartContext)
    const [isRemoveMessageVisible, setIsRemoveMessageVisible] = useState(false);

   // Remove cart item
const removeCartItem = async (prodId) => {
    try {
      const response = await fetch(`https://api.chec.io/v1/carts/cart_NqKE50W6KDodgB/items/${prodId}`, {
        method: "DELETE",
        headers: {
          "X-Authorization": "pk_test_55982218be093976893bea0f4541e4bd01b6cf8e8db1e",
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          cart_id: "cart_NqKE50W6KDodgB",
          id: prodId
        })
      });
  
      // Show the remove success message
      setIsRemoveMessageVisible(true);
  
      // Fetch updated cart data
      const data = await response.json();
      setCartProducts(data);
    } catch (error) {
      console.error('Error removing item from the cart', error);
    } finally {
      setTimeout(() => {
        setIsRemoveMessageVisible(false);
      }, 2000);
    }
  };
  


    // Render UI based on loading and productDetail
    if (cartLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "53vh" }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="w-100">
            {isRemoveMessageVisible && (
                <div className="text-bg-danger p-3 rounded-5 position-fixed z-3" style={{right: "1%", top: "10%"}}>
                    Item removed successfully
                </div>
            )}
            {cartItems.length !== 0 ? (
                cartItems.map((p) => (
                    <div key={p.id} className="row col-12 g-0 justify-content-around border-bottom pb-4 mb-4">
                        <Link to={"/product/" + p.id} className="col-2">
                            <img src={p.image.url} width={200} className="img-fluid rounded-start" alt={p.name} />
                        </Link>
                        <div className="col-5">
                            <div className="card-body">
                                <Link to={"/products/" + p.id} className="card-title fs-4 mb-3 text-primary fw-bold text-decoration-none">{p.name}</Link>
                                <div className="col-3 row mt-2">
                                    <h2 className="text-danger col-12 ">${p.price.raw}
                                        <span className="badge text-bg-danger rounded-pill " style={{ fontSize: "12px" }}>50% offer</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <label className="me-2 fw-medium col-12">Quantity : {p.quantity}</label>
                                <button className="btn btn-link text-start" onClick={() => {
                                    removeCartItem(p.id);
                                }}>
                                    Remove item
                                </button>
                            </div>
                        </div>
                        <div className="col-3 me-0 pe-0 row align-content-start justify-content-end">
                            <h2 className="text-danger col-12 text-end mb-1">${p.line_total.formatted}</h2>
                        </div>
                    </div>
                ))
            ) : (
                <p>No items in the cart.</p>
            )}
        </div>
    );

}

export default CartItems;