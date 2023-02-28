import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { guestdoneFun } from "../actions";
export default function Guestselect(){

    const [options, setOptions]=useState({
        adult:1,
        children : 0,
        room: 1,
    })

    const handleOption = (name, operations)=>{
        setOptions((prev)=>{
            return {
                ...prev, 
                [name]:operations==='i'? options[name] + 1 : options[name]- 1,
                 
            }
           
        })
    }

    
    const dispatch=useDispatch();

    const guestDetails = {
        adult:options.adult,
        children:options.children,
        room : options.room
    }
   
    // function guestdoneFun(){
    //     var x = document.getElementById("guestselect");
    //     if (x.style.display === "block") {
    //       x.style.display = "none";
    //     } else {
    //       x.style.display = "block";
    //     }
    // }
    return <>  
    <div className="guest_details">
        <div className="row m-0">
        <div className="col-6">
            <label>Adults</label>
        </div>
        <div className="col-6">
            <div className="plus_minus">
            <button 
            disabled={options.adult<=1}
            onClick={()=>handleOption('adult', 'd')}>-</button>
            <input value={options.adult}/>
            <button 
            disabled={options.adult>=30}
            onClick={()=>handleOption('adult', 'i')}>+</button>
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
            disabled={options.children<=0}
            onClick={()=>handleOption('children', 'd')}>-</button>
            <input value={options.children}/>
            <button 
            disabled={options.children>=30}
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
            disabled={options.room<=1}
            onClick={()=>handleOption('room', 'd')}>-</button>
            <input value={options.room}/>
            <button 
            disabled={options.room>=30}
            onClick={()=>handleOption('room', 'i')}>+</button>
            </div>
        </div>
        <div className="col-6">
            
        </div>
        <div className="col-6">
           <div className="submit_guest">
                <button onClick={()=>dispatch(guestdoneFun(guestDetails))}> Done</button>
           </div>
        </div>
        </div>
    </div>
    {/* <div className="guest_details">
        <div className="row m-0">
        <div className="col-4">
            <label>Room</label>
            <div className="plus_minus">
            <button >-</button>
            <input value='1'/>
            <button >+</button>
            </div>
        </div>
        <div className="col-2">
            <div className="guestcount">
            <label>Adults</label>
            <select>
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            <option >5</option>
            <option >6</option>
            </select>
            </div>
        </div>
        <div className="col-2">
            <div className="guestcount">
            <label>Childs</label>
            <select value={child} onChange={(e)=>{(setChild(e.target.value))}} >
            <option >0</option>
            <option >1</option>
            <option >2</option>
            </select>
            </div>
        </div>

        

      {(() => {
        switch (child) {
          case '1':
            return   <div className="col-2">
            <div className="guestcount">
            <label>Child-1</label>
            <select>
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            <option >5</option>
            <option >6</option>
            <option >7</option>
            <option >8</option>
            <option >9</option>
            <option >10</option>
            <option >11</option>
            <option >12</option>
            </select>
            </div>
        </div>
          case '2':
            return   <div className="col-2">
            <div className="guestcount">
            <label>Age-2</label>
            <select>
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            <option >5</option>
            <option >6</option>
            <option >7</option>
            <option >8</option>
            <option >9</option>
            <option >10</option>
            <option >11</option>
            <option >12</option>
            </select>
            </div>
        </div>
          default:
            return null
        }
      })()}
      
      
    </div>
</div> */}
    </>
} 




 