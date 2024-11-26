import React, { useContext } from "react";
import "./Layoutbox.scss";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
import { Formik, Form, ErrorMessage } from "formik";
import MyContext from "../Context/MyContext";
import { MdCancel } from "react-icons/md";
import axios from "axios";


const Layoutbox = ({ servicename, countryname }) => {

  const {setPreview,preview, previewO,previewC,cname,url} =useContext(MyContext  )
  const validationSchema = Yup.object({
    photoproof: Yup.mixed().required("Photo ID is required"),
    dobproof: Yup.mixed().required("DOB Proof is required"),
    addressproof: Yup.mixed().required("Address Proof is required"),
    nonecr: Yup.mixed().required("NON-ECR Proof is required"),
  });

  const initialValues = {
    photoproof: null,
    dobproof: null,
    addressproof: null,
    nonecr: null,
  };

  const handleSubmit = async (values) => {
  
  
    const formData = new FormData();
    formData.append('photoproof', values.photoproof);
    formData.append('dobproof', values.dobproof);
    formData.append('addressproof', values.addressproof);
    formData.append('nonecr', values.nonecr);
         
    alert(JSON.stringify(formData, null, 2)); 
      // Log FormData content
      console.log('FormData contents:');
      for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value);
      }
  
    setPreview({ show:true, data: {
      photoproof: values.photoproof.name,
      dobproof: values.dobproof.name,
      addressproof: values.addressproof.name,
      nonecr: values.nonecr.name,
  },
});

    
       
    try {
      const { data } = await axios.post(`${url}/passport`,formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
    });
    console.log(data);
      alert('File uploaded successfully');
    
      } catch (error) {
      console.error('Error uploading file:', error);
      }

     
  };

  return (
    <div className="LayoutP-main">
      <Helmet>
        <title>{{servicename}/{countryname}}</title>
        <meta name="description" content="Layout page" />
      </Helmet>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="form-passport">
         
            <h3>Upload Documents</h3>
            <div className="form-box">
              <label htmlFor="photoproof">Photo Proof:</label>
              <input
                type="file"
                id="photoproof"
                name="photoproof"
                onChange={(event) =>
                  setFieldValue("photoproof", event.target.files[0])
                }
              />
              <ErrorMessage
                name="photoproof"
                component="div"
                className="error"
              />
            </div>

            <div className="form-box">
              <label htmlFor="dobproof">DOB Proof:</label>
              <input
                type="file"
                id="dobproof"
                name="dobproof"
                onChange={(event) =>
                  setFieldValue("dobproof", event.target.files[0])
                }
              />
              <ErrorMessage name="dobproof" component="div" className="error" />
            </div>

            <div className="form-box">
              <label htmlFor="addressproof">Address Proof:</label>
              <input
                type="file"
                id="addressproof"
                name="addressproof"
                onChange={(event) =>
                  setFieldValue("addressproof", event.target.files[0])
                }
              />
              <ErrorMessage
                name="addressproof"
                component="div"
                className="error"
              />
            </div>

            <div className="form-box">
              <label htmlFor="nonecr">NON-ECR Proof:</label>
              <input
                type="file"
                id="nonecr"
                name="nonecr"
                onChange={(event) =>
                  setFieldValue("nonecr", event.target.files[0])
                }
              />
              <ErrorMessage name="nonecr" component="div" className="error" />
            </div>

            <button onClick={previewO}>Submit</button>

            {preview?.show && (
        <div className="preview-container">
         <p onClick={previewC}><MdCancel /></p>  <h3>Preview Details</h3> 
         <span className="pre">
              <span>Passport Type</span> <p>{cname}</p>
            </span>
            <span className="pre">
              <span>Photo Proof:</span> <p>{preview.data.photoproof}</p>
            </span>
            <span  className="pre">
              <span>DOB Proof:</span> <p>{preview.data.dobproof}</p>
            </span>
            <span  className="pre">
              <span>Address Proof:</span> <p>{preview.data.addressproof}</p>
            </span>
            <span  className="pre">
              <span>NON-ECR Proof:</span> <p>{preview.data.nonecr}</p>
            </span>
        

         
        </div>
      )}
          </Form>
        )}
      </Formik>

     
    </div>
  );
};

export default Layoutbox;
