import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/042.jpg";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container nav_bg">
                    <div className="row">
                        <div className="col-md-6 justify-content-center flex column text-center">
                            <h2>
                               {props.name}
                            </h2>
                            <h7 className="mb-3">
                            {props.name2}
                            </h7>
                            <div className="my-3">
                                <NavLink to={props.visit} className="btn-get-started">{props.btn}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-image">
                            <img src={props.imgsrc} className="img-fluid animated " alt="home img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common ;