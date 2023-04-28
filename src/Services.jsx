import React from "react";
import web from "./img/images.jpeg";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import Sdata from "./Sdata.js";
const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {/* <Card />
              <Card />
              <Card />
              <Card />
              <Card /> */}
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
