import React from 'react'
import Navbar from './Navbar'

export default function () {
  return (
    <>
    <div>
        <Navbar/>
        <h2 className='text-danger text-center'>Contact me</h2>

        <h4 className='m-4' style={{position:"absolute"}}>
        Email : avijitbehera01@gmail.com
        <br/>
        Mobile : +911234567890
        </h4>
        <div style={{borderLeft: "2px solid blue",
                     height:"250px",
                     marginLeft:"760px",
                     position:"fixed",
                     fontFamily:"monospace" }}>
                  <div className='m-4'>
          <pre><b>Name</b>    :    Avijit Behera</pre>
          <pre><b>Age</b>     :    26Years</pre>
          <pre><b>From</b>    :    Bhadrak,Odisha</pre>
          <pre><b>Email</b>   :    avijitbehera01@gmail.com</pre>
      </div>
        </div>
        <h3 className='mx-4' style={{color:"blue"}}>Connect with me -</h3>
        
    </div>
    <br/>
    <br/>
    <a href="www.linkedin.com">
    <i className="bi bi-facebook m-4 h2"></i>
    <i className="bi bi-github m-4 h2"></i>
    <i className="bi bi-linkedin m-3 h2"></i>
    </a>
    <br/><br/><br/><br/><br/>
  <hr className='m-4'/>
  <div className='text-center'>
    <span>Developer Funnel </span>
    <span>2022 @ all rights reserved.</span>
    <span>Managed by-NIC</span>
  </div>
    </>

   
  )
}
