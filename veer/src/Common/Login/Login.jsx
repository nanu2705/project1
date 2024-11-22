import React, { useContext } from 'react'
import * as Yup from 'yup';
import MyContext from '../Context/MyContext';
import axios from 'axios'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import './Login.scss';
import img from '../../Assets/images/visa login.png'
import { RxCross2 } from "react-icons/rx";


const Login = () => {
  
  const { handleLogin,isOpen,setIsOpen,setMsg, setLoading, setSneck,url } = useContext(MyContext)

   // Form validation schema using Yup
   const validationSchema = Yup.object({
    email: Yup
    .string('Enter your email')
    .matches(/^\S*$/, 'email cannot contain whitespace')
    .email('Invalid email format')
    .required('*Email is required*'),
   
    password: Yup
    .string('Enter the password')
    .min(8,'password atleast 8 charcter')
    .required('*Password is required*'),
  });

  // Initial form values
  const initialValues = {
   email:"",
   password:"",
  };

    // Form submission handler
    const onSubmit = async (values, { resetForm }) => {
      try {
  
        setLoading(true)
       document.querySelector('body').style.overflow = 'hidden'
        const { data } = await axios.post(`${url}/login`, values)
        console.log(data)

        
        if (data.success) {
         handleLogin(data)
          
          // alert(data.message)
          resetForm()
         
        } else {
          setSneck(true)
          setMsg(data.error)
        }
  
      } catch (error) {
        console.log(error.message)
        setSneck(true)
        setMsg("Something went wrong can't login")
  
      } finally {
        document.querySelector('body').style.overflow = 'auto'
        setLoading(false)
      }
  
    };
  return (
  
    <div className="login-main">
      

   <Drawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      direction="right"
      className="bla bla bla"
      overlayOpacity={0.1}
      lockBackgroundScroll={true}
      size={400}
    >
        <span  onClick={()=>setIsOpen(false)}> <RxCross2 size={"25px"} /></span>
       <h4>  Login Page</h4>
      
       <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >

          <Form className="login-form">
             
               <div className="form">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" placeholder="Enter your email" className="field" />
                <ErrorMessage name="email" component="div" className="error" />
                </div>

                <div className="form">
                <label htmlFor="email">Password</label>
                <Field type="password" id="password" name="password" placeholder="Enter your password" className="field" />
                <ErrorMessage name="password" component="div" className="error" />
                </div>
           

              <button type="submit" className="submit-button">Submit</button>

              {/* <div className="register-page">Don't have account? &nbsp;<span onClick={() =>setIsOpen(false) || setRopen(true)}>Register</span> </div> */}
            </Form>
      </Formik>

           <div className="login-image">  <img src={img} alt="" /></div>
      
      </Drawer>
    </div>
  )
}

export default Login
