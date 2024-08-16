import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Style from "./CategoriesItemCard.module.css";
import ProductContext from "../../contexts/ProductContext";

const CategoriesItemCard = () => {
    const { products } = useContext(ProductContext)
    const [categoriesName, setCategoriesName] = useState([]);
    const { categoryId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategoryItems = async () => {
            try {
                const response = await fetch(
                    `https://api.chec.io/v1/categories/${categoryId}`,
                    {
                        method: "GET",
                        headers: {
                            "X-Authorization":
                                "pk_test_55982218be093976893bea0f4541e4bd01b6cf8e8db1e",
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`Error fetching product: ${response.statusText}`);
                }
                const data = await response.json();
                setCategoriesName(data.slug);
            } catch (error) {
                console.error("Error fetching product:", error.message);
            }
        };
        fetchCategoryItems();
    }, [categoryId]);
    
    //store filtered products
    const [filterCategoryProducts, setFilterCategoryProducts] = useState([])
    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            return product.categories[0].slug.includes(categoriesName);
        });
        console.log("Filtered Products:", filteredProducts);
        setFilterCategoryProducts(filteredProducts)
    }, [products, categoriesName]);

    return (
        <div className="d-flex flex-wrap flex-row gap-3 justify-content-center pt-5 pb-5" style={{ backgroundColor: "#ebfafb" }}>
            {filterCategoryProducts.length > 0 ? (
                filterCategoryProducts.map((p) => (
                    <button
                        onClick={() => {
                            navigate("/products/" + p.id);
                        }}
                        key={p.id}
                        type="button"
                        style={{ outline: "none", border: "none", padding: "0px", borderRadius: "10px" }}
                    >
                        <div className={Style.card}>
                            <img src={p.image.url} alt={p.name} className={Style.prodImg} />
                            <span className={Style.catgory}>{p.categories[0].name}</span>
                            <span className={Style.title}>{p.name}</span>
                            <span className={Style.description}>{p.description}</span>
                            <span className={Style.prodOffer}>Save 50 %</span>
                            <div className={Style.priceConatiner}>
                                <sup>$</sup>
                                <span className={Style.prodPrice}>{p.price.raw}</span>
                                <span className={Style.priceDetl}>
                                    <strike>${parseInt(p.price.raw + (p.price.raw * 50 / 100))}</strike>
                                </span>
                            </div>
                            <div className={Style.deliveryStatus}>
                                Free Delivery for Prime Members
                            </div>
                        </div>
                    </button>
                ))
            ) : (
                <p>No items in this category.</p>
            )}
        </div>
    );
};

export default CategoriesItemCard;
