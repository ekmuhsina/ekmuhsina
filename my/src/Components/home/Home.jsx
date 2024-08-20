import Banner from "./Banner";
import HomeMenu from "./HomeMenu";
import OfferSection from "./OfferSection";
import TopDeels from "./TopDeals";

function Home() {
    return (
        <>
            <div className="w-100 pt-4" style={{ backgroundColor: "#ebfafb"}}>
                <div className="m-auto bg-light mb-4 p-2 shadow" style={{ width: '90%'}}>
                    <HomeMenu />
                </div>
                <div className="m-auto bg-light shadow" style={{ width: '90%'}}>
                    <Banner />
                </div>
                <div className="m-auto bg-light shadow mt-4 p-3" style={{ width: '90%'}}>
                    <TopDeels />
                </div>
                <div className="m-auto bg-light shadow mt-4 p-3" style={{ width: '90%'}}>
                    <OfferSection />
                </div>
                <div className="m-auto bg-light shadow mt-4 p-3 mb-4" style={{ width: '90%'}}>
                    <TopDeels />
                </div>
            </div>
        </>
    );
}

export default Home;