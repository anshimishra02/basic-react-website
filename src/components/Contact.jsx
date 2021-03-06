import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        destinations: "",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        }
        )
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}...My mobile number is ${data.phone}...My email address is ${data.email}...Destinations I'm interested in are ${data.destinations}`);

    };
    return (
        <>
            <div className='container contact-container' style={{marginTop:'5rem'}}>
                <h1 className="text-center py-3">Contact Us</h1>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div class="form-group mb-2">
                                    <label for="exampleFormControlInput1">Full Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        name="Name"
                                        value={data.fullName}
                                        onChange={InputEvent}
                                        placeholder="Enter Your Name" />
                                </div>
                                <div class="form-group mb-2">
                                    <label for="exampleFormControlInput1">Phone Number</label>
                                    <input type="numbers" class="form-control" id="exampleFormControlInput1"
                                        name="phone"
                                        value={data.phone}
                                        onChange={InputEvent}
                                        placeholder="Enter Your Phone Number" />
                                </div>
                                <div class="form-group mb-2">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                        placeholder="name@example.com" />
                                </div>
                                <div class="form-group mb-2">
                                    <label for="exampleFormControlTextarea1">Enter Destinations Of Your Choice</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        name="destinations"
                                        value={data.destinations}
                                        onChange={InputEvent}>
                                    </textarea>
                                </div>
                                <div className='text-center mt-3'><button type="submit" class="btn btn-outline-primary">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;