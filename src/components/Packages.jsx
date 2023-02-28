import axios from "axios";
import React, { useEffect, useState } from "react"; 
import Carousel from 'react-elastic-carousel'

export default function Packages(){
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];

      const [multidata, setMyltidata]=useState()

    async function PackageAPI(){
         let packData = await axios.get('https://fakestoreapi.com/products');
         setMyltidata(packData.data)
         console.log(packData,'packData')
    } 
   useEffect(()=>{
    PackageAPI()
   },[])
    return <>
        <section className="bg-package">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-3 mb-3">
                        <h3 className="mt-4 p-3">Hotel Booking Packages</h3>
                        <div className="packages-slider"> 
                            {/* {console.log(multidata[0].id,'multidata')} */}
                            <Carousel breakPoints={breakPoints}>
                           {multidata?.map((user, key) => (
                            <div key={key} className="packages-details">
                                <img src={user.image}/>
                                <div className="package-content">
                                <h4>{user.category}</h4> 
                                <p>{user.description.slice(0,85)}...</p>
                                <h4>Price : <b>${user.price}</b></h4>
                                <span>{user.rating.rate}</span>
                                </div>
                            </div>
                              
                            ))}
                            </Carousel>

                            
                            
                            
                        </div>
                        <h3 className="mt-4 p-3">Special Deal for you</h3>
                        <div className="packages-slider">

                            <Carousel breakPoints={breakPoints}>
                            <div className="packages-details">
                                <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"/>
                                <div className="package-content">
                                <h4>Maldives</h4>
                                <p>Lorem is a long established fact that a reader will be distracted by the re...</p>
                                <h4>Price : <b>$234.00</b></h4>
                                </div>
                            </div>
                            <div className="packages-details">
                                <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"/>
                                <div className="package-content">
                                <h4>Maldives</h4>
                                <p>Lorem is a long established fact that a reader will be distracted by the re...</p>
                                <h4>Price : <b>$234.00</b></h4>
                                </div>
                            </div>
                            <div className="packages-details">
                                <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"/>
                                <div className="package-content">
                                <h4>Maldives</h4>
                                <p>Lorem is a long established fact that a reader will be distracted by the re...</p>
                                <h4>Price : <b>$234.00</b></h4>
                                </div>
                            </div>
                            <div className="packages-details">
                                <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"/>
                                <div className="package-content">
                                <h4>Maldives</h4>
                                <p>Lorem is a long established fact that a reader will be distracted by the re...</p>
                                <h4>Price : <b>$234.00</b></h4>
                                </div>
                            </div>
                            <div className="packages-details">
                                <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"/>
                                <div className="package-content">
                                <h4>Maldives</h4>
                                <p>Lorem is a long established fact that a reader will be distracted by the re...</p>
                                <h4>Price : <b>$234.00</b></h4>
                                </div>
                            </div>
                            <div className="packages-details">
                                <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"/>
                                <div className="package-content">
                                <h4>Maldives</h4>
                                <p>Lorem is a long established fact that a reader will be distracted by the re...</p>
                                <h4>Price : <b>$234.00</b></h4>
                                </div>
                            </div>
                            </Carousel>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}