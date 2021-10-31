import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const Profile = () => {
  const{serviceId}=useParams();
    const {user}=useAuth();
    const [myOrder, setMyOrder]= useState([]);
    const [orderId, setOrderId]= useState('');



    useEffect(()=>{
      fetch('http://localhost:5000/AllOrder')
      .then(res=>res.json())
      .then(data=>setMyOrder(data));
      
    },[])

    //delete order

    const handleDeleteOrder = id =>{
      const  url = `http://localhost:5000/AllOrder${id}`
      fetch (url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then (data=>{

      })
    }
    const handledate= ()=>{
      const remainingOrder = myOrder.filter(order => order._id === serviceId)
      setMyOrder(remainingOrder);
    }
    // const allUserOrder =myOrder.filter(order => order.email ===user.email   )

    // console.log(allUserOrder);



    return ( <div className= "mx-auto  "> <h1> My Order</h1>
        {
        myOrder.map(selected=>(
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={selected.img} />
  <Card.Body>
    <Card.Title>{selected.name}</Card.Title>
    <Card.Text>
      {selected.description}
    </Card.Text>
    <Button onClick={()=>handleDeleteOrder(selected._id)} variant="primary">Delete</Button>
  </Card.Body>
</Card>








      //  <div>
      //       <img src={selected.img} alt="" />
      //    <h2>{selected.name}</h2>
      //    <p>{selected.description}</p>
      //    <h3>{selected.price}</h3>
      //    <button></button>
          

    
        ))
      }

    </div>

      

         
        
    );
};

export default Profile;