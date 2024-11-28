import React, { useContext } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Layoutbox.scss';
import MyContext from '../Context/MyContext';

const Layoutbox = () => {
  const { url, setLoading, setSneck, setMsg,Navigate} = useContext(MyContext);

 

  const initialValues = {
    file: null,
    file1: null,
    file2: null,
    file3: null,
  };

  const validationSchema = Yup.object().shape({
    file: Yup.mixed().required('Photo Id is required'),
    file1: Yup.mixed().required('DOB Proof is required'),
    file2: Yup.mixed().required('Address Proof is required'),
    file3: Yup.mixed().required('NON-ECR Proof is required'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append('file', values.file);
    formData.append('file1', values.file1);
    formData.append('file2', values.file2);
    formData.append('file3', values.file3);

    try {
      setLoading(true);
      const { data } = await axios.post(`${url}/passport`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (data.success) {
        setMsg(data.message);
        setSneck(true);
        resetForm();
      } else {
        setMsg(data.error);
        setSneck(true);
      }
     
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files');
    }finally {
      setLoading(false);
      Navigate('/')
      setSubmitting(false);
    }
   
  };

  return (
    <div className="LayoutP-main">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form className="form-passport">
            <div className="form-box">
              <label>Photo Proof:</label>
              <input
                type="file"
                name="file"
                accept="images/"
                onChange={(event) => setFieldValue('file', event.currentTarget.files[0])}
              />
              <ErrorMessage className="error" name="file" component="div" />
            </div>

            <div className="form-box">
              <label>DOB Proof:</label>
              <input
                type="file"
                name="file1"
                accept="images/"
                onChange={(event) => setFieldValue('file1', event.currentTarget.files[0])}
              />
              <ErrorMessage className="error" name="file1" component="div" />
            </div>

            <div className="form-box">
              <label>Address Proof:</label>
              <input
                type="file"
                name="file2"
                accept="images/"
                onChange={(event) => setFieldValue('file2', event.currentTarget.files[0])}
              />
              <ErrorMessage className="error" name="file2" component="div" />
            </div>

            <div className="form-box">
              <label>NON-ECR Proof:</label>
              <input
                type="file"
                name="file3"
                accept="images/"
                onChange={(event) => setFieldValue('file3', event.currentTarget.files[0])}
              />
              <ErrorMessage className="error" name="file3" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting} >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Layoutbox;
