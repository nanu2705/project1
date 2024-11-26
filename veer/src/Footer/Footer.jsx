import React, { useContext } from 'react'
import './Footer.scss'
import { FaPhone } from "react-icons/fa6";
import MyContext from '../Common/Context/MyContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const Footer = () => {

    const { setMsg, setLoading, setSneck, Navigate, api, location ,url} = useContext(MyContext)


  

    const handleNavigation = (name, sname) => {
        window.open(`/service/${sname}/${name}`);
    }

    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    const onSubmit = async (values, { resetForm }) => {
        try {

            setLoading(true)
            document.querySelector('body').style.overflow = 'hidden'
            const { data } = await axios.post(`${url}/newsletter`, values)
            console.log(data)
            if (data.success) {
                setMsg(data.message)
                setSneck(true)
                resetForm()
            } else {
                setSneck(true)
                setMsg(data.error)
                resetForm()

            }

        } catch (error) {
            console.log(error.message)
            setSneck(true)
            setMsg("Something went wrong can't subscribe")

        } finally {
            document.querySelector('body').style.overflow = 'auto'
            setLoading(false)
        }

    }

    const loc=['/layout','/adminveer']

    if (loc.includes(location.pathname)) {
        return null
    }
   
    
    return (
        <>
            <footer>

                <div className='footer-part'>
                    <div className='f-content'>

                        <div className='fheading'>About</div>
                        <span className='f-line'></span>
                        <div className='f-item'>
                            <div className='logo' onClick={() => Navigate('/')}>Veer Consultancy</div>
                        </div>
                        <div className='f-item'>
                            <p>We provide best service for you</p>
                        </div>
                        <div className='f-item'>
                            <div className='c-btn' onClick={() => Navigate('/contact')}>
                                <div><FaPhone size={'12px'} /></div>
                                <span>Contact Us</span> 
                            
                            </div>
                        </div>
                      
                    </div>
                    <div className='f-content'>
                        <div className='fheading'>Study Abroad</div>
                        <span className='f-line'></span>
                        {
                            api.filter((i, index) => index === 0).map((item) => {
                                return (
                                    <>
                                        {
                                            item.country.map((country, index) => {
                                                return (
                                                    <div key={index} className='f-item' onClick={() => handleNavigation(country.name, item.name)}>
                                                        <span>Study in {country.title}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })

                        }

                    </div>
                    <div className='f-content'>
                        <div className='fheading'>Visitor Visa</div>
                        <span className='f-line'></span>
                        {
                            api.filter((i, index) => index === 1).map((item) => {
                                return (
                                    <>
                                        {
                                            item.country.map((country, index) => {
                                                return (
                                                    <div key={index} className='f-item' onClick={() => handleNavigation(country.name, item.name)}>
                                                        <span>Visit {country.title}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })

                        }

                    </div>
                    <div className='f-content'>
                        <div className='fheading'>Stay tuned</div>
                        <span className='f-line'></span>

                        <div className='f-item'>
                            <p>Subscribe to our newsletter and never miss our news</p>
                        </div>
                        <div className='f-item'>
                            <div className='newsletter'>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={onSubmit}
                                >
                                    <Form className='nform'>
                                        
                                        <div className="form-field">
                                            <Field type="email" id="email" name="email" placeholder="Your Email Address" />
                                            <ErrorMessage name="email" component="div" className="error" />
                                        </div>

                                        <button type="submit" className="nsubmit-button">SUBSCRIBE</button>
                                        
                                       

                                    </Form>


                                </Formik>

                            </div>
                        </div>
                        <div className='f-item'>
                            <p>©Immigration. All Rights Reserved 2024. Licensing</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer