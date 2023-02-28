import React, { useState } from "react";
import { DatePicker } from 'antd'; 
import { submitFun } from "../actions";
import { useDispatch, useSelector } from "react-redux"; 
import Modifyguestselect from "./Modifyguestselect"; 
import moment from "moment"; 
import 'moment/locale/zh-cn';

const { RangePicker } = DatePicker;

export default function Modifysearch(){
    const dispatch =useDispatch();
    
    // function onChange(dates, dateStrings) {
    //         const m = new Date(dates[0]);
    //         var sdate=m.getDate()
    //         var smonths=m.getMonth()
    //         var syears=m.getFullYear() 
    //         var satrtDate=` ${sdate}, - ${smonths+1}- ${syears}` 
    //         // console.log(satrtDate,"satrt date");

    //         const m2 = new Date(dates[1]);
    //         var edate=m2.getDate()
    //         var emonths=m2.getMonth()
    //         var eyears=m2.getFullYear() 
    //         var endDate=` ${edate}, - ${emonths+1}- ${eyears}` 
    //         // console.log(endDate,"enddate");
    //         setStart([{satrtDate},  {endDate}])
    //     }
        const [startdate, setStart]=useState()
         
        function showFun() {
            var x = document.getElementById("guestselect");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }
          const [destination, setDestination]=useState("")
          function destinationHandler(e){
            setDestination(e.target.value)
          }
         
        
        const bookingValue= useSelector((state)=>state.reducerDate)
        console.log(bookingValue[0][1].dateSechudle[0].satrtDate,'reducerDatevdv')
       var sdat=bookingValue[0][1].dateSechudle[0].satrtDate;
    return <>
        <section>
            <div className="bg_modify">
              <div className="container">
              <div className="row justify-content-center align-items-center ">
                <div className="col-12 search-section">
                <div className="hotel_fields row m-0 p-2 pt-3">
                        <div className="col-md-4">
                            <div className="input-field">
                            <input className="form-control" defaultValue={bookingValue[0][0].destination} onChange={destinationHandler} placeholder="Enter your destination"/>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="input-field">
                                
                            <RangePicker 
                                
                                // onChange={onChange}
                             defaultValue={moment('2015-01-01', sdat)} 
                                // defaultValue={moment([sdat], 'YYYY-MM-DD')}
                                // value={moment(sdat, 'YYYY-MM-DD')}
                                />
                            {/* <input className="form-control" placeholder="Check-Out" /> */}
                            </div>
                        </div>
                        <div className="col-md-3 position-relative">
                            <div className="input-field" onClick={showFun}>
                             <span className="form-control"> {bookingValue.map((item)=>{
                                return <>
                                    {bookingValue[0][2][0].adult} Adult, {bookingValue[0][2][0].children} Child, {bookingValue[0][2][0].room} Room
                                </>
                            })
                            } </span>  
                            
                            </div>
                           <div id="guestselect">
                           <Modifyguestselect/> 
                           </div>
                        </div>
                        <div className="col-md-2">
                        <div className="submit-btn">
                            <button onClick={()=> dispatch(submitFun([destination,startdate,bookingValue]))} className="submitbtn" >Search</button>
                        </div>
                        </div>
                    </div> 
                </div>
              </div>
              </div>
            </div>
          
        </section>
    </>
}