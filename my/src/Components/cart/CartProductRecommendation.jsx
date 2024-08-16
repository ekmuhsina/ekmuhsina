import ProductContext from "../../contexts/ProductContext";
import CartContext from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react"

function CartProductRecommendation() {

    const { products, prodLoading } = useContext(ProductContext)
    const { setCartProducts, isSuccessMessegeOnAddToCartVisible, setIsSuccessMessegeOnAddToCartVisible } = useContext(CartContext);

    // Render UI based on loading and productDetail
    if (prodLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "53vh" }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    //post to cart on add to cart
    const onAddToCart = async (prodId) => {
        try {
            const response = await fetch("https://api.chec.io/v1/carts/cart_NqKE50W6KDodgB", {
                method: "POST",
                headers: {
                    "X-Authorization": "pk_test_55982218be093976893bea0f4541e4bd01b6cf8e8db1e",
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    "id": prodId,
                    quantity: 1
                })
            });

            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`Failed to add item to the cart. Status: ${response.status}`);
            }

            // Show the add success message
            setIsSuccessMessegeOnAddToCartVisible(true);
            const data = await response.json();
            setCartProducts(data);
        } catch (error) {
            console.error('Error adding item to the cart', error);
        } finally {
            setTimeout(() => {
                setIsSuccessMessegeOnAddToCartVisible(false);
            }, 2000);
        }
    };



    return (
        <div>{
            products.map((p) => {
                return (
                    <div key={p.id} className="row justify-content-around border-bottom pb-4 mb-4">
                        {isSuccessMessegeOnAddToCartVisible && (
                            <div className="text-bg-success p-3 rounded-5 position-fixed z-3" style={{ right: "1%", top: "10%" , width: "14%"}}>
                                Item added to cart successfully
                            </div>
                        )}
                        <Link to={"/product/" + p.id} className="col-2 p-1 mt-2">
                            <img src={p.image.url} className="img-fluid rounded-start p-0" alt={p.name} />
                        </Link>
                        <div className="col-5">
                            <div className="card-body">
                                <Link to={"/products/" + p.id} className="card-title mb-1 text-primary fw-bold text-decoration-none overflow-y-hidden" style={{ fontSize: "15px", height: "40px" }}>{p.name}</Link>
                                <p className="card-text text-secondary overflow-hidden" style={{ height: "60px", fontSize: "14px" }}>{p.description}</p>
                            </div>
                        </div>

                        <div className="col-3 me-0 pe-0 row align-content-start justify-content-end">
                            <h6 className="text-danger col-12 text-center mb-1" style={{ fontSize: "16px" }}>${p.price.raw}</h6>
                            <span className="text-bg-danger p-2 mt-2 text-center rounded-2 mb-1 col-12" style={{ fontSize: "12px" }}>50% offer</span>
                            <button className="btn btn-primary mt-2" onClick={() => {
                                onAddToCart(p.id);
                            }} style={{ fontSize: "12px" }}>Add to Cart</button>
                        </div>
                    </div>
                )
            })

        }
        </div>
    );
}

export default CartProductRecommendation;