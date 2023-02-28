import React from "react";

export default function FilterData(){

    return <>
        
            <div className="row m-0 filter-sec">
                <div className="col-md-12"> 
                       <div className="filter-list">
                        <h4>Price</h4>
                            <div className="filter-type">
                            <h6>$ 0 - $ 1000</h6>
                            <input type="range"/>
                            </div> 
                    </div>
                    <div className="filter-list">
                        <h4>Hotel Name</h4>
                            <div className="filter-type searchf"> 
                            <input placeholder="Search..." type="text"/><button><i className="fa fa-angle-down"></i></button>
                            </div> 
                    </div>
                    <div className="filter-list">
                        <h4>Star Rating</h4>
                            <div className="filter-type"> 
                            <label className="starstabs">
                            <input type="checkbox"/>  
                             <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            </label>
                            <label className="starstabs">
                            <input type="checkbox"/>  
                             <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            </label>
                            <label className="starstabs">
                            <input type="checkbox"/>  
                             <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            </label>
                            <label className="starstabs">
                            <input type="checkbox"/>  
                             <i className="fa fa-star checked"></i>
                            <i className="fa fa-star checked"></i>
                            </label>
                            <label className="starstabs">
                            <input type="checkbox"/>  
                             <i className="fa fa-star checked"></i>
                            </label>
                            </div> 
                    </div>
                </div>
            </div> 
    </>
}