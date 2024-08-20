"use client";
import { ProductsService } from "@/app/services/products-service";
import React, { useEffect, useState } from "react";
import { ProductsDataType } from "@/utils/classes";
import GoToBack from "@/app/components/buttons/GoToBack";
import ProductRating from "@/app/components/product-rating/ProductRating";
import DownArrow from "../../../../public/chevron-down.svg";
import OnAddToCart from "@/app/components/add-to-cart/OnAddToCart";
import RecommendedProducts from "@/app/components/recommended-products/RecommendedProducts";
import Image from "next/image";

export default function ProductDetail(props: any) {
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<ProductsDataType | undefined>();
  const productId: string = props.params.productId;
  let productDetails: string | undefined = "";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const getProduct = await ProductsService.getProductById(productId);
        setProduct(getProduct);
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
        className="row justify-content-center gap-3 pt-5"
        style={{ backgroundColor: "#ebfafb" }}
      >
        <div className="col-4 bg-white p-5 rounded-3 shadow align-baseline min-vh-100"></div>
        <div className="col-7 bg-white p-5 rounded-3 shadow d-flex align-items-end min-vh-100"></div>
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

  productDetails = product ? removeTags(product.description) : "null";

  return (
    <div style={{ backgroundColor: "#ebfafb" }} className="pt-2">
      <div className="container-fluid p-5 pt-5 shadow">
        <div className="mt-2">
          <GoToBack />
        </div>
        {product && (
          <div className="row justify-content-center gap-3">
            <div className="col-4 bg-white p-5 rounded-3 shadow align-baseline">
              <img
                src={product.image.url}
                width={500}
                height={600}
                alt="Product"
                className="product-img"
                style={{ objectFit: "scale-down" }}
              />
            </div>
            <div className="col-7 bg-white p-5 rounded-3 shadow d-flex align-items-end">
              <div className="card border-0">
                <div className="card-body ">
                  <h1 className="card-title mb-4">{product.name}</h1>
                  <p className="card-text fs-5 opacity-75 mb-5">
                    {productDetails}
                  </p>
                  <h4 className="text-primary mb-4">
                    {product.categories[0].name}
                  </h4>
                  <div className="d-flex mb-2 align-items-center">
                    <div className="me-2">{<ProductRating rate={4} />}</div>
                    <Image
                      src={DownArrow}
                      className="me-2"
                      width={15}
                      height={20}
                      alt="DownArrow"
                    />
                    <span className="text-success fw-bold">{500}</span>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <div className="text-danger fs-2 fw-bold ">
                      ${product.price.raw}
                    </div>
                    <div className="ms-3 fs-4 text-decoration-line-through text-secondary fw-medium me-3">
                      {product.price.raw + (product.price.raw * 10) / 100}
                    </div>
                    <span className="text-bg-primary ps-2 pe-2 rounded-3">
                      10% Off
                    </span>
                  </div>
                  <div className="col-12 mt-1">
                    <div className="d-flex align-items-center pt-3 gap-3">
                      <select
                        className="rounded-2 ps-2 border-2 mt-1 p-1"
                        style={{ width: "10%" }}
                        value={quantity}
                        onChange={($e) =>
                          setQuantity(parseInt($e.target.value))
                        }
                      >
                        {[...Array(10).keys()].map((value) => (
                          <option key={value} value={value + 1}>
                            {value + 1}
                          </option>
                        ))}
                      </select>

                      <OnAddToCart
                        prodId={product.id}
                        prodQuantity={quantity}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="ms-5 mt-3 me-5 p-2 rounded-3 shadow bg-white">
          <h3 className="ms-4 pt-3 ">Recommended Products</h3>
          <RecommendedProducts />
        </div>
        <div className="ms-5 mt-3 me-5 p-2 rounded-3 shadow bg-white">
          <h3 className="ms-4 pt-3">Similar Products</h3>
          <RecommendedProducts />
        </div>
        <div className="ms-5 mt-3 me-5 p-2 rounded-3 shadow bg-white">
          <h3 className="ms-4 pt-3">More Items</h3>
          <RecommendedProducts />
        </div>
      </div>
    </div>
  );
}
