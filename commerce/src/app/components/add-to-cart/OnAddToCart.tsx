import React from "react";
import { ProductsService } from "@/app/services/products-service";

export default function OnAddToCart(props: any) {
  const { prodId, prodQuantity } = props;

  const onAddToCart = async () => {
    await ProductsService.addToCartById(prodId, prodQuantity);
  };
  return (
    
      <button
        className="btn btn-primary mt-2"
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
  );
}
