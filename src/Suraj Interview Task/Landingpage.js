import axios from "axios"
import { useRef, useState,useEffect } from "react"

const Landingpage=()=>{
const [products, setproducts] = useState([])
const [results, setresults] = useState([])
let [change, setchange] = useState(1)
let [data, setdata] = useState({})
const myref=useRef()
const searchResult=useRef()
const Error=useRef()
const All=useRef()
//change & previous button
let handleNext=()=>{
  setchange(change++)
}
let handlePrev=()=>{
  setchange(change++)
}
//main calling method
useEffect(()=>{
  axios.get(`https://api.jikan.moe/v4/characters?page=${change}`)
  .then((response)=>
  setproducts(response.data.data))
},[])
//search functionality
    let handleClick=()=>{ 
      let search=myref.current.value
      searchResult.current.style.display="block"
      All.current.style.display="none"
      axios.get(`https://api.jikan.moe/v4/characters?q=${search}`)
      .then((response)=>{
        if(response.data.data==""){
          Error.current.style.display="Block"
          myref.current.value=""
          myref.current.focus()
        }
        else{
          Error.current.style.display="None"
          searchResult.current.style.display="block"
          setresults(response.data.data)
          myref.current.value=""
          myref.current.focus()
        }
      })
    }
    //page change
axios.get(`https://api.jikan.moe/v4/characters?page=${change}`)
.then((response)=>{
  setdata(response.data.pagination)
})
    return(
        <div className="container">
        <div className="text-center my-4">
        <input ref={myref}type="text" style={{height:"10vh",width:"40vw"}}/>
        <button onClick={handleClick} className="btn btn-danger mx-2 mb-2">Search</button>
        </div>
        <div className="row" ref={All}>
        {
          products.map((products)=>
          <div className="card col-2">
          <img className="card-img-top" src={products.images.jpg.image_url} style={{height:"200px",width:"200px"}}/>
          <p className="card-head text-center">{products.name}</p> 
          <span className="bi bi-heart-fill text-danger"><span className="card-body">{products.favorites}</span></span>
          <a href={products.url}><p className="card-body text-danger">Know more</p></a>
          </div>
        ) 
        }
        </div>
        <div ref={searchResult} className="row" style={{display:"none"}}>
        {
          results.map((products)=>
          <div className="card col-2">
          <img className="card-img-top" src={products.images.jpg.image_url} style={{height:"200px",       width:"200px"}}/>
          <p className="card-head text-center">{products.name}</p> 
          <p className="bi bi-heart text-danger"><span className="card-body">{products.favorites}</span></p>
          <a href={products.url}><p className="card-body text-danger">Know more</p></a>
          </div>
          ) 
        }
        </div>

        <p ref={Error} className="text-center" style={{display:"none"}}>NOT AVAILABLE</p>

        <div className="d-flex justify-content-between my-4">
          <button onClick={handlePrev} disabled={change==1?true:false} className="btn btn-success">Previous</button>
          <button onClick={handleNext}disabled={data.has_next_page==false?true:false}className="btn btn-success">Next</button>
        </div>
      </div>
        
    )
}
export default Landingpage