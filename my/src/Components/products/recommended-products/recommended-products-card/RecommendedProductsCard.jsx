import Style from "./RecommendedProductsCard.module.css";
import { useContext } from "react";
import ProductContext from "../../../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {

    //import product data from productcontext
    const { products } = useContext(ProductContext)

  //navigate for product list page
  const navigate = useNavigate()
  
  return (
    <div className="d-flex flex-row overflow-x-scroll" style={{ backgroundColor: "#ebfafb", scrollBehavior: "smooth"}}>
      {
        products.map((p) => {
          return (
              <button onClick={()=>{
                navigate("/products/" + p.id)
              }} key={p.id} type="button" style={{outline: "none", border: "none", padding:"0px"}} > <div className={Style.card}>
                <img src={p.image.url} alt={p.name} className={Style.prodImg} />
                <span className={Style.title}>{p.name}</span>
                <span className={Style.prodOffer}>Save 50 %</span>
                <div className={Style.priceConatiner}>
                  <sup>$</sup>
                  <span className={Style.prodPrice}>{p.price.raw}</span>
                  <span className={Style.priceDetl}>
                    <strike>${parseInt(p.price.raw + (p.price.raw * 50 / 100))}</strike>
                  </span>
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