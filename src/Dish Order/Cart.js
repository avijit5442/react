import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
export default function Cart(props) {
  const navigate=useNavigate()
  //Set price
  let total=0;
  props.cart.map((old)=>{
    total+=old.price
  })
  function handlePay(){
       navigate("/payment")
  }
  return (
    <div className='container'>
    
        <table className='table table-hover table-bordered table-dark bg-dark'>
              {
                props.cart.map((product)=>
                <>
                <tr>
                  <td><img src={product.image} height="100px" width="100px"/></td>
                  <td>{product.title}</td>
                  <td>&#8377;{product.price}</td>
                </tr>
                </>)
              }
        </table>
        <div className='text-center text-danger'>
                <p>Delivery charge : &#8377; 20</p>
                <p>cost : &#8377; {total}</p>
                <p>Tax : &#8377; {parseInt(total)*12/100}</p>
                <h2>Total : &#8377; {Math.round((total)+(parseInt(total)*12/100)+20)}</h2>
        </div>
    
        <button className='btn btn-info' onClick={handlePay} style={{float:"right"}}>Payment</button>

    </div>
  )
}
