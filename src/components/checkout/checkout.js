import React, { useContext, useEffect, useState } from 'react'
import { Image,Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { AuthContext } from './../../contexts/userContext';

import './checkout.css'


const CheckOut = () => {
  const {user} =useContext(AuthContext)
  console.log(user)
  
  const [checkoutDetails, setCheckoutdetails] = useState([])

  const param = useParams()

  useEffect(()=>{
    const url = `https://eduraca-server.vercel.app/coursedetails/${param.id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => setCheckoutdetails(data))
  },[param])
  const {imageUrl,name,price } = checkoutDetails
  return (
    <div className='container col-6 offset-3 mt-5'>
      <div className="card card-checkout" style={{width:"18rem"}}>
        <Image src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Customer Name: {user?.displayName} </li>
          <li className="list-group-item">Email: {user?.email}</li>
          <li className="list-group-item">Price: {price}</li>
        </ul>
        <div className="card-body">
          <Button varient="primary" className='btn btn-lg offset-3 checkout-btn'>Buy</Button>
        </div>  
      </div>
    </div>
  )
}
export default CheckOut