import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import AdminManage from './AdminManage'
import Items from './Items'
import Main from './Main'
import Register from './Register'
import StaffLogin from './StaffLogin'
import Userlogin from './Userlogin'
import { useState } from 'react'
import Cart from './Cart'
import Payment from './Payment'
export default function DishRouteTable() {
  const [details, setdetails] = useState([])
  const [cart, setcart] = useState([])
  function handleAddToCart(e){
    alert("Item Added to Cart");
    fetch(`http://fakestoreapi.com/products/${e.target.id}`)
    .then(response=> response.json())
    .then(data=>{
        cart.push(data);
    })
}
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/user" element={<Userlogin/>}/>
            <Route path="/items" element={<Items handleAddToCart={handleAddToCart}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/staff" element={<StaffLogin/>}/>
            <Route path="/admin" element={<AdminLogin/>}/>
            <Route path="/manage" element={<AdminManage/>}/>
            <Route path="/cart" element={<Cart cart={cart}/>}/>
            <Route path="/payment" element={<Payment/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
