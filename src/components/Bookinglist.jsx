 import { useSelector } from "react-redux";
import FilterData from "./FilterData";
import Modifysearch from "./Modifysearch";
import HotelDatalist from "./HotelDatalist";
 
 
export default function Bookinglist(){
   
        
        const bookingValue= useSelector((state)=>state.reducerDate)
        console.log(bookingValue,'booking list') 
    return <>
        <section>
            <Modifysearch/>
            <div className="dataoflist">
                            <div className="container">
                            <div className="row">
                              <div className="col-md-3">
                              <FilterData/>
                              </div>
                              <div className="col-md-9">
                                <HotelDatalist/>
                              </div>
                            </div>
                            </div>
            </div>
        </section>
    </>
}