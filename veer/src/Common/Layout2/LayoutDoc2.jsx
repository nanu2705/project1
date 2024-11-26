import React,{ useContext, useEffect} from 'react'
import './LayoutDoc2.scss'
import { FaCameraRetro } from "react-icons/fa";
import { GiPassport } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import MyContext from '../Context/MyContext';
import { GiConfirmed } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { Bs1CircleFill, Bs4CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import img1 from '../../Assets/images/userphoto.png'
import img3 from '../../Assets/images/isocerti.jpg'
import img2 from '../../Assets/images/passport-front.png'
import img4 from '../../Assets/images/passport-back.png'
import { TiTick } from "react-icons/ti";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';




const LayoutDoc2 = ({servicename, countryname}) => {

    const {cb,start,changephoto,changepassport,changedetails,selectedDate, setSelectedDate,uploadedPhoto,
      uploadedPassport,uploadedbackPassport,onPassportUpload,onPassportbackUpload,onPhotoUpload,
      totalprice,handlepay
    } = useContext(MyContext)

    useEffect(() => {
      const storedDate = localStorage.getItem('selectedDate');
      if (storedDate) {
          setSelectedDate(dayjs(storedDate));
      }
  }, [setSelectedDate]);

  useEffect(() => {
    if (selectedDate) {
        localStorage.setItem('selectedDate', selectedDate.toString());
    }
}, [selectedDate]);


  

    const validationSchema =Yup.object({
        mobileNo: Yup.string().matches(/^[0-9]{10}$/, '**Mobile number is not valid').required('*MobileNo is required'),
        email: Yup.string().required('*Email is required'),
    });

    const initialValues ={
      mobileNo:'',
      email:'',
    };

    const handleSubmit =async(values, {resetForm})=>{


handlepay(values.email,values.mobileNo)

    //  handleupi()

      resetForm()
    }

  return (
    <div className='layout-main'>
   <Helmet>
        <title>{{servicename}/{countryname}}</title>
        <meta name="description" content="Layout page" />
      </Helmet>
            <div className="layout-process">
           
            <div className="process">
           {start.date?
            <GiConfirmed style={{color:'green'}}/>:
           <MdDateRange style={{ color: cb === 'date' ? 'red' : 'black' }} />
            }
            Date
            
          {cb==='date' && <IoIosArrowRoundBack className='back'/>}
        </div>
          

                <div className='lines'></div>
           
               <div className="process">
               {start.photo ?
               <GiConfirmed style={{color:'green'}} />:
               <FaCameraRetro  style={{ color: cb === 'photo' ? 'red' : 'black' }} />
               } 
               Photo {cb==='photo' && <FaCameraRetro  style={{color:'red'}}/> &&<IoIosArrowRoundBack className='back'/>}
              </div>
           
  
            <div className='lines'></div>
                 
                     
                    <div className="process">
                     {start.passport ?
                     <GiConfirmed style={{color:'green'}}/>:
                     <GiPassport style={{ color: cb === 'passport' ? 'red' : 'black' }}  /> 
                     }   
                    
                    Passport {cb === 'passport' &&   <GiPassport  style={{color:'red'}}/> && <IoIosArrowRoundBack className='back'/>}
                    </div>
                  
                  
                   <div className='lines'></div>

                  
                    <div className="process">
                    {start.details ?
                     <GiConfirmed style={{color:'green'}}/>:
                     <FaWpforms style={{ color: cb === 'details' ? 'red' : 'black' }} />
                     } 
                   
                   Details{cb === 'details' &&  <IoIosArrowRoundBack className='back'/>}
                   </div>
                   
                   
                   {/* <div className='lines'></div>
                   <div className="process">
                   <IoBagCheckOutline />
                   Checkout
                   </div> */}
            </div>

            <div className="layout-form">
              
        {cb ==='date' &&
        <div className="date">

        <h4>Choose Your Departure Date</h4>
  
         <div className="date-format">
        
       <LocalizationProvider dateAdapter={AdapterDayjs} >
        <StaticDatePicker
                displayStaticWrapperAs="desktop"
                showToolbar={false}  
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                shouldDisableDate={(date) => 
                  date.isBefore(dayjs(), 'day') ||       
                  date.isSame(dayjs(), 'day') ||         
                  date.isBefore(dayjs().add(8, 'day'), 'day')
                }
            />
       </LocalizationProvider>
       <span className='dateselect'>{selectedDate ? dayjs(selectedDate).format('MMM D, YYYY') : "No date selected"}</span>
        <button className="buttons" onClick={changephoto}>Next</button>
        </div>
    </div> }
                 
        {cb ==='photo' &&
             <div className="photo">
              <h4>Upload Photo</h4>
             
              <img src={uploadedPhoto || img1} alt="User" /> 

             <span>
                <p><TiTick />A well lit area</p>
                <p><TiTick />Maintain neutral expression</p>
                <p><TiTick />Remove glasses</p>
              
                </span>
                   
                <input
              type="file"
              accept="image/*"
              id='photoUpload'
              style={{ display: 'none' }}
              onChange={onPhotoUpload}
            />
              
            {
             uploadedPhoto ?
              (<>
              <label htmlFor="photoUpload" className='buttons'>Re-take Photo</label>
              <label className='button' onClick={changepassport}>Next</label>
              </>)
              :
              <label htmlFor="photoUpload" className='buttons'>Upload Photo</label>
            }
            
             </div>
        }       

        {cb === 'passport' &&
               <div className="passport">
                 <h4>Upload Passport</h4>

                 <div className="passport-image">

                  <div className="front-side">
                  <span>
                 <p>Front Side of Passport</p>
                 <img src={uploadedPassport || img2} alt="User" />
                 </span>
                 {
              uploadedPassport ?
              <label htmlFor="passportUpload" className='buttons'>Re-take front Photo</label>
              :
               <label htmlFor="passportUpload" className='first-button'>Upload Front Side</label>
             }
                 
                  </div>
                 <div className="back-side">
                 <span>
                 <p>Back Side of Passport</p>
                 <img src={uploadedbackPassport || img4} alt="User" />
                 </span>

                 {uploadedbackPassport ?
             (<>
             <label htmlFor="passportbackUpload" className='buttons'>Re-take Back Photo</label>
             
             </>):
             <label htmlFor="passportbackUpload" className='first-button'>Upload Back Side</label>
            }
                 </div>
                
                 </div>
                
              
                <input
              type="file"
              accept="image/*"
              onChange={onPassportUpload}
              style={{ display: 'none' }}
              id="passportUpload"
            />
            
         <input
              type="file"
              accept="image/*"
              onChange={onPassportbackUpload}
              style={{ display: 'none' }}
              id="passportbackUpload"
            />
                   
           

             
             
             {uploadedbackPassport && uploadedPassport ?<label className='button' onClick={changedetails}>Next</label>:
             '' }


               </div>
        }  

        {cb === 'details' &&
                <div className="details">
                  <div className="form-container">
                 <h4>Form Details</h4> 
                 
              
                 <div className="details-date">
               <span> Departure date :  {selectedDate && dayjs(selectedDate).format('MMMM D, YYYY')}</span> 
               <span>Total Price:  ₹ {totalprice}</span>
                </div>
                     <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}>
                     
                     <Form className="details-form">


              <div className="form-fields">
                <label htmlFor="mobileNo">Mobile Number:</label>
                <Field type="mobileNo" id="mobileNo" name="mobileNo" className="field" placeholder="Enter Mobile Number" />
                <ErrorMessage name="mobileNo" component="div" className="error" />
              </div>

              <div className="form-fields">
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" className="field" placeholder="abc@gmail.com" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

               <span> Selected Images:  </span>
                 <div className="details-images">
                  <div className="in-images">
                  <img src={uploadedPhoto} alt=''/> 
                  <p>Uploaded Photo</p>
                  </div>
               <div className="in-images">
               <img src={uploadedPassport} alt=''/>
               <p>Front-side Passport</p>
               </div>
               <div className="in-images">
               <img src={uploadedbackPassport} alt=''/>
               <p>Back-side Passport</p>
               </div>
               
                </div>

               

              <button type="submit" className="submit-button">Submit</button>
            </Form>

                     </Formik>
                    </div>                  
                </div>
        }
        

            </div>

            <div className="layout-details">
               {cb ==='date' && 
                  <div className="date-details">

                    <h4>Date Selection Instructions <div className="line"></div> </h4>
                    
                    <span><Bs1CircleFill/>Pick the most convenient date for your visa interview. Remember, appointment availability may vary.</span>
                    <span><Bs2CircleFill/>Please pick a date that works best for you. Time slots will be subject to availability.</span>
                    <span><Bs3CircleFill/>Make sure to select a date well in advance, as appointments may get fully booked during peak seasons.</span>
                  </div>
               }  

               {cb === 'photo' &&
                    <div className="photo-details">
                      <p>Time for your close-up</p> 

                      
                        <span><Bs1CircleFill/>Hold the camera at eye level and make sure your face is centered in the frame.</span>
                        <span><Bs2CircleFill/>Keep hair away from your face to ensure all features are visible.</span>
                        <span><Bs3CircleFill/>Remove any items like hats, glasses (if possible), or heavy makeup that may obstruct facial features.</span>
                        <span><Bs4CircleFill/>Keep a distance of about 1-2 feet from the camera, so your full face and shoulders are in the frame without any cropping.</span>
                      
                    </div>
               }

               {cb === 'passport' &&
                 <div className="passport-details">
                  <p><MdOutlineDocumentScanner />Passport Scan</p>
                  {/* <p>We require a scanned copy of your passport to comply with government regulations for identity verification and background checks.</p> */}
                    
                  <span><Bs1CircleFill/>Hold the camera at eye level and make sure your face is centered in the frame.</span>
                  <span><Bs2CircleFill/>Keep hair away from your face to ensure all features are visible.</span>
                  <span><Bs3CircleFill/>Remove any items like hats, glasses (if possible), or heavy makeup that may obstruct facial features.</span>
                  <span><Bs4CircleFill/>Keep a distance of about 1-2 feet from the camera, so your full face and shoulders are in the frame without any cropping.</span>
                      
                 </div>
               }
            
            {cb === 'details' &&
                    <div className="details-details">
                     <p>Visa Services</p>

                     <span><Bs1CircleFill/>We streamline the process to save your time and eliminate stress.</span>
                     <span><Bs2CircleFill/>Need assistance? Contact our experts now for a free consultation.</span>
                     <span><Bs3CircleFill/>Ready to travel? Let us handle the paperwork.</span>
                     <span><Bs4CircleFill/>Solutions tailored to individual needs—be it a family trip, higher education, or corporate travel.</span>
                    </div>
            }
                <div className="logo">
                  <h5>Our Security Certificates</h5>
                <img src={img3} alt="" />

                </div>
            </div>

    </div>
  )
}

export default LayoutDoc2
