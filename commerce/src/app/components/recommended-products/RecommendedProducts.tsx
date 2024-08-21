import React, { useState, useEffect } from "react";
import ProductCard from "../product-card/ProductCard";
import { ProductsDataType } from "@/utils/classes";
import { ProductsService } from "../../services/products-service";

export default function RecommendedProducts() {
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
        className="spinner-border text-info p-2 fs-4"
        style={{ margin: "10% 0% 10% 50%" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching products. Please try again later.</div>;
  }
  return (
    <div className="d-flex overflow-auto">
      {products.map((p) => {
        return <ProductCard key={p.id} products={p} />;
      })}
    </div>
  );
}
