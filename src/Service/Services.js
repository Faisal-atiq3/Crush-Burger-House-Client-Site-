import React, { useEffect, useState } from 'react';
import Service from './Service';
import "./Services.css";

const Services = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    return (
       <div id="services container">
           <h2 className="text-primary mt-5">Our Available Services</h2>
            <div >
           <div className=" row row-cols-1 row-cols-md-3 g-4  ">
           {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
           </div>
           
        </div>
       </div>
    );
};

export default Services;