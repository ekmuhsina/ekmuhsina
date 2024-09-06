"use client";
import React from "react";
import Style from "./ProductsCard.module.css";
import Link from "next/link";
import { ProductsDataType } from "@/utils/classes";
import ProductRating from "../product-rating/ProductRating";
import DownArrow from "../../../../public/chevron-down.svg";
import Image from "next/image";

function ProductCard(props: any) {
  const product: ProductsDataType = props.products;

  //removing tags from product details
  function removeTags(input: string) {
    return input.replace(/<\/?[^>]+(>|$)/g, "");
  }
  const productDetails = removeTags(product.description);
  return (
    <Link className="text-decoration-none" href={`/products/${product.id}`}>
      <div className={Style.card}>
        <img
          src={product.image.url}
          alt={product.name}
          className={Style.prodImg}
        />
        <span className={Style.catgory}>{product.categories[0].name}</span>
        <span className={Style.title}>{product.name}</span>
        <span className={Style.description}>{productDetails}</span>
        <div className={Style.ratingContainer}>
          <div className={Style.ratingImgContainer}>
            {<ProductRating rate={4} />}
          </div>
          <Image src={DownArrow} className={Style.ratingDown} alt="DownArrow" />
          <span className={Style.ratingCount}>{500}</span>
        </div>
        <span className={Style.prodOffer}>Save 50 %</span>
        <div className={Style.priceConatiner}>
          <sup>$</sup>
          <span className={Style.prodPrice}>{product.price.raw}</span>
          <span className={Style.priceDetl}>
            <span className="text-decoration-line-through">
              ${product.price.raw + (product.price.raw * 50) / 100}
            </span>
          </span>
        </div>
        <div className={Style.deliveryStatus}>
          Free Delivery for Prime Members
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
