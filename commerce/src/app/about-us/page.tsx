import React from "react";
import AboutImg01 from "../../../public/about-us-img-01.png";
import AboutImg02 from "../../../public/about-us-img-02.png";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="m-auto" style={{ width: "90%" }}>
      <div
        className="row align-items-center justify-content-between"
        style={{ backgroundColor: "#ebfafb" }}
      >
        <div className="col-5 ps-5">
          <span className="text-dark fw-semibold">ABOUT US</span>
          <h1 className="mt-2" style={{ color: "#ee9c04" }}>
            UrbanCartel Express Yourself with Urban Fashion and Streetwear
          </h1>
          <h5 className="fw-normal">
            UrbanCartel has everything you need to express yourself with urban
            fashion and streetwear. From t-shirts, hoodies, and jackets, to
            hats, sunglasses, and jewelry, they have it all. UrbanCartel is the
            all-in-one commerce platform to start, run, and grow a business.
            Check them out now!
          </h5>
          <button className="btn btn-primary mt-3 ">Shop Now</button>
        </div>
        <div className="col-5">
          <Image src={AboutImg01} width={600} alt="AboutImg01" />
        </div>
      </div>
      <div className="row justify-content-around mt-5 mb-5">
        <div className="col-4">
          <Image src={AboutImg02} alt="AboutImg02" width={600} />
        </div>
        <div className="col-6">
          <h2 className="text-wrap mb-3" style={{ color: "#ee9c04" }}>
            Where Style Meets Seamless Shopping
          </h2>
          <p className="text-wrap fs-5 opacity-75">
            Driven by a commitment to excellence, we curated a platform that
            goes beyond transactions. UrbanCartel is a celebration of
            individuality, a showcase of curated craftsmanship, and a community
            where style knows no bounds. From late-night brainstorming sessions
            to navigating the ever-evolving digital landscape, we&apos;ve grown
            from a small team with big dreams to a dynamic marketplace. Our
            handpicked collections feature products from artisans, independent
            designers, and renowned brands. At UrbanCartel, each click is an
            invitation to explore a world of style, sophistication, and seamless
            shopping. Join us on this incredible journey, where we continue to
            shape the future of online retail. Thank you for being a part of
            UrbanCartel - where style meets convenience. Welcome to UrbanCartel,
            your destination for curated fashion and a seamless shopping
            experience.
          </p>
        </div>
      </div>
      <div className="text-center p-5">
        <h6 className="pt-3 mb-2">OUR MISSION</h6>
        <h3>Redefine the online shopping experience</h3>
        <p className="fs-5 opacity-75 mt-2">
          We are committed to providing a curated marketplace that celebrates
          individuality, showcasing a diverse range of products from artisans,
          independent designers, and renowned brands. Our dedication to
          excellence drives us to create a platform where every click is an
          exploration of unique craftsmanship and unparalleled sophistication.
          Join us on our mission to make UrbanCartel the go-to destination for
          those who seek curated fashion and a shopping journey that goes beyond
          mere transactions.
        </p>
      </div>
      <div className="text-center p-5 m-5">
        <h4>
          &quot;Unlock your business potential with UrbanCartel. Try UrbanCartel
          the perfect platform to start, run, and grow your online venture with
          comprehensive tools and services.&quot;
        </h4>
        <button className="btn btn-primary mt-3">Shop Now</button>
      </div>
    </div>
  );
}

export default AboutUs;
