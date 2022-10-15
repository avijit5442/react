import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import {useCookies} from "react-cookie"
import axios from 'axios'
export default function UserLogin() {
  const navigate=useNavigate()
  const [cookies,setcookies,removecookies]=useCookies()
    const formik=useFormik({
        initialValues:{
          Name:"",
          Password:"",
        },
        onSubmit:values=>{
          const res=axios.post('https://ras-api-server.herokuapp.com/api/auth/login',{
          values
        })
          localStorage.setItem('tokenStore', values.Password); 
          setcookies("name",values.Name)
          navigate("/items")
        }
    })
    return (
      <div className='text-center'>
        <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>UserName</dt>
          <dd><input {...formik.getFieldProps("Name")}/></dd>
          <dt>Password</dt>
          <dd><input {...formik.getFieldProps("Password")} type="password"/></dd>
          <button className='btn btn-info'>Login</button>
          <Link to="/register"><p>create account</p></Link>
         </dl>
        </form>
  
      </div>
    )
}
