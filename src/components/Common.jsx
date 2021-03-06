import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../images/042.jpg";

const Common = (props) => {
    return (
        <>
                <div className="container mb-5" id="header">
                    <div className="row">
                        <div className="col-md-6 text-center mb-3 d-flex flex-column justify-content-center">
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
                        <div className="col-md-6 header-image">
                            <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Common ;