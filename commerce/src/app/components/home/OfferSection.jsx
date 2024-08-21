import React from "react";
import OfferImg01 from "../../../../public/messege-pills.webp";
import OfferImg02 from "../../../../public/big-bath-days.webp";
import OfferImg03 from "../../../../public/bluetooth-headphones.webp";
import OfferImg04 from "../../../../public/confortable-mattresses.webp";
import OfferImg05 from "../../../../public/fans-and-air-coooler.webp";
import OfferImg06 from "../../../../public/kitchen-dining-range.webp";
import OfferImg07 from "../../../../public/lowest-price-of-the-year.webp";
import OfferImg08 from "../../../../public/makeup-and-fragrance.webp";
import OfferImg09 from "../../../../public/on-kitchen-appliances.webp";
import OfferImg10 from "../../../../public/motorola-edge-40-neo.webp";
import OfferImg11 from "../../../../public/realme-11x-5g.webp";
import OfferImg12 from "../../../../public/switch-to-sustainability.webp";
import OfferImg13 from "../../../../public/top-deals-on-furnishing.webp";
import OfferImg14 from "../../../../public/top-deals-on-grooming.webp";
import OfferImg15 from "../../../../public/vivo-t2x-5g.webp";
import Image from "next/image";


function OfferSection() {
    return (
        <div className="row gap-2 pe-2 ps-2">
            <Image src={OfferImg01} alt="OfferImg01" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg02} alt="OfferImg02" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg03} alt="OfferImg03" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg04} alt="OfferImg04" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg05} alt="OfferImg05" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg06} alt="OfferImg06" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg07} alt="OfferImg07" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg08} alt="OfferImg08" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg09} alt="OfferImg09" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg10} alt="OfferImg10" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg11} alt="OfferImg11" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg12} alt="OfferImg12" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg13} alt="OfferImg13" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg14} alt="OfferImg14" className="col btn p-0 border-0 rounded-0 m-0" />
            <Image src={OfferImg15} alt="OfferImg15" className="col btn p-0 border-0 rounded-0 m-0" />
        </div>
    );
}

export default OfferSection;