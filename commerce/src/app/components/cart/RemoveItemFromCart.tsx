import { ProductsService } from "@/app/services/products-service";
import React from "react";

export default function RemoveItemFromCart(props:any) {
    const RemoveItemFromCart = async ()=>{
        await ProductsService.removeItemById(props.itemId)
    }
  return (

    <div className="ms-0">
      <button className="btn btn-link text-start ms-0 ps-0" onClick={RemoveItemFromCart}>
        Remove item
      </button>
    </div>
  );
}
