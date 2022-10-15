import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import Mainpage from './Mainpage'
import Projects from './Projects'
export default function PortfolioRoutes() {
  return (
    <div>
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<Mainpage/>}/>
            <Route path="/home" element={<Mainpage/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
         </Routes>
         </BrowserRouter>
    </div>
  )
}
