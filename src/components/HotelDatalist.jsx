import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HotelDatalist() {
    const [hotelData, setHoteldata] = useState([])

    async function HotelAPI() {
        let packData = await axios.get('https://fakestoreapi.com/products');
        setHoteldata(packData.data)
        console.log(packData, 'hotels')
    }
    useEffect(() => {
        HotelAPI()
    }, [])


    const [slicecount, setSlicecount]= useState(8)
   
    function showmoreFun(){
        setSlicecount(slicecount+8)
    }
    function lessmoreFun(){
        setSlicecount(slicecount-8)
    }
    return <>
    <div>
    {hotelData.slice(0, slicecount).map((items, key)=>{
        return <>
         <div key={key} id={items.id} className="row m-0 mb-3 hotellist-sec">
            <div className="col-md-3">
                <div className="hotel_img">
                    <img src={items.image} />
                </div>
            </div>
            <div className="col-md-7">
                <div className="hotel_content">
                    <h3>{items.category}</h3>
                    <span>{items.rating.rate} <i className="fa fa-star"></i></span>
                    <p>{items.description.slice(0,120)}...</p>
                </div>
            </div>
            <div className="col-md-2">
                <div className="hotel_price">
                <div className="price_booking">
                <h3>$ {items.price}</h3>
                <button><Link to='/booking_details' relative="path" >Booking now</Link></button>
                </div>
                </div>
            </div>
        </div> 
        
        </>
    })}
        <div className="showmove">
            <button onClick={showmoreFun}> Show More</button>
            {/* <button disabled={slicecount<=8} onClick={lessmoreFun}> Less More</button> */}
        </div>
    </div>
    </>
}