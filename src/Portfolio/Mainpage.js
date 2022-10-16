import React from 'react'
import Navbar from './Navbar'
import "./Mainpage.css"
export default function Mainpage() {
  var i=0;
  var text="HTML,CSS,Bootstrap,Javascript,ReactJS.";

  function skills(){
    if(i<text.length){
      document.getElementById("skill").innerHTML+=text.charAt(i);
      i++
    } 
    if(i>=text.length){
      document.getElementById("skill").innerText="";
      i=0;
    }    
 
    setTimeout(skills,800)
  }  
  return (
<div onLoad={skills}>
  <Navbar/>
  <img style={{width:"100%",height:"600px"}} src={require("./peakpx.jpg")}/>
  <div className='text-danger mx-4' style={{float:"right",
                               position:"relative",
                               marginTop:"-200px",}}>
    <h1>
    Hi,I am an UI/UX <span className="type"></span>
    </h1>
  <em style={{color:"burlywood"}} id="skill"></em>
  <br/>
  <button className='btn btn-danger rounded-circle m-4'>Hire me</button>
 </div>
 <div>
  <br/>
  <br/>
  <h2 className='text-center text-info' style={{fontWeight:"bold"}}>Journey</h2>
      <h2 className='m-4 ' style={{position:"absolute"}}>
        Masters of Business Adminstration
     </h2>
     <br/>
     <br/>
     <br/>
     <br/>
     <h2 className='m-4 ' style={{position:"absolute"}}>
        Skills-:<span className='h5'>HTML,CSS,Bootstrap,Javascript,ReactJS,MongoDB</span>
     </h2>
  <div style={{borderLeft: "2px solid gray",
    height:"250px",
    marginLeft:"760px",
    marginTop:"-40px"}}>
      <h2 className='text-center text-danger'>Experience</h2>
      <span className='h5 m-4'>Fresher</span>
  </div>
 </div>
 <div >
 <iframe style={{width:"100%",height:"300px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29774.505260456517!2d86.32678536591631!3d21.12001395072077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c06cbcfb32073%3A0xc57e95a0e333f13f!2sTillo%2C%20Odisha%20756114!5e0!3m2!1sen!2sin!4v1660895662515!5m2!1sen!2sin" ></iframe>
 <hr/>
 </div>
</div>
  )
}

