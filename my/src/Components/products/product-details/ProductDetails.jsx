import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecommendedProducts from "../recommended-products/RecommendedProducts";
import CartContext from "../../../contexts/CartContext";

const ProductDetails = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const { setCartProducts, isSuccessMessegeOnAddToCartVisible, setIsSuccessMessegeOnAddToCartVisible } = useContext(CartContext);

    //store image array
    const [productImage, setProductImage] = useState()


    //fetching single product data
    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`https://api.chec.io/v1/products/${productId}`, {
                    method: "GET",
                    headers: {
                        "X-Authorization": "sk_55982ee32628f5d6e2ca37e226c8f70d356893dcdb5ba",
                    }
                });

                if (!response.ok) {
                    throw new Error(`Error fetching product: ${response.statusText}`);
                }

                const data = await response.json();
                setProductDetail(data);
                setProductImage(data.image)
            } catch (error) {
                console.error('Error fetching product:', error.message);
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, [productId]);

    //when loading page
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "53vh" }}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // Post to cart on add to cart
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

            // Parse the JSON response
            const data = await response.json();

            // Set the cart products using the parsed data
            setCartProducts(data);
        } catch (error) {
            console.error('Error adding item to the cart', error);
            // Optionally, you can handle error states or display an error message
        } finally {
            // Hide the remove message after a certain time (e.g., 2 seconds)
            setTimeout(() => {
                setIsSuccessMessegeOnAddToCartVisible(false);
            }, 2000);
        }
    };

    


    return (
        <div style={{ backgroundColor: "#ebfafb" }}>
            {isSuccessMessegeOnAddToCartVisible && (
                <div className="text-bg-success p-3 rounded-5 position-fixed z-3" style={{ right: "1%", top: "10%" }}>
                    Item added to cart successfully
                </div>
            )}
            <div className="container-fluid p-5 pt-3 shadow">
                <button className="btn bg-transparent " onClick={() => {
                    navigate(-1);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="blue" className="bi bi-arrow-left fw-bolder" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                </button>
                {
                    <div className="row justify-content-center gap-3">
                        <div className="col-4 bg-white p-5 rounded-3 shadow align-baseline">
                            {productImage !== undefined && (
                                <img src={productImage.url} width={500} height={600} alt="Product" className="product-img" style={{ objectFit: "scale-down" }} />
                            )}
                        </div>
                        <div className="col-7 bg-white p-5 rounded-3 shadow d-flex align-items-end">
                            <div className="card border-0">
                                <div className="card-body">
                                    <h1 className="card-title mb-4">{productDetail.name}</h1>
                                    <p className="card-text fs-5 opacity-75 mb-5">{productDetail.description}</p>
                                    <h4 className="text-primary mb-4">{productDetail.categories.name}</h4>
                                    <div className="d-flex align-items-baseline">
                                        <h2 className="text-danger ">${productDetail.price.raw}</h2>
                                        <strike className="fs-4 opacity-75 ms-2">${parseInt(productDetail.price.raw + (productDetail.price.raw * 40 / 100))}</strike>
                                        <span className="text-warning fw-medium ms-3">50% offer</span>
                                    </div>
                                    <div className="mt-3 align-content-center">

                                        <button onClick={() => {
                                            onAddToCart(productDetail.id);
                                        }} className="btn btn-primary ms-3 ">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
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
};

export default ProductDetails;
