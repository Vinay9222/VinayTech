import React, { useState } from "react";
import "./index.css";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const formState = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone}. My emil id is ${data.email}. My msg is ${data.msg}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formState}>
              <div className="form-group">
                <label for="exampleInputEmail1">FullName</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your email"
                />
                <label for="exampleInputEmail1">Phone No</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Message</label>
                <textarea
                  className="form-control"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  id="exampleInputPassword1"
                  rows="3"
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
