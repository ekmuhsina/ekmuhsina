import ProductCard from "./product-card/ProductsCard";

function ProductList() {
    return (

        

            <div className="d-flex flex-wrap flex-row gap-3 justify-content-center  p-4" style={{ backgroundColor: "#ebfafb" }}>
                <ProductCard />
            </div>
    );
}

export default ProductList;