import { Tab } from "bootstrap";
import React, { useState } from "react";
import { Tabs } from "react-bootstrap";
import { DatePicker } from 'antd';
import moment from 'moment';
import Guestselect from "./Guestselect";
import { submitFun } from "../actions";
import { useDispatch, useSelector } from "react-redux"; 
import { Link } from "react-router-dom";
const { RangePicker } = DatePicker;

export default function Searchsection(){
    const [key, setKey] =useState("Hotel")

    const dispatch =useDispatch();
    
    function onChange(dates, dateStrings) {
        //   console.log('From: ', dates[0], ', to: ', dates[1]);

            // setSatrt(dates.map(dateitme =>{
            //     return moment(dateitme).format("DD-MM-YYYY")
            // }))
            // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
            
            const m = new Date(dates[0]);
            var sdate=m.getDate()
            var smonths=m.getMonth()
            var syears=m.getFullYear() 
            var satrtDate=` ${sdate}, - ${smonths+1}- ${syears}` 
            // console.log(satrtDate,"satrt date");

            const m2 = new Date(dates[1]);
            var edate=m2.getDate()
            var emonths=m2.getMonth()
            var eyears=m2.getFullYear() 
            var endDate=` ${edate}, - ${emonths+1}- ${eyears}` 
            // console.log(endDate,"enddate");
            setStart([{satrtDate},  {endDate}])
        }
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
         
        
        const adultCount= useSelector((state)=>state.changeAdult)
        console.log(adultCount,'adultCount')
        // const guestData={
        //     adult2:adultCount.adult,
        //     children2:adultCount.children,
        //     room2:adultCount.room,
        // }
    return <>
        <section>
            <div className="bg_slider">
              <div className="container hieght500">
              <div className="row justify-content-center align-items-center hieght500">
                <div className="col-12 search-section">
                <Tabs
               activeKey={key}
               onSelect={(k)=>setKey(k)}
               >
                <Tab eventKey="Hotel" title="Hotel">
                <div className="hotel_fields row m-0 p-2 pt-3">
                        <div className="col-md-4">
                            <div className="input-field">
                            <input className="form-control" onChange={destinationHandler} placeholder="Enter your destination"/>
                            </div>
                        </div>
                        
                        <div className="col-md-3">
                            <div className="input-field">
                                
                            <RangePicker
                               
                                onChange={onChange}
                                />
                            {/* <input className="form-control" placeholder="Check-Out" /> */}
                            </div>
                        </div>
                        <div className="col-md-3 position-relative">
                            <div className="input-field" onClick={showFun}>
                             <span className="form-control"> {adultCount.map((item)=>{
                                return <>
                                    {item.adult} Adult, {item.children} Child, {item.room} Room
                                </>
                            })
                            } </span>  
                            
                            </div>
                           <div id="guestselect">
                           <Guestselect/> 
                           </div>
                        </div>
                        <div className="col-md-2">
                        <div className="submit-btn">
                           <button> <Link to="booking_list" relative="path" onClick={()=> dispatch(submitFun([{destination:destination},{dateSechudle:startdate},adultCount]))} className="submitbtn" >Search</Link></button>
                        </div>
                        </div>
                    </div>  
                </Tab>
                <Tab eventKey="Other" title="Other">
                    <div className="othertab"> 
                    <h3>Other tabs</h3>
                    </div>  
                </Tab>
               </Tabs>
                </div>
              </div>
              </div>
            </div>
        </section>
    </>
}