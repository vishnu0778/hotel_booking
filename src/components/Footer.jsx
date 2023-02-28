import React from "react";

export default function Footer(){

    return <>
       <footer>
            <div className="container pt-5 pb-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer_sec">
                            <h3>Quick Links</h3>
                            <ul>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>Careers</li>
                                <li>FAQ </li>
                                <li>Covid-19 Information</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="footer_sec">
                            <h3>Newsletter Signup</h3>
                            <ul>
                                <li>Newsletter Signup By subscribing to our mailing list you will always be update with the latest news from us.</li>
                                <li><input placeholder="Your email"/><button><i className="fa fa-angle-down	"></i></button></li> 
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer_sec">
                            <h3>Get In Touch</h3>
                            <ul>
                                <li>Porschestraße 58, 38440 Wolfsburg, Germany</li>
                                <li>+49 5361 2727029</li>
                                <li>info@hexad.de</li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="payment_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"> 
                            <div className="payment-logo">
                                <img src="https://smartholidaysa.com/cmsimages/SMT/payment_778269.jpg" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li><b>Follow us</b></li>
                                <li><i class="fa fa-linkedin-square"></i></li>
                                <li><i class="fa fa-twitter-square"></i></li>
                                <li><i class="fa fa-facebook-square"></i></li>
                                <li><i class="fa fa-youtube-square"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttom_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p> &#169;	 Powered By Hexad Infosoft Pvt Ltd</p>
                        </div>
                    </div>
                </div>
            </div>
         </footer>
    </>
}