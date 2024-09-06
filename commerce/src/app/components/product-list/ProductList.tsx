import React, { useEffect, useState } from "react";
import ProductCard from "../product-card/ProductCard";
import { ProductsService } from "../../services/products-service";
import { ProductsDataType } from "@/utils/classes";
import ProductFilter from "../product-filter/ProductFilter";

export default function ProductList(props: any) {
  const { searchParams } = props;
  const [category, setCategory] = useState<string>("");
  const [priceFrom, setPriceFrom] = useState<number>(0);
  const [priceTo, setPriceTo] = useState<number>(1000);
  const [filterProducts, setFilterProducts] = useState<ProductsDataType[]>([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let filteredProducts;
        if (category === "" && priceFrom === 0 && priceTo === 1000) {
          filteredProducts = await ProductsService.getProducts();
        } else if (category !== "" && priceFrom === 0 && priceTo === 1000) {
          filteredProducts = await ProductsService.filterProducts(category);
        } else if (category === "" && priceFrom >= 0 && priceTo <= 1000) {
          filteredProducts = await ProductsService.filterPriceRange(
            priceFrom,
            priceTo
          );
        } else {
          filteredProducts = await ProductsService.filterCategoryAndPriceRange(
            category,
            priceFrom,
            priceTo
          );
        }

        if (searchParams) {
          const filteredProductsBySearch = filteredProducts.filter(
            (p: ProductsDataType) =>
              p.name.toLowerCase().includes(searchParams.toLowerCase())
          );
          setFilterProducts(filteredProductsBySearch);
        } else {
          setFilterProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, priceFrom, priceTo, searchParams]);

  return (
    <div>
      <div className="row m-0 position-relative">
        <div className="col-2 position-absolute bg-white h-100 border-end">
          <ProductFilter
            setCategory={setCategory}
            setPriceFrom={setPriceFrom}
            setPriceTo={setPriceTo}
          />
        </div>
        {loading ? (
          <div
            className="min-vh-100 row m-0 col-12 d-flex flex-row flex-wrap justify-content-start me-0"
            style={{
              padding: "5% 1% 2% 24%",
              backgroundColor: "#f0efeb",
              minHeight: "90vh",
            }}
          >
            <div
              className="bg-secondary opacity-25 rounded-3 p-1"
              style={{ height: "550px", width: "290px", margin: "10px" }}
            ></div>
            <div
              className="bg-secondary opacity-25 rounded-3 p-1"
              style={{ height: "550px", width: "290px", margin: "10px" }}
            ></div>
            <div
              className="bg-secondary opacity-25 rounded-3 p-1"
              style={{ height: "550px", width: "290px", margin: "10px" }}
            ></div>
            <div
              className="bg-secondary opacity-25 rounded-3 p-1"
              style={{ height: "550px", width: "290px", margin: "10px" }}
            ></div>
            <div
              className="bg-secondary opacity-25 rounded-3 p-1"
              style={{ height: "550px", width: "290px", margin: "10px" }}
            ></div>
            <div
              className="bg-secondary opacity-25 rounded-3 p-1"
              style={{ height: "550px", width: "290px", margin: "10px" }}
            ></div>
            <div
              className="bg-secondary opacity-25 rounded-3 p-1"
              style={{ height: "550px", width: "290px", margin: "10px" }}
            ></div>
            <div
              className="bg-secondary opacity-25 rounded-3 p-1"
              style={{ height: "550px", width: "290px", margin: "10px" }}
            ></div>
          </div>
        ) : (
          <div
            className="col-12 d-flex flex-row flex-wrap justify-content-start me-0"
            style={{
              padding: "5% 1% 2% 24%",
              backgroundColor: "#f0efeb",
              minHeight: "90vh",
            }}
          >
            {filterProducts.length !== 0 ? (
              filterProducts.map((p: ProductsDataType) => (
                <ProductCard key={p.id} products={p} />
              ))
            ) : (
              <div className="text-center d-flex flex-column w-100 align-self-center">
                <h1>Sorry, no results found!</h1>
                <span className="text-secondary fs-5">
                  Please check the spelling or try searching for something else
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
