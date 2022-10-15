import React from 'react'
import Navbar from './Navbar'

export default function About() {
  return (
    <div>
      <Navbar/>
        <h2 className='text-danger text-center'>About me </h2>
        <h4 className='container'>I am a post graduate and have skills on HTML,CSS,Bootstrap,Javascript,ReactJS . I am looking for working in an organisation where I can utilize my skills and also can push start my career growth.

        </h4>
        <h3 className='m-4 text-success'>I can do help in following areas</h3>
        <div className='row container m-4'>
          <div className="col-3 m-4">
         
          </div>
          <div className="col-3 m-4">
          <img height="300px" width="250px" src={require("./WEB DEVELOPER.jpg")}/>
          </div>
          <div className="col-3 m-4">
          <img height="300px" width="250px" src={require("./designer-work.jpg")}/>
          </div>
     
        </div>
        <button className='btn btn-danger m-4'><a href={require("./AVIJIT BEHERA..1,latest.pdf")  }download style={{textdecoration:"none", color:"white"}}>Download CV</a></button>
   </div>
  )
}
