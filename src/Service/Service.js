import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({service}) => {
    const {_id, name, description, img, price } =service;
    return (
        <div class="col">
    <div class="card text-center">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><h2>{name}</h2></h5>
        <h5 class="card-text">{description}</h5>
        <h3 class="card-text"> Price:{price}</h3>

        <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary">Order Now</button>
            </Link>
      </div>
    </div>
  </div>
        
    );
};

export default Service;



{/* <div className ="service pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p className="p-3">{description}</p>
            <Link to={`/booking/${id}`}>
            <button className="btn btn-primary">Details</button>
            </Link>
           
        </div> */}