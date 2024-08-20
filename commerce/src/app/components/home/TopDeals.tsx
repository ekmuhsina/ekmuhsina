import React from "react";
import TopDeals01 from "../../../../public/top-deals-01.webp";
import TopDeals02 from "../../../../public/top-deals-02.webp";
import TopDeals03 from "../../../../public/top-deals-03.webp";
import TopDeals04 from "../../../../public/top-deals-04.webp";
import TopDeals05 from "../../../../public/top-deals-05.webp";
import TopDeals06 from "../../../../public/top-deals-06.webp";
import TopDeals07 from "../../../../public/top-deals-07.webp";
import Image from "next/image";


function TopDeels() {
    
    return ( 
        <>
            <h4>Top Deals</h4>
            <div className="d-flex gap-4" >
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <Image height={150} className="object-fit-contain" src={TopDeals01} alt="topDeals01" />
                    <span style={{width: "fit-content", fontSize: "14px", textAlign: "center", marginTop: "10%"}}>Adidas Sketchers & more</span>
                    <span style={{textAlign: "center"}}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <Image height={150} className="object-fit-contain" src={TopDeals02} alt="topDeals02" />
                    <span style={{width: "fit-content", fontSize: "14px", textAlign: "center", marginTop: "10%"}}>Adidas Sketchers & more</span>
                    <span style={{textAlign: "center"}}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <Image height={150} className="object-fit-contain" src={TopDeals03} alt="topDeals03" />
                    <span style={{width: "fit-content", fontSize: "14px", textAlign: "center", marginTop: "10%"}}>Adidas Sketchers & more</span>
                    <span style={{textAlign: "center"}}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <Image height={150} className="object-fit-contain" src={TopDeals04} alt="topDeals04" />
                    <span style={{width: "fit-content", fontSize: "14px", textAlign: "center", marginTop: "10%"}}>Adidas Sketchers & more</span>
                    <span style={{textAlign: "center"}}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <Image height={150} className="object-fit-contain" src={TopDeals05} alt="topDeals05" />
                    <span style={{width: "fit-content", fontSize: "14px", textAlign: "center", marginTop: "10%"}}>Adidas Sketchers & more</span>
                    <span style={{textAlign: "center"}}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <Image height={150} className="object-fit-contain" src={TopDeals06} alt="topDeals06" />
                    <span style={{width: "fit-content", fontSize: "14px", textAlign: "center", marginTop: "10%"}}>Adidas Sketchers & more</span>
                    <span style={{textAlign: "center"}}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <Image height={150} className="object-fit-contain" src={TopDeals07} alt="topDeals07" />
                    <span style={{width: "fit-content", fontSize: "14px", textAlign: "center", marginTop: "10%"}}>Adidas Sketchers & more</span>
                    <span style={{textAlign: "center"}}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <Image height={150} className="object-fit-contain" src={TopDeals01} alt="topDeals01" />
                    <span style={{width: "fit-content", fontSize: "14px", textAlign: "center", marginTop: "10%"}}>Adidas Sketchers & more</span>
                    <span style={{textAlign: "center"}}>Min. 50-80% off</span>
                </div>
            </div>
        </>
     );
}

export default TopDeels;