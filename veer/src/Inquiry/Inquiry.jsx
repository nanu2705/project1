import React, { useContext } from 'react'
import './Inquiry.scss'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MyContext from '../Common/Context/MyContext';
import axios from 'axios';

const Inquiry = () => {

    const { setMsg, setLoading, setSneck, url } = useContext(MyContext)

    // Initial form values
    const initialValues = {
        name: "",
        mobileNo: "",
        visaType: "",
        country: ""
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        mobileNo: Yup.string().required('MobileNo is required'),
        visaType: Yup.string().required('VisaType is required'),
        country: Yup.string().required('Country is required'),

    });

    const onSubmit = async (values, { resetForm }) => {
        console.log('Submitting values:', values);
        try {
            setLoading(true)
            document.querySelector('body').style.overflow = 'hidden'
            const { data } = await axios.post('/inquiry', values)
           
            console.log('API Response:', data);
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
            setMsg("Something went wrong ")
        } finally {
            document.querySelector('body').style.overflow = 'auto'
            setLoading(false)
        }
    }

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form className="inquiry">
                <div className='form-inputs'>
                    <div className="form-input">
                        <label htmlFor="name">Name</label>
                        <Field type="text" id="name" name="name" placeholder="Name" />
                        <ErrorMessage name="name" component="div" className="error" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="mobileNo">MobileNo</label>
                        <Field type="text" id="mobileNo" name="mobileNo" placeholder="MobileNo" />
                        <ErrorMessage name="mobileNo" component="div" className="error" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="visaType">VisaType</label>
                        <Field as="select" name="visaType">
                            <option value="" label="Select Visa type" disabled/>
                            <option value="Student-Visa" label="Student-Visa" />
                            <option value="Visitor-Visa" label="Visitor-Visa" />
                            <option value="Work-Visa" label="Work-Visa" />
                        </Field>
                        <ErrorMessage name="visaType" component="div" className="error" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="country">Country</label>
                        <Field as="select" name="country">
                            <option value="" label="Select Country" disabled />
                            <option value="Canada" label="Canada" />
                            <option value="United-Kingdom" label="United-Kingdom" />
                            <option value="USA" label="USA" />
                            <option value="Australia" label="Australia" />
                            <option value="France" label="France" />
                            <option value="Germany" label="Germany" />
                            <option value="Europe" label="Europe" />
                        </Field>
                        <ErrorMessage name="country" component="div" className="error" />
                    </div>
                    <div className='send-btn'>
                        <button type="submit">Send Request</button>
                    </div>
                </div>


            </Form>
        </Formik>

    )
}

export default Inquiry