import TopDeals01 from "../../Assets/images/top-deals-01.webp";
import TopDeals02 from "../../Assets/images/top-deals-02.webp";
import TopDeals03 from "../../Assets/images/top-deals-03.webp";
import TopDeals04 from "../../Assets/images/top-deals-04.webp";
import TopDeals05 from "../../Assets/images/top-deals-05.webp";
import TopDeals06 from "../../Assets/images/top-deals-06.webp";
import TopDeals07 from "../../Assets/images/top-deals-07.webp";

function TopDeels() {
    const TopDealsTitle = {
        width: "fit-content",
        fontSize: "14px",
        textAlign: "cener",
        marginTop:"10%"
    }
    const TopDealsOff = {
        textAlign: "center"
    }
    return ( 
        <>
            <h4>Top Deals</h4>
            <div className="d-flex gap-4" >
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <img height={150} className="object-fit-contain" src={TopDeals01} alt="topDeals01" />
                    <span style={TopDealsTitle}>Adidas Sketchers & more</span>
                    <span style={TopDealsOff}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <img height={150} className="object-fit-contain" src={TopDeals02} alt="topDeals02" />
                    <span style={TopDealsTitle}>Adidas Sketchers & more</span>
                    <span style={TopDealsOff}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <img height={150} className="object-fit-contain" src={TopDeals03} alt="topDeals03" />
                    <span style={TopDealsTitle}>Adidas Sketchers & more</span>
                    <span style={TopDealsOff}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <img height={150} className="object-fit-contain" src={TopDeals04} alt="topDeals04" />
                    <span style={TopDealsTitle}>Adidas Sketchers & more</span>
                    <span style={TopDealsOff}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <img height={150} className="object-fit-contain" src={TopDeals05} alt="topDeals05" />
                    <span style={TopDealsTitle}>Adidas Sketchers & more</span>
                    <span style={TopDealsOff}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <img height={150} className="object-fit-contain" src={TopDeals06} alt="topDeals06" />
                    <span style={TopDealsTitle}>Adidas Sketchers & more</span>
                    <span style={TopDealsOff}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <img height={150} className="object-fit-contain" src={TopDeals07} alt="topDeals07" />
                    <span style={TopDealsTitle}>Adidas Sketchers & more</span>
                    <span style={TopDealsOff}>Min. 50-80% off</span>
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{border: "1px solid black"}}>
                    <img height={150} className="object-fit-contain" src={TopDeals01} alt="topDeals01" />
                    <span style={TopDealsTitle}>Adidas Sketchers & more</span>
                    <span style={TopDealsOff}>Min. 50-80% off</span>
                </div>
            </div>
        </>
     );
}

export default TopDeels;