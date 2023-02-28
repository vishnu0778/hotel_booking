import React from "react";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";


export default function Checkout() {

    return <>
        <section className="detail_bg pb-3">
            <div className="container"> 
                    <div className="row">
                        <div className="col-md-8 titleroom">
                        <div className="chooseroom mt-3 ">
                            <h3>Review Your Hotel Room</h3>
                            <div className="row border p-2 rounded m-0">
                                <div className="col-md-4 p-0 ">
                                    <div className="hotelimage">
                                        <img src="http://dimg04.c-ctrip.com/images/0225u120009olywc357E7.jpg" />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="row checkoutname">
                                        <div className="col-md-12 ">
                                        <h3>Double Superior <span>4.5 <i className="fa fa-star"></i> </span></h3> 
                                        <p> <i className="fa fa-map-marker"></i>  Al maktoum street,deira,dubai</p>
                                        </div>
                                    <div className="col-md-6">
                                    <div className="includes_sec "> 
                                         <p>Room Type : <b>Deluxe Room</b></p>
                                         <p>Board Type : <b>Room Only</b></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="includes_sec"> 
                                    <h4 className="p-0">What's Includes</h4>
                                    <ul>
                                        <li>Free Breakfast</li>
                                        <li>Free Valet Parking</li>
                                        <li>Free WiFi</li>
                                        <li>Free Parking</li>
                                    </ul> 
                                    </div>
                                </div>
                                    </div>
                                </div> 
                            </div> 
                            <div className="row">
                            <div className="col-md-12 mt-3">
                                <p className="cancelation"><b>Cancellation Policy</b>:  If you cancel the booking between 23/Feb/2023 13:00 GMT to 26/Feb/2023 14:00 GMT you will be charged 1 night cost.</p>
                            </div>
                            </div>
                        </div> 
                        <div className="chooseroom mt-3 mb-3">
                            <h3>Contact Details</h3>
                            <div className="contactdetails">
                                <div className="row">
                                    <div className="col-md-6">
                                    <div className="input_fieldscheck"> 
                                       <PhoneInput
                                       country={"eg"}
                                       enableSearch={true}
                                      name="gfhgfhgf"
                                       />
                                    
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="input_fieldscheck"> 
                                        <input placeholder="Email Id"/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="mt-4">Passenger Information</h3>
                            <div className="contactdetails">
                                <div className="row mb-3">
                                    <div className="col-md-2">
                                        <strong className="d-flex h-100 align-items-center">Adult 1</strong>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="input_fieldscheck"> 
                                        <input placeholder="First Name"/>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="input_fieldscheck"> 
                                        <input placeholder="Last Name"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-2">
                                    <strong className="d-flex h-100 align-items-center">Adult 2</strong>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="input_fieldscheck"> 
                                        <input placeholder="First Name"/>
                                    </div>
                                    </div>
                                    <div className="col-md-4">
                                    <div className="input_fieldscheck"> 
                                        <input placeholder="Last Name"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-2">
                                    <strong className="d-flex h-100 align-items-center">Special Request</strong>
                                    </div> 
                                    <div className="col-md-8">
                                    <div className="input_fieldscheck"> 
                                        <textarea placeholder="Message"></textarea>
                                    </div>
                                    <small>Special request can't be guaranteed. We will pass these requests to the hotels.</small>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-4 titleroom">
                        <div className="chooseroom mt-3 mb-3">
                        <h3>Summary Details</h3>
                        <div className="summerydetails">
                            <div className="row">
                                <div className="check-inout col-6">
                                    <p>Check in  </p> 
                                </div>
                                <div className="check-inout col-6"> 
                                   <p> <b> : 25-Feb-2023</b> </p>
                                </div>
                                <div className="check-inout col-6"> 
                                    <p>Check out</p>
                                </div>
                                <div className="check-inout col-6">  
                                    <p><b> : 24-Mar-2023</b> </p> 
                                </div>
                                <div className="check-inout col-6">
                                    <p>Total length of stay  </p> 
                                </div>
                                <div className="check-inout col-6">
                                <p><b> : 23 Days & 22 Nights</b></p>
                                </div>
                                <div className="check-inout col-6">
                                    <p>Adult  </p> 
                                </div>
                                <div className="check-inout col-6">
                                <p><b> : 2 Adult</b></p>
                                </div>
                                <div className="check-inout col-6">
                                    <p>Room  </p> 
                                </div>
                                <div className="check-inout col-6">
                               <p> <b> : 1 Rooms</b></p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <h3>Price </h3>
                        <div className="pricesummery">
                            <div className="row">
                                <div className="check-inout col-6">
                                    <p>Hotel Charges  </p> 
                                </div>
                                <div className="check-inout col-6"> 
                                   <p> <b> : $257.00</b> </p>
                                </div>
                                <div className="check-inout col-6"> 
                                    <p>Taxes,Fees & Charges  </p>
                                </div>
                                <div className="check-inout col-6">  
                                    <p><b> :  $40.00</b></p>  
                                </div>
                                <div className="check-inout col-6">
                                    <p>Service Charge  </p> 
                                </div>
                                <div className="check-inout col-6">
                                    <p><b> : $12.00</b></p>
                                </div>
                                 
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-6">
                                    <h3>You Pay</h3>
                                </div>
                                <div className="col-6">
                                    <h3><strong>$ 309.00</strong></h3>
                                </div> 
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-12">
                                    <small>Taxes and Fees Included</small>
                                </div>
                            </div>
                        </div>
                            </div>
                            <div className="chooseroom mt-3 mb-3">
                            <h3>Coupon Code</h3>
                            <div className="couponsec">
                                <input placeholder="Enter Coupon Code"/>
                                <button>Apply</button>
                            </div>
                        </div>
                        <div className=" mt-3 ">
                        <div className="completepay text-center "> 
                                <button><Link to="/">Continue</Link></button>
                            </div>
                        </div>
                        </div>
                </div>

            </div>
        </section>
         
    </>
}