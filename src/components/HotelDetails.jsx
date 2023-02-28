import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import HotelRating from "./HotelRating";
import Modifysearch from "./Modifysearch";
import SliderWiththumbail from "./SliderWIththumbail"; 

export default function HotelDetails(){
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          If you cancel the booking between 23/Feb/2023 13:00 GMT to 26/Feb/2023 14:00 GMT you will be charged 1 night cost.
        </Tooltip>
      );
    return <> 
        <section className="detail_bg pb-3" >
        <Modifysearch/>
            <div className="container"> 
                <div className="image_gallary mt-3">
                <div className="row"> 
                <div className="col-md-8"> 
                <SliderWiththumbail/>
                </div>
                <div className="col-md-4">
                    <div className="gallery_right">
                        <h3>Excellent</h3>
                        <div className="rate_view">
                             <h4>4.3/5</h4>
                             <p>120 Reviews</p>
                        </div>
                        <div className="checkoutcheckin mt-3">
                        <p><b>CHECKIN</b> : 2:00 PM</p>
                        <p><b>CHECKOUT</b> : 12:00 PM</p>
                        </div>
                    </div>
                </div> 
                </div>
                </div>
                <div className="chooseroom mt-3">
                    <div className="container">
                        <div className="row">
                        <div className="col-12 titleroom">
                            <h3>CHOOSE ROOM</h3>
                        </div>
                        </div>
                    <div className="row border p-2 mb-3">
                        <div className="col-md-12">
                          <h3>Double Superior</h3>  
                        </div>
                        <div className="col-md-3">
                           <div className="hotelimage">
                           <img src="https://media-cdn.tripadvisor.com/media/photo-s/1d/35/15/66/b-montmartre-hotel.jpg" />
                           </div>
                        </div>
                        <div className="col-md-2">
                            <div className="includes_sec">
                                <h4>What's Includes</h4>
                                <ul>
                                    <li>Free Breakfast</li>
                                    <li>Free Valet Parking</li>
                                    <li>Frree WiFi</li>
                                    <li>Free Parking</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="includes_sec">
                                <h4>Highlights</h4>
                                <ul>
                                    <li>Non Refundable  &nbsp; 
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                        > 
                                          <i className="fa fa-exclamation-circle"></i>
                                        </OverlayTrigger>    
                                    </li>
                                    <li>Free Breakfast</li> 
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="price_sec">
                                <h4>Booking Price</h4>
                                <p>Price for 2 nights</p>
                                <h3><b>$431.00 </b></h3> 
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="price_sec "> 
                                <button><Link to="/checkout">Book Now</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="row border p-2 mb-3">
                        <div className="col-md-12">
                          <h3>Double or Twin SUPERIOR WITH DOUBLE BED</h3>  
                        </div>
                        <div className="col-md-3">
                           <div className="hotelimage">
                           <img src="http://dimg04.c-ctrip.com/images/0225u120009olywc357E7.jpg" />
                           </div>
                        </div>
                        <div className="col-md-2">
                            <div className="includes_sec">
                                <h4>What's Includes</h4>
                                <ul>
                                    <li>Free Breakfast</li>
                                    <li>Free Valet Parking</li>
                                    <li>Free WiFi</li>
                                    <li>Free Parking</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="includes_sec">
                                <h4>Highlights</h4>
                                <ul>
                                    <li>Non Refundable  &nbsp; 
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}
                                        > 
                                          <i className="fa fa-exclamation-circle"></i>
                                        </OverlayTrigger>
                                       </li>
                                    <li>Free Breakfast</li> 
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="price_sec">
                                <h4>Booking Price</h4>
                                <p>Price for 2 nights</p>
                                <h3><b>$341.00 </b></h3> 
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="price_sec "> 
                                <button><Link to="/checkout">Book Now</Link></button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="chooseroom mt-3">
                <div className="row">
                        <div className="col-12 titleroom">
                            <h3>OVERVIEW</h3>
                        </div>
                        </div>
                    <div className="row">
                        <div className="col-md-12">
                           <div className="overviewlist">
                           <h4>Location</h4>
                            <p>This luxury hotel is located on the prestigious Al Maktoum Street close to Jumeirah Beach at the heart of the Deira business district of Dubai. It is a short 10-minute walk to the creek and links to the public transport are also to be found directly in front of the hotel. The international airport is 15 minutes drive away.</p>
                           </div>
                           <div className="overviewlist">
                           <h4>Facilities</h4>
                            <p>10 junior suites, 5 suites, 149 single rooms and 48 double rooms are located on 11 storeys and can be reached by lift. Guests are warmly welcomed by multilingual staff at the 24-hour reception desk in the lobby. Check-in/check-out service is available round the clock. Amenities include a baggage storage service, safe, currency exchange service and cash machine. Wireless internet access is provided in public areas. The tour desk offers assistance with booking excursions. The hotel has wheelchair-accessible facilities. There are a number of shops, including a souvenir shop. Additional facilities include a newspaper stand. Guests arriving by car can park their vehicles in the car park. Further services and facilities include a babysitting service (for a fee), medical assistance, a transfer service, room service, a laundry service, a hairdresser, a coin-operated laundry, a page service and a hotel shuttle bus. Complimentary newspapers are available.</p>
                           </div>
                           <div className="overviewlist">
                           <h4>Rooms</h4>
                            <p>Air conditioning and central heating ensure that rooms maintain comfortable temperatures. All rooms are carpeted and include a double bed or a king-size bed. Children's beds can be requested for younger guests. A safe, a minibar and a desk are also available. Additional features include a mini fridge and a tea/coffee station. An ironing set is provided for guests' convenience. A direct dial telephone, a television with satellite/cable channels and WiFi (no extra charge) are provided as well. Slippers are included. Bathrooms are equipped with a shower, a bathtub and a bidet. A hairdryer and bathrobes are provided. Guests can also book wheelchair-friendly rooms with wheelchair-accessible bathrooms. The hotel has family rooms and 55 non-smoking rooms.</p>
                           </div>
                           <div className="overviewlist">
                           <h4>Sports/Entertainment</h4>
                            <p>While the adults swim a few laps in the outdoor pool, children can enjoy splashing about in their own swimming area. Guests can treat themselves to refreshing drinks at the poolside snack bar and a relaxing soak in the hot tub. A short break or an entire afternoon on the sun terrace, which features sun loungers and parasols, is time well spent. Sport and leisure facilities at the hotel include a gym and aerobics. There is a wellness area with a range of services, including a spa, a sauna and a beauty salon. In addition, a steam bath and massage treatments are available for a fee. Entertainment options and leisure facilities include a dance club and a nightclub. Copyright GIATA 2004 - 2023. Multilingual, powered by www.giata.com for client no. 700849</p>
                           </div>
                           <div className="overviewlist">
                           <h4>Meals</h4>
                            <p>Various dining options are available, including a dining room, a café and a bar. Guests can enjoy the culinary delights of the non-smoking, air-conditioned restaurant, which provides high chairs for children. Catering options include bed and breakfast, half board and full board. A generous breakfast buffet guarantees a great start to the day. At lunch, guests can choose between a buffet, à la carte and a set menu. Dinner options include à la carte and a set menu.</p>
                           </div>
                           <div className="overviewlist">
                           <h4>Payment</h4>
                            <p>The hotel accepts the following credit cards: American Express, VISA, Diners Club and MasterCard.</p>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="chooseroom mt-3 mb-3">
                <div className="row">
                        <div className="col-12 titleroom">
                            <h3>REVIEWS</h3>
                        </div>
                        </div>
                    <HotelRating/>
                </div>
            </div>
        </section>
    </>
}