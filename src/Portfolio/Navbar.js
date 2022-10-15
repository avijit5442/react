import { Link } from "react-router-dom"
import React from 'react'

export default function Navbar() {
  return ( 
    <div>
              <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
    <a className="navbar-brand">AVIJIT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="me-auto">
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link to="/home"><span className="nav-link" aria-current="page"><i className="bi bi-house-door"></i></span></Link>
        </li>
        <li className="nav-item mx-4">
          <Link to="/about"><span className="nav-link" aria-current="page" >About me</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/projects"><span className="nav-link" aria-current="page" >skills</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/contact"><span className="nav-link" aria-current="page" >Contact</span></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
