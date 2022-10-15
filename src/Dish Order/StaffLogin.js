import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from "yup"
export default function StaffLogin() {
    const formik=useFormik({
        initialValues:{
          Name:"",
          Password:"",
        },
        validationSchema:yup.object({
          Name:yup.string().required("Please Enter Name"),
          Password:yup.string().required("Please Enter Password")
        }),
        onSubmit:values=>{
          alert(JSON.stringify(values))
        }
    })
    return (
      <div className='text-center'>
        <h2 className='text-center text-success'>Staff</h2>
        <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>UserName</dt>
          <dd><input {...formik.getFieldProps("Name")}/></dd>
          <dt>Password</dt>
          <dd><input {...formik.getFieldProps("Password")} type="password"/></dd>
          <Link to="/items"><button className='btn btn-info'>Login</button></Link>
         </dl>
        </form>
  
      </div>
    )
}
