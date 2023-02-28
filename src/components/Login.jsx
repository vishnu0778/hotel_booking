import React from "react";
import { Link } from "react-router-dom";

export default function Login(){

    return<>
        <section className="detail_bg pt-3 pb-3">
        <div className="container justify-content-center d-flex align-items-center">
            <div className="login-signup">
            <div className="W-100">
            <div className="row">
                <div className="col-md-6">
                <div className="login-sec mt-3 mb-3">
                <h2 className="fw-bold">Sign in</h2> 
                 <div class="login_input">
                     <input placeholder="Email"/>
                     <input placeholder="Password"/>
                     <Link>Forgot your password?</Link>
                 </div>
                 <button className="btnsubmit"><Link>SIGN IN</Link></button>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </section>
    </>
}