import BannerImg01 from "../../Assets/images/canon-printer-banner.webp";
import BannerImg02 from "../../Assets/images/ac-banner.webp"
import BannerImg03 from "../../Assets/images/flight-ticket-banner.webp";
import BannerImg04 from "../../Assets/images/hp-printer-banner.webp";
import BannerImg05 from "../../Assets/images/nothing-phone-2-banner.webp";


function Banner() {

    return (
        <>
            <div
                id="banner"
                className="carousel slide h-100"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#banner"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#banner"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#banner"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#banner"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#banner"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={BannerImg01} className="d-block w-100" alt="ac-banner" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={BannerImg02} className="d-block w-100" alt="canon-printer-banner" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={BannerImg03} className="d-block w-100" alt="flight-ticket-banner" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={BannerImg04} className="d-block w-100" alt="hp-printer-banner" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={BannerImg05} className="d-block w-100" alt="nothing-phone-2-banner" />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#banner"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#banner"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </>
    );
}

export default Banner;
