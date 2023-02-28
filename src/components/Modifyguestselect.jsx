import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 
export default function Modifyguestselect(){

 

   
    const dispatch=useDispatch();
    const [adult, setAdult]=useState()
    
    function adultHandleinc(){
        setAdult(modifyguest[0][2][0].adult+1)
        console.log("ckicked")
    }
    function adultHandledec(){

    }
    function handleOption(){

    }
    const modifyguest=useSelector((state)=>state.reducerDate[0][2][0])

    // console.log(modifyguest,'modifyguest')

    
    return <>  
    <div className="guest_details">
        <div className="row m-0">
        <div className="col-6">
            <label>Adults </label>
        </div>
        <div className="col-6">
            <div className="plus_minus">
            <button 
            disabled={modifyguest.adult<=1}
            onClick={adultHandledec}>-</button>
            <input value={modifyguest.adult}/>
            <button 
            disabled={modifyguest.adult>=30}
            onClick={adultHandleinc}>+</button>
            </div>
        </div>
        </div>
        <div className="row m-0">
        <div className="col-6">
            <label>Children</label>
        </div>
        <div className="col-6">
            <div className="plus_minus">
            <button 
            disabled={modifyguest.children<=0}
            onClick={()=>handleOption('children', 'd')}>-</button>
            <input value={modifyguest.children}/>
            <button 
            disabled={modifyguest.children>=30}
            onClick={()=>handleOption('children', 'i')}>+</button>
            </div>
        </div>
        </div>
        <div className="row m-0">
        <div className="col-6">
            <label>Room</label>
        </div>
        <div className="col-6">
            <div className="plus_minus">
            <button 
            disabled={modifyguest.room<=1}
            onClick={()=>handleOption('room', 'd')}>-</button>
            <input value={modifyguest.room}/>
            <button 
            disabled={modifyguest.room>=30}
            onClick={()=>handleOption('room', 'i')}>+</button>
            </div>
        </div>
        <div className="col-6">
            
        </div>
        <div className="col-6">
           <div className="submit_guest">
                <button > Done</button>
           </div>
        </div>
        </div>
    </div> 
    </>
} 




 