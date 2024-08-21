import React from "react";
import HomeMenu from "./components/home/HomeMenu";
import Banner from "./components/home/Banner";
import TopDeals from "./components/home/TopDeals";
import OfferSection from "./components/home/OfferSection";
import ProductGallery from "./components/home/ProductGallery";
import Deals from "./components/home/Deals";

export default function Home() {
  return (
    <>
      <div className="w-100 pt-4 pb-5" style={{ backgroundColor: "#ebfafb" }}>
        <div
          className="m-auto bg-light mb-4 p-2 shadow"
          style={{ width: "90%" }}
        >
          <HomeMenu />
        </div>
        <div className="m-auto bg-light shadow" style={{ width: "90%" }}>
          <Banner />
        </div>
        <div className="m-auto mt-4" style={{ width: "90%" }}>
          <ProductGallery />
        </div>
        <div
          className="m-auto bg-light shadow mt-4 p-3"
          style={{ width: "90%" }}
        >
          <Deals />
        </div>
        <div
          className="m-auto bg-light shadow mt-4 p-3"
          style={{ width: "90%" }}
        >
          <TopDeals />
        </div>
        <div
          className="m-auto bg-light shadow mt-4 p-3"
          style={{ width: "90%" }}
        >
          <OfferSection />
        </div>
        <div className="m-auto mt-4" style={{ width: "90%" }}>
          <ProductGallery />
        </div>
        <div
          className="m-auto bg-light shadow mt-4 p-3"
          style={{ width: "90%" }}
        >
          <TopDeals />
        </div>
      </div>
    </>
  );
}
