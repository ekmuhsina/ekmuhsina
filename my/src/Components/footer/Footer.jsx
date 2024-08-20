import Style from "./Footer.module.css";
function Footer() {
  return (
    <>
      <footer>
        <div className={Style.footrContactSection}>
          <div className={Style.footerLinkSection}>
            <div className={Style.footerLinkBox}>
              <div className={Style.footerLinkHead}>ABOUT</div>
              <a href="/contactus" >Contact Us</a>
              <a href="/aboutus" >About Us</a>
              <a href="/" >Careers</a>
              <a href="/" >Flipcart Stories</a>
              <a href="/" >Press</a>
              <a href="/" >Flipcart Wholesales</a>
              <a href="/" >Cleartrip</a>
              <a href="/" >Corpration Information</a>
            </div>
            <div className={Style.footerLinkBox}>
              <div className={Style.footerLinkHead}>HELP</div>
              <a href="/" >Payments</a>
              <a href="/" >Shipping</a>
              <a href="/" >Cancellation & Returns</a>
              <a href="/" >FAQ</a>
              <a href="/" >Report Infringement</a>
            </div>
            <div className={Style.footerLinkBox}>
              <div className={Style.footerLinkHead}>CONSUMER POLICY</div>
              <a href="/" >Cancellation & Returns</a>
              <a href="/" >Terms Of Use</a>
              <a href="/" >Security</a>
              <a href="/" >Privacy</a>
              <a href="/" >Sitemap</a>
              <a href="/" >Grievence Readdressal</a>
              <a href="/" >EPR Compliance</a>
            </div>
            <div className={Style.footerLinkBox}>
              <div className={Style.footerLinkHead}>About</div>
              <a href="/" >Facebook</a>
              <a href="/" >Twitter</a>
              <a href="/" >YouTube</a>
              <a href="/" >Instegram</a>
              <a href="/" >LinkedIn</a>
            </div>
          </div>
          <div className={Style.footerAddressSection}>
            <div className={Style.footerAddressContainer}>
              <div className={Style.addressHead}>Mail Us:</div>
              <div className={Style.address}>
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Bengaluru, 560103, Karnataka, India
              </div>
            </div>
            <div className={Style.footerAddressContainer}>
              <div className={Style.addressHead}>
                Registered Office Address:
              </div>
              <div className={Style.address}>
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India CIN:
                U51109KA2012PTC066107 Telephone: 044-45614700
              </div>
            </div>
          </div>
        </div>
        <div className={Style.footerBottomBar}>
          <span>Become a Seller</span>
          <span> Advertise</span>
          <span>Gift Cards</span>
          <span>® Help Center</span>
          <span>2007-2023 Flipkart.com</span>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
            alt=""
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
