"use client"
import React from "react";
import ProductList from "../components/product-list/ProductList";

export default function Product(props:any) {
 const { searchParams } = props;

  return (
    
    <ProductList searchParams={searchParams.search} />
  );
}
