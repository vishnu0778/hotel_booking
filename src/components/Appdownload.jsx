import React from "react";
import downloadimgs from '../img/appdownload.jpg'

export default function Appdownload(){
    return <>
        <section>
            <div className="container">
            <div className="row mt-3 justify-content-center">
            <div className="col-12 mt-5 mb-4 downloadapps">
            <img src={downloadimgs} /> 
            </div>
            </div>
            </div>
        </section>
    </>
}