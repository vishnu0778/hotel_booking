
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
// import React, { useEffect, useState } from "react"; 
// import Carousel from 'react-elastic-carousel'

export default function HotelRating(){
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];


      const rating=[{
        name:"Rahul Kumar",
        profile:"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
        location:"India",
        review:"“Had a mind blowing experience the staff were very good they served the breakfast well everything was awesome”"
      },
      {
        name:"Sandhya Kumar",
        profile:"https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        location:"India",
        review:"“Had a mind blowing experience the staff were very good they served the breakfast well everything was awesome”"
      },
      {
        name:"Raju Kumar",
        profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrlH9QlMjus9pQY0IPfd97FE7RdNVga3MY-lMqsaltgspxx3q_-Bg6wcOJDYGnPy1gIU&usqp=CAU",
        location:"India",
        review:"“Had a mind blowing experience the staff were very good they served the breakfast well everything was awesome”"
      },{
        name:"Mahesh Kumar",
        profile:"https://media.istockphoto.com/id/1285124274/photo/middle-age-man-portrait.jpg?b=1&s=170667a&w=0&k=20&c=KhPF9mKKw1wKQvzo15nqBakjHjmcf86tGCW3Je9DOGQ=",
        location:"India",
        review:"“Had a mind blowing experience the staff were very good they served the breakfast well everything was awesome”"
      },{
        name:"Vijay Kumar",
        profile:"https://blog.photofeeler.com/wp-content/uploads/2016/02/tips-that-make-men-women-look-more-attractive-in-dating-profile-photos.jpg",
        location:"India",
        review:"“Had a mind blowing experience the staff were very good they served the breakfast well everything was awesome”"
      },{
        name:"Sachin Kumar",
        profile:"https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg",
        location:"India",
        review:"“Had a mind blowing experience the staff were very good they served the breakfast well everything was awesome”"
      },{
        name:"Runi Kumar",
        profile:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        location:"India",
        review:"“Had a mind blowing experience the staff were very good they served the breakfast well everything was awesome”"
      },{
        name:"Priya Kumar",
        profile:"https://images.unsplash.com/photo-1553975969-e43c7b4d75fd?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy",
        location:"India",
        review:"“Had a mind blowing experience the staff were very good they served the breakfast well everything was awesome”"
      }
    ]

      
    return <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-3 mb-3"> 
                        <div className="packages-slider"> 
                            {/* {console.log(multidata[0].id,'multidata')} */}
                            <Carousel breakPoints={breakPoints}>
                           {rating?.map((user, key) => (
                            <div key={key} className="rating-details">
                               <div className="bg-grey">
                               <div className="reviewer">
                                <img src={user.profile}/>
                                <div className="namelocation">
                                    <h4>{user.name}</h4>
                                    <label> <i className="fa fa-map-marker"></i> {user.location}</label>
                                </div> 
                                </div>
                                <p>{user.review}</p>
                               </div>
                            </div>  
                             ))} 
                            </Carousel> 
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    </>
}