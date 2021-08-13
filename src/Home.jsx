import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/042.jpg";

const Home =() => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex column"></div>
                    <div className="row">
                    <h2>
                      <i>Adventure Awaits!</i>  
                    </h2>
                    <h7 className="my-3">
                        Explore the world with <strong className="brand-name"> Trouvaille </strong>
                    </h7>
                    <div className="mt-3">
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={web} className="img-fluid animated " alt="home img"/>
                    <NavLink to="/Destinations" className="btn-get-started">Get Started</NavLink>
                </div>
                </div>
                </div>
            </div>
            </div>
                
        </section>
        </>
    );
};

export default Home;