import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './Register.scss'
import img from '../../Assets/images/visa login.png'
import { RxCross2 } from "react-icons/rx";

const Register = () => {

    const{setMsg,setSneck,setLoading,ropen,setRopen,setIsOpen,url} =useContext(MyContext)

     // Form validation schema using Yup
   const validationSchema= Yup.object({
      name: Yup
      .string("Enter your Name")
      .required("*Name is required*")
      .matches(/^([^0-9]*)$/, "*Numbers are not allowed*"),
      email: Yup
      .string('Enter your email')
      .matches(/^\S*$/, '*Whitespace not allow*')
      .email('*Enter a valid email*')
      .required('*Email is required*'),
     
      mobile: Yup
      .string("Enter your Mobile.No")
      .required('*Mobile number  required*')
      .matches(/^\S*$/, '*Whitespace not allow*')
      .matches(/^[0-9]{10}$/, "*Mobile number  not valid*"),

      password: Yup
      .string('Enter the password')
        .min(8,'*Password atleast 8 charcter*')
        .matches(/^\S*$/, '*Whitespace not allow*')
        .min(8, "*Min 8 characters require*")
        .max(12,"*Max 12 character require*")
        .required('*Password is required*'),
        
      
      
      })

    // Initial form values
    const initialValues = {
      name:"",
      email:"",
      mobile:"",
      password:"",
     };

      // Form submission handler
    const onSubmit = async (values, { resetForm }) => {
      try {
  
        setLoading(true)
      
        const {data } = await axios.post(`${url}/register`, values)
        

        
        if (data.success) {
          setMsg(data.message)
          setSneck(true)
          // alert(data.message)
          resetForm()
          setRopen(false)
          setIsOpen(true)
        } else {
          setSneck(true)
          setMsg(data.error)
        }
  
      } catch (error) {
        console.log(error.message)
        setSneck(true)
        setMsg("Something went wrong can't register")
  
      } finally {
        
        setLoading(false)
        setIsOpen(true)
      }
  
    };

  return (
   <div className="register-main">
    <Drawer
    open={ropen}
    onClose={() => setRopen(false)}
    direction="right"
    className="bla bla bla"
    overlayOpacity={0.1}
    lockBackgroundScroll={true}
    size={400}
  >

<span  onClick={()=>setRopen(false)}> <RxCross2 size={"25px"} /></span>
      <h4>Registration Page</h4>
    <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >

<Form className="register-form">
             
             <div className="form">
             <label htmlFor="name">Name</label>
             <Field type="name" id="name" name="name" placeholder="Enter your name" className="field"/>
             <ErrorMessage name="name" component="div" className="error" />
             </div>

             <div className="form">
             <label htmlFor="email">Email</label>
             <Field type="email" id="email" name="email" placeholder="Enter your email" className="field"/>
             <ErrorMessage name="email" component="div" className="error" />
             </div>

             <div className="form">
             <label htmlFor="mobile">Mobile</label>
             <Field type="mobile" id="mobile" name="mobile" placeholder="Enter your mobile" className="field" />
             <ErrorMessage name="mobile" component="div" className="error" />
             </div>

             <div className="form">
             <label htmlFor="email">Password</label>
             <Field type="password" id="password" name="password" placeholder="Enter your password" className="field" />
             <ErrorMessage name="password" component="div" className="error" />
             </div>
        

           <button type="submit" className="submit-button">Submit</button>

           <div className="register-page">Already have account? &nbsp;<span onClick={()=>setRopen(false) || setIsOpen(true)}>Login</span> </div>
         </Form>
      </Formik>
     
      <img src={img} alt="" />
 </Drawer>
   
 </div>
  )
}

export default Register