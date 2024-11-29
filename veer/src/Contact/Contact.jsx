import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.scss';
import axios from 'axios'
import MyContext from '../Common/Context/MyContext';
import { Helmet } from 'react-helmet-async';


const Contact = () => {
  const { setMsg, setLoading, setSneck ,url} = useContext(MyContext)

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required').min(10, 'minimum 10 character is required'),
  });

  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };


  // Form submission handler
  const onSubmit = async (values, { resetForm }) => {
    try {

      setLoading(true)
      document.querySelector('body').style.overflow = 'hidden'
      const { data } = await axios.post(`${url}/contact`, values)
      console.log(data)
      if (data.success) {
        setMsg(data.message)
        setSneck(true)
        // alert(data.message)
        resetForm()
      } else {
        setSneck(true)
        setMsg(data.error)
      }

    } catch (error) {
      console.log(error.message)
      setSneck(true)
      setMsg("Something went wrong can't contact")

    } finally {
      document.querySelector('body').style.overflow = 'auto'
      setLoading(false)
    }

  };

  return (


    <div className="contact-mainn">


<Helmet>
        <title>Contact</title>
        <meta name="We’d love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help. Use the form below to send us a message, or reach out via email or phone.
                If you're looking for support, please provide as much detail as possible so we can assist you better. For inquiries, we’ll respond within 1-2 business days." content="Contact page" />
      </Helmet>
      <h3>Let's Talk</h3>
    
  
      <div className='con'>
        <div className="anim">
          <svg className="pentagon-border outer-pentagon" viewBox="0 0 100 100">
            <polygon points="50,1 98,38 79,95 21,95 2,38" stroke="red" strokeWidth="0.4" fill="none" />
          </svg>
          <svg className="pentagon-border inner-pentagon" viewBox="0 0 100 100">
            <polygon points="50,1 98,38 79,95 21,95 2,38" stroke="red" strokeWidth="0.4" fill="none" />
          </svg>
          <svg className="pentagon-border inner1-pentagon" viewBox="0 0 100 100">
            <polygon points="50,1 98,38 79,95 21,95 2,38" stroke="red" strokeWidth="0.4" fill="none" />
          </svg>
          <svg className="pentagon-border inner2-pentagon" viewBox="0 0 100 100">
            <polygon points="50,1 98,38 79,95 21,95 2,38" stroke="red" strokeWidth="0.4" fill="none" />
          </svg>
          <svg className="pentagon-border inner3-pentagon" viewBox="0 0 100 100">
            <polygon points="50,1 98,38 79,95 21,95 2,38" stroke="red" strokeWidth="0.4" fill="none" />
          </svg>
        </div>

        <div className="form-container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >

            <Form className="contact-form">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" placeholder="Enter Your name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" placeholder="abc@gmail.com" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <Field as="textarea" id="message" name="message" placeholder="Enter Message here..." />
                <ErrorMessage name="message" component="div" className="error" />
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </Form>

          </Formik>
        </div>

      </div>
    </div>
  );
};

export default Contact;

