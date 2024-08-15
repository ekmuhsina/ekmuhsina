import { useContext } from "react";
import ProductContext from "../../../contexts/ProductContext";
import Style from "../product-card/ProductsCard.module.css";
import { useNavigate } from "react-router-dom";

function ProductCard() {

  //destructuring product context
  const { filterProducts, prodLoading } = useContext(ProductContext);
  //navigate for product list page
  const navigate = useNavigate()
  
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

  
  
  return (
    <div className="d-flex flex-wrap flex-row gap-3 justify-content-center pt-5 pb-5" style={{ backgroundColor: "#ebfafb" }}>
      {
        filterProducts.map((p) => {
          return (
            <button onClick={() => {
              navigate("/products/" + p.id)
            }} key={p.id} type="button" style={{ outline: "none", border: "none", padding: "0px", borderRadius: "10px" }} > <div className={Style.card}>
                <img src={p.image.url} alt={p.name} className={Style.prodImg} />
                <span className={Style.catgory}>{p.categories.name}</span>
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
          )
        })
      }
    </div >
  )
}
export default ProductCard;