import axios from 'axios'
import React,{useState,useEffect} from 'react'
import jwtDecode from 'jwt-decode'
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
export default function Items(props) {
  const [products, setproducts] = useState([])
  const [product, setproduct] = useState([])
  const [cookies,setcookies,removeCookies]=useCookies()
  useEffect(()=>{
         axios.get("http://fakestoreapi.com/products")
         .then((response)=>setproducts(response.data.sort((a,b)=>a.title.localeCompare(b.title))))
  },[])
  return (
    <div>

<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <h2 className="navbar-brand" href="#">Hello {cookies["name"]}</h2>
  </div>
  <Link to="/cart"><div>Go to Cart</div></Link>
</nav>

      <div className='row '>
      {
      products.map((items)=> 
      <div key={items._id}className='card col-11 m-2 p-2' >
      <h4 className='card-head text-center text-success'>{items.title}</h4>
      <div className='d-flex justify-content-center'>
      <img className='card-img-top ' src={items.image} style={{height:"200px",width:"200px"}}/>
      </div>
      <p className='card-body text-center'>{items.description}</p>
      <div className='d-flex justify-content-between'>
      <button id={items.id} className='btn btn-primary'>Buy</button>
      <button id={items.id} onClick={props.handleAddToCart} className='bi bi-cart btn btn-warning'></button>
      </div>
      
      </div>
      )
      }
      </div>
      </div>
  )
}
