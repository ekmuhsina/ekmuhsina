import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ProductsDataType } from "@/utils/classes";
import { ProductsService } from "../../services/products-service";
import OnAddToCart from "../add-to-cart/OnAddToCart";

function CartProductRecommendation() {
  const [products, setProducts] = useState<ProductsDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const getProducts = await ProductsService.getProducts();
        setProducts(getProducts);
      } catch (error: any) {
        console.error("Error fetching products:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div
        className="spinner-border text-info p-4 fs-2"
        style={{ marginLeft: "40%", marginTop: "50%" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching products. Please try again later.</div>;
  }

  //removing tags from product details
  function removeTags(input: string) {
    return input.replace(/<\/?[^>]+(>|$)/g, "");
  }

  return (
    <div>
      {products.map((p) => {
        const productDetails = removeTags(p.description);
        return (
          <div
            key={p.id}
            className="row justify-content-around border-bottom pb-4 mb-4"
          >
            <Link href={"/product/" + p.id} className="col-2 p-1 mt-2">
              <img
                src={p.image.url}
                width={60}
                height={60}
                className="img-fluid rounded-start p-0"
                alt={p.name}
              />
            </Link>
            <div className="col-5">
              <div className="card-body">
                <Link
                  href={"/products/" + p.id}
                  className="card-title mb-1 text-primary fw-bold text-decoration-none overflow-y-hidden"
                  style={{ fontSize: "15px", height: "40px" }}
                >
                  {p.name}
                </Link>
                <p
                  className="card-text text-secondary overflow-hidden"
                  style={{ height: "60px", fontSize: "14px" }}
                >
                  {productDetails}
                </p>
              </div>
            </div>

            <div className="col-3 me-0 pe-0 row align-content-start justify-content-end">
              <h6
                className="text-danger col-12 text-center mb-1"
                style={{ fontSize: "16px" }}
              >
                ${p.price.raw}
              </h6>
              <span
                className="text-bg-danger p-2 mt-2 text-center rounded-2 col-12"
                style={{ fontSize: "12px" }}
              >
                50% offer
              </span>
              <OnAddToCart prodId={p.id} prodQuantity={1} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartProductRecommendation;
