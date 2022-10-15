import React from 'react'
import Navbar from './Navbar'
import "./Projects.css"
export default function Projects() {
  return (<>
        <Navbar/>
        <h2 className='text-danger text-center'>SKILLS</h2>
        <hr/>
        <span className='m-4'>I do have some technical skills in frontend web development,they are </span>
        <br/>
        <img height="600px" width="100%" src={require("./tools1.png")}/>
        <div className="container">
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="progress blue">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">HTML</div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="progress blue">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">CSS</div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="progress yellow">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">Bootstrap</div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="progress pink">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">Javascript</div>
            </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <div className="progress green">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">ReactJS</div>
            </div>
        </div>

    </div>
</div>
    <br/>
<div className="container" >
  <div id="content4">
      <div className="text14">WHAT CAN I DO?</div>
      <div className="text15">How I can Help in Your Next Project?</div>
      <div className="content4box" style={{marginLeft:"400px"}}>
           <div className="text16">
             <img src="https://i.ibb.co/4Z3Tkbg/desktop-2-64.jpg"/>
             <h5>Web Design & Development</h5>
           </div>
      </div>
      <div className="content4box">
        <div className="text16">
            <img src="https://i.ibb.co/4SdBJVq/website-optimization-2-64.png"/>
            <h5>Creative Design</h5>
          </div>
      </div>
      <div className="content4box">
        <div className="text16">
            <img src="https://i.ibb.co/Kj13RxC/js-64.png"/>
            <h5>JavaScript Programming</h5>
          </div>
      </div>
      <div className="content4box">
        <div className="text16">
            <img src="https://i.ibb.co/Kj13RxC/js-64.png"/>
            <h5>React js</h5>
          </div>
      </div>
  </div>
</div>
<br/>
<br/>
<br/>
<h5 className='text-center' style={{color:"red"}}>PROJECTS</h5>
    <h6 className="container">I did many projects,some of them are,  </h6>
       <a href="https://avijit5442.github.io/bootstrap-web/">
       <div id="project1" className="project_box">
          
             <button id="watch1" className="text-danger ">Book web</button>
          
        </div>  
      </a> 
      <a href="https://avijit5442.github.io/food-store-web">
        <div id="project2" className="project_box">
          
             <button id="watch2" className="text-danger">Food store</button>
          
        </div>
      </a>
      <a href="https://avijit5442.github.io/html-css-js">
        <div id="project3" className="project_box">
          
            <button id="watch3" className="text-danger">validation</button>
          
        </div>
      </a>

      <a href="https://avijit5442.github.io/cursor-mover">
        <div id="project4" className="project_box">
          
             <button id="watch4" className="text-danger">move</button>
          
        </div>
      </a>
      <a href="https://avijit5442.github.io/calculator/">
        <div id="project5" className="project_box">
          
              <button id="watch5" className="text-danger">Math calculator</button>
          
        </div>   
      </a>

      <a href="https://avijit5442.github.io/js-clock/">
        <div id="project6" className="project_box">
          
             <button id="watch6" className="text-danger">clock</button>
        
        </div>
      </a>


      <a href="https://avijit5442.github.io/clock_js/">
        <div id="project7" className="project_box">
            <button id="watch7" className="text-danger">clock</button>
        </div>
      </a>
      <a download href={require("./SHOPPING APP PROJECT.pptx")}>
        <div id="project8" className="project_box">
               <button id="watch8" className="text-danger">Others</button>
        </div>
      </a>
  </>
  )
}
