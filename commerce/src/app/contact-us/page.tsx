import React from "react";
import ContsctUsImgBg from "../../../public/contact-us.jpg";
import CustomerSupportImg from "../../../public/customer-support.png";
import FeedbackImg from "../../../public/feedback-and-suggestions.png";
import PartnershipImg from "../../../public/partnership-opertunities.png";
import Image from "next/image";

const ContactUs = () => {
    return (
        <div className="row m-0">
            <div className="w-100 position-relative mb-5 p-0">
                <Image src={ContsctUsImgBg} className="object-fit-cover w-100 m-0" height={870} alt="ContsctUsImgBg" />
                <div className="position-absolute text-white align-content-center" style={{ top: "35%", padding: "3% 7% 3% 6%", textShadow: "-2px 3px 8px rgba(0,0,0,0.6)", background: "linear-gradient(90deg, rgba(13,110,253,1) 0%, rgba(0,0,0,0) 100%)" }} >
                    <h1>Contact Us</h1>
                    <span className="fs-4">Connect with UrbanCartel: Your Questions, Our Priority.
                        <br /> We&apos;re here to make your experience exceptional.</span>
                </div>
            </div>
            <div className="text-center">
                <h1>Reason for Inquiry</h1>
                <span className="fs-5">Please Select the Purpose of Your Inquiry.</span>
            </div>
            <div className="col-12 row justify-content-center gap-5 mt-5">
                <div className="col-2 text-center text-center">
                    <Image src={CustomerSupportImg} alt="CustomerSupportImg" />
                    <h5>Customer Support</h5>
                    <p>Have a question or need assistance? Our dedicated customer support team is here to help you navigate through any inquiries or concerns.</p>
                </div>
                <div className="col-2 text-center">
                    <Image src={PartnershipImg} alt="PartnershipImg" />
                    <h5>Partnership Opportunities</h5>
                    <p>Interested in collaborating with UrbanCartel? Reach out for exciting partnership opportunities and explore how we can grow together.</p>
                </div>
                <div className="col-2 text-center">
                    <Image src={FeedbackImg} alt="FeedbackImg" />
                    <h5>Feedback and Suggestions</h5>
                    <p>Your feedback matters! Share your thoughts, suggestions, or ideas with us. We value your input and are committed to continually enhancing your experience with UrbanCartel.</p>
                </div>
            </div>
            <div className="col-12 row mt-5 pt-5 pb-5 m-0 p-0">
                <div className="col-12 row justify-content-center gap-3 m-0 p-0">
                    <div className="col-4">
                        <h3>Corporate Headquarters</h3>
                        <p>Corporate Headquarters
                            Achieve3000
                            1985 Cedar Bridge Ave, Suite 3  
                            Lakewood, NJ 08701</p>
                    </div>
                    <div className="col-4">
                        <h3>General Contact</h3>
                        <p>Toll-Free: 888-968-6822
                            Phone: 732-367-5505
                            Fax: 732-367-2313
                            Email: office@achieve3000.com</p>
                    </div>
                </div>
                <div className="col-12 row justify-content-center gap-3 m-0 p-0">
                    <div className="col-4">
                        <h3>Sales Info & Inquiries</h3>
                        <p>Toll-Free: 800-838-8771
                            Email: info@achieve3000.com</p>
                    </div>
                    <div className="col-4">
                        <h3>International Sales</h3>
                        <p>Email: international@achieve3000.com
                            Phone: 732-987-3669
                            Schedule: Monday - Thursday 1:15 AM to 10:30 PM ET
                            | Friday 7:30 AM to 10:30 PM ET</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;