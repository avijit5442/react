import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div>
      <div style={{width:"100%",height:"60px"}} className=" container bg-danger d-flex justify-content-between">
         <div><h2 className='text-success'>Zomato Restaurant</h2></div>
         <div className='d-block my-2'>
          <Link to="user"><button className='btn btn-info '>User</button></Link>
          <Link to="staff"><button className='btn btn-info mx-4'>Staff</button></Link>
          <Link to="admin"><button className='btn btn-info'>Admin</button></Link>
         </div>
      </div>
      <img src=''/>
    </div>
  )
}
