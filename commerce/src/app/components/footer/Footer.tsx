import React from "react";
import Link from "next/link";
import Style from "./Footer.module.css";


function Footer() {
  return (
    <footer className={Style.footer}>
        <div className={Style.footrContactSection}>
          <div className={Style.footerLinkSection}>
            <div className={Style.footerLinkBox}>
              <div className={Style.footerLinkHead}>ABOUT</div>
              <Link href="/contact-us" >Contact Us</Link>
              <Link href="/about-us" >About Us</Link>
              <Link href="https://www.flipkartcareers.com/?otracker=${otracker}_navlinks" target="_blank">Careers</Link>
              <Link href="http://stories.flipkart.com/" target="_blank">Stories</Link>
              <Link href="http://stories.flipkart.com/category/top-stories/news/" target="_blank">Press</Link>
              <Link href="/corporate-information" target="_blank">Corpration Information</Link>
            </div>
            <div className={Style.footerLinkBox}>
              <div className={Style.footerLinkHead}>HELP</div>
              <Link href="/pages/payments" target="_blank" >Payments</Link>
              <Link href="/pages/shipping" target="_blank">Shipping</Link>
              <Link href="/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG" target="_blank">Cancellation & Returns</Link>
              <Link href="/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG" target="_blank">FAQ</Link>
              <Link href="https://seller.flipkart.com/fiv?otracker=${otracker}_navlinks" target="_blank">Report Infringement</Link>
            </div>
            <div className={Style.footerLinkBox}>
              <div className={Style.footerLinkHead}>CONSUMER POLICY</div>
              <Link href="/pages/returnpolicy?otracker=${otracker}_navlinks" target="_blank">Cancellation & Returns</Link>
              <Link href="/pages/terms?otracker=${otracker}_navlinks" target="_blank">Terms Of Use</Link>
              <Link href="/pages/paymentsecurity?otracker=${otracker}_navlinks" target="_blank">Security</Link>
              <Link href="/pages/privacypolicy?otracker=${otracker}_navlinks" target="_blank">Privacy</Link>
              <Link href="/sitemap?otracker=${otracker}_navlinks" target="_blank">Sitemap</Link>
              <Link href="/pages/grievance-redressal-mechanism?otracker=${otracker}_navlinks" target="_blank">Grievence Readdressal</Link>
              <Link href="/pages/ewaste-compliance-tnc?otracker=${otracker}_navlinks" target="_blank">EPR Compliance</Link>
            </div>
            <div className={Style.footerLinkBox}>
              <div className={Style.footerLinkHead}>SOCIAL MEDIA</div>
              <Link href="https://www.facebook.com/flipkart" >Facebook</Link>
              <Link href="https://www.twitter.com/flipkart" >X</Link>
              <Link href="https://www.youtube.com/flipkart" >YouTube</Link>
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
  );
}

export default Footer;
