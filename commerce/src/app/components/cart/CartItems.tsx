import React from "react";
import Link from "next/link";
import { cartItem } from "@/utils/classes";
import RemoveItemFromCart from "./RemoveItemFromCart";

function CartItems(props: any) {
  const { cartProducts, loading } = props;

  if (loading) {
    return (
      <div className="preloader">
        <svg
          className="cart"
          aria-label="Shopping cart line animation"
          viewBox="0 0 128 128"
          width="128px"
          height="128px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          >
            <g className="cart__track" stroke="hsla(0,10%,10%,0.1)">
              <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
              <circle cx="43" cy="111" r="13" />
              <circle cx="102" cy="111" r="13" />
            </g>
            <g className="cart__lines" stroke="currentColor">
              <polyline
                className="cart__top"
                points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
                strokeDasharray="338 338"
                strokeDashoffset="-338"
              />
              <g className="cart__wheel1" transform="rotate(-90,43,111)">
                <circle
                  className="cart__wheel-stroke"
                  cx="43"
                  cy="111"
                  r="13"
                  strokeDasharray="81.68 81.68"
                  strokeDashoffset="81.68"
                />
              </g>
              <g className="cart__wheel2" transform="rotate(90,102,111)">
                <circle
                  className="cart__wheel-stroke"
                  cx="102"
                  cy="111"
                  r="13"
                  strokeDasharray="81.68 81.68"
                  strokeDashoffset="81.68"
                />
              </g>
            </g>
          </g>
        </svg>
        <div className="preloader__text">
          <p className="preloader__msg">Bringing you the goods…</p>
          <p className="preloader__msg preloader__msg--last">
            This is taking long. Something&apos;s wrong.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-100">
      {cartProducts.length !== 0 ? (
        cartProducts.map((p: cartItem) => (
          <div
            key={p.id}
            className="row col-12 g-0 justify-content-around border-bottom pb-4 mb-4"
          >
            <Link href={"/product/" + p.id} className="col-2">
              <img
                src={p.image.url}
                width={200}
                className="img-fluid rounded-start"
                alt={p.name}
              />
            </Link>
            <div className="col-5">
              <div className="card-body">
                <Link
                  href={"/products/" + p.id}
                  className="card-title fs-4 mb-3 text-primary fw-bold text-decoration-none"
                >
                  {p.name}
                </Link>
                <div className="col-3 row mt-2">
                  <h2 className="text-danger col-12 ">
                    ${p.price.raw}
                    <span
                      className="badge text-bg-danger rounded-pill "
                      style={{ fontSize: "12px" }}
                    >
                      50% offer
                    </span>
                  </h2>
                </div>
              </div>
              <div className="row">
                <label className="me-2 fw-medium col-12 ms-0">
                  Quantity : {p.quantity}
                </label>
                <RemoveItemFromCart itemId={p.id} />
              </div>
            </div>
            <div className="col-3 me-0 pe-0 row align-content-start justify-content-end">
              <h2 className="text-danger col-12 text-end mb-1">
                ${p.line_total.formatted}
              </h2>
            </div>
          </div>
        ))
      ) : (
        <p
          className="text-center fs-4 fw-medium"
          style={{ marginTop: "200px" }}
        >
          No items in the cart.
        </p>
      )}
    </div>
  );
}

export default CartItems;
