import React, {  useContext, useEffect, useState } from 'react'
import "./CountryPage.scss"
import { FaUserGroup } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MyContext from '../Common/Context/MyContext'
import { useParams } from 'react-router-dom'
import visa from "../Assets/flaticons/visa.png"
import calendar from "../Assets/flaticons/calendar.png"
import stopwatch from "../Assets/flaticons/stopwatch.png"
import entry from "../Assets/flaticons/group.png"
import locker from "../Assets/flaticons/locker.png"
import epass from "../Assets/flaticons/expriedpassport.png"
import criminal from "../Assets/flaticons/criminal.png"
import prev from "../Assets/flaticons/prev.png"
import Faq from '../Common/FAQ/Faq'
import Countryreview from '../Common/Review/Countryreview'
import { Helmet } from 'react-helmet-async';
import { RxCross2 } from "react-icons/rx";



const CountryPage = () => {

    const { entryPrice,quntity,totalprice, setTotalprice,setQuntity, setEntryPrice,api, setPageData,setCountryName,pageData,
           countryName,Navigate,setSaveform,saveform,setCname,setSname,idproof,setIdproof} = useContext(MyContext);

    const{ servicename,countryname } = useParams();

    


    const [isFixed, setIsFixed] = useState(false);
    
    
    useEffect(() => {
      const calculatedTotal = (entryPrice * quntity) + (1 * quntity);
      setTotalprice(calculatedTotal); 
  }, [entryPrice, quntity, setTotalprice]);
  
  
    let images = []
    pageData?.country
      .filter((item) => item.name === countryName)
      .map((item) => images = item.countryImages)
    const handleMinus = () => {
        if (quntity > 0) {
          setQuntity(quntity - 1)
        }
      }
      const handlePlus = () => {
        if (quntity < 10) {
          setQuntity(quntity + 1)
        }
      }

      const Responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
 
      useEffect(() => {
        console.log(api.filter((item) => item.name === servicename)[0])
        const filteredData = api.filter((item) => item.name === servicename)[0];
        setPageData(filteredData);
        setCountryName(countryname)

        if (filteredData?.country) {
          const selectedCountry = filteredData.country.find((item) => item.name === countryname);
          setEntryPrice(selectedCountry?.visaInformation?.entryprice || 0); // Update entryPrice state
        }
    }, [servicename, api, countryname, setCountryName, setPageData,setEntryPrice]);
    
      useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 850) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className='country-page'>
<Helmet>
        <title>{servicename}/{countryname}</title>
        <meta name="description" content="Contact page" />
      </Helmet>
     
     
     {
      
       ["visitor-visa", "student-visa", "work-visa"].includes(pageData?.name) ?(
       <>

       <div className="country-left">

       <Carousel
       autoPlay={true}
       autoPlaySpeed={3000}
       infinite={true}
       draggable={false}
       pauseOnHover={false}
       arrows={false}
       responsive={Responsive} className='carousel'>
       <img src={images[0]} alt="" />
       <img src={images[1]} alt="" />
       <img src={images[2]} alt="" />
       <img src={images[3]} alt="" />
       <img src={images[4]} alt="" />
     </Carousel>
       </div>
       </>):(
         <div className='country-left'>
          <img src={images[0]} alt="" />
         </div>
       )
     
     }
                 
          <div className='pricing-container'>

            <div className='first'>
           { ["visitor-visa", "student-visa", "work-visa"].includes(pageData?.name) ?(
              <>
              <div className='title'>
             <FaUserGroup  />
               <span>Traveller</span>
              </div>
              </>):(
              <div className='title'>
              <FaUserGroup  />
              <span>People</span>
              </div>
              )

           }
              <div className='signs'>
                <CiCircleMinus onClick={handleMinus}  />
                <span>{quntity}</span>
                <CiCirclePlus onClick={handlePlus}  />
              </div>
              <div>

              </div>
            </div>
           {pageData?.country
            .filter((price)=>price.name === countryName)
            .map((price,index)=>{
              return(
                <>
                    <div className='p-second'>
              <h5>Pricing</h5>
              <div className='g-price'>
                <p>Government fee</p>
                <span>{entryPrice} <RxCross2 />{quntity}</span>
              </div>
              <div className='v-price'>
                <p>Veer Consultancy fees</p>
                <span>3000 <RxCross2 />{quntity}</span>
              </div>

              <div className='total-price'>
                <h4>Total Amount</h4>
                <h4>{totalprice}
            </h4>
            
              </div>
              <div  className={`start-app ${isFixed ? 'fixed' : ''}`}  onClick={() =>{
               
                Navigate('/layout')}}>
                <button onClick={()=>setSaveform({...saveform,quantity:quntity}) || setSname(servicename) || setCname(countryname)}>Start Application</button>

            
              </div>
            </div>
                </>
              )
            })
           }

          </div>

          <div className="box-container"> 


               <div className='df'>
             <div className='all-content'>

              <div className='info-container'>
              <div className='docs'>
        <h2>Documents Required for {countryname}</h2>
        <div className='line'></div>
        {
        ["visitor-visa", "student-visa", "work-visa"].includes(pageData?.name) ?
        (<>

        <div className='docs-content'>
          {
            pageData?.country
              .filter((item) => item.name === countryName)
              .map((item, index) => {
                return (
                  <>{item.documents?.map((doc, index) => {
                    return (
                      <span className='doc'>{doc}</span>
                    )
                  })}</>
                )
              })

          }
        </div>
        </>):
        (<div className='docs-contents'>
          {
            pageData?.country
              .filter((item) => item.name === countryName)
              .map((item, index) => {
                return (
                  <>
                  {item.documents?.map((doc) => {
                    return(
                     <div key={doc.id}>
                      <h3  onMouseEnter={() => setIdproof(doc.id)} 
                          onMouseLeave={() => setIdproof(null)}>
                            
                            {doc.name}</h3>
                      
                      {idproof === doc.id &&
                      <div>
                        {doc.container
                         .filter((containerItem) => containerItem.id === doc.id)
                        .map((containerItem) => {
                          return (
                            <li key={containerItem.id}>
                              {containerItem.name}
                              </li>
                          )
                        }
                        )}
                        </div>
                  }
                    </div>
                    )
                  }
                  )}
                </>
                
                )
              })

          }
        </div>)
        }
      </div>



      {
        ["visitor-visa", "student-visa", "work-visa","passport"].includes(pageData?.name) &&

        <div className='info'>
          <h2>{countryName}  information</h2>
          <div className='line'></div>

          <div className='container'>
            {
              pageData?.country
                .filter((item) => item.name === countryName)
                .map((item) => {
                  return (
                    <>

                      {
                        ["visitor-visa", "student-visa", "work-visa"].includes(pageData?.name)?(
                          <>
                      <div className='info-content'>
                        <div className='info-icon'>
                          <img src={visa} alt="visa" />
                        </div>
                        <div className='kv'>
                          <span className='r'>VisaType:</span>
                          {
                            <span className='b'>{item.visaInformation?.visaType}</span>
                          }
                        </div>
                      </div>
                      </>):
                      (<div className='info-content'>
                        <div className='info-icon'>
                          <img src={visa} alt="visa" />
                        </div>
                        <div className='kv'>
                          <span className='r'>PassportType:</span>
                          {
                            <span className='b'>{item.visaInformation?.visaType}</span>
                          }
                        </div>
                      </div>)
                        }

                      {
                        ["visitor-visa", "student-visa", "work-visa"].includes(pageData?.name)?(
                          <>
                      <div className='info-content'>
                        <div className='info-icon'>
                          <img src={calendar} alt="visa" />
                        </div>
                        <div className='kv'>
                          <span className='r'>Length Of Stay:</span>
                          {
                            <span className='b'>{item.visaInformation?.lengthOfStay}</span>
                          }
                        </div>
                      </div>
                      </>):
                      ( <div className='info-content'>
                        <div className='info-icon'>
                          <img src={calendar} alt="visa" />
                        </div>
                        <div className='kv'>
                          <span className='r'>Time Duration:</span>
                          {
                            <span className='b'>{item.visaInformation?.lengthOfStay}</span>
                          }
                        </div>
                      </div>)
                        }

                      {
                        ["visitor-visa", "student-visa", "work-visa"].includes(pageData?.name)?(
                          <>
                            <div className='info-content'>
                        <div className='info-icon'>
                          <img src={stopwatch} alt="visa" />
                        </div>
                        <div className='kv'>
                          <span className='r'>Validity:</span>
                          {
                            <span className='b'>{item.visaInformation?.validity}</span>
                          }
                        </div>
                      </div>
                          </>):
                          ('')
                      }
                      


                      {
                         ["visitor-visa", "student-visa", "work-visa"].includes(pageData?.name)?(
                         <>
                        <div className='info-content'>
                        <div className='info-icon'>
                          <img src={entry} alt="visa" />
                        </div>
                        <div className='kv'>
                          <span className='r'>Entry:</span>
                          {
                            <span className='b'>{item.visaInformation?.entry}</span>
                          }
                        </div>
                      </div>
                         </>):(
                          ''
                         )
                      }
                      
                    </>
                  )
                })

            }
          </div>

        </div>
      }
    </div>


    {
      ["visitor-visa", "student-visa", "work-visa","passport"].includes(pageData?.name) &&
      <div className='process-container'>
        <h2>How {countryName} Process Work</h2>
        <div className='line'></div>
        <div className='steps'>
          <div className='step'>
            <p>Step 1</p>
            <h4>Apply on Veer Consultancy</h4>
            <span>Submit your documents - pay fees</span>
          </div>
          <div className='step'>
            <p>Step 2</p>
            <h4>Your Documents Are Verified</h4>
            <span>Our team verifies your documents</span>
          </div>
          <div className='step'>
            <p>Step 3</p>
            <h4>Your {countryName} Gets Processed</h4>
            <span>We work with Immigration to ensure you get your visa on time.</span>
            <div className='step'>
              <h5>1. Application has been sent to the immigration supervisor</h5>
              <h5>2. Application has been sent to internal intelligence</h5>
            </div>
          </div>
          <div className='step'>
            <p>Step 4</p>
            <h4>Get Your {countryName}</h4>
          </div>
        </div>
      </div>
    }

    {
      ["visitor-visa", "student-visa", "work-visa","passport"].includes(pageData?.name) &&
      <div className='resons-container'>
        <h2>{countryName} Visa Rejection Reasons</h2>
        <div className='line'></div>
        <h3>Factors that can get your visa rejected</h3>
        <div className='reasons'>
          <div className='reason'>
            <div className='r-icon'>
              <img src={epass} alt="" />
            </div>
            <div className='r-content'>
              <h4>Expired Passport</h4>
              <h4 className='g'>Applying with a passport that has expired or expires within 6 months</h4>
            </div>
          </div>
          <div className='reason'>
            <div className='r-icon'>
              <img src={locker} alt="" />
            </div>
            <div className='r-content'>
              <h4>Insufficient Funds</h4>
              <h4 className='g'>Failing to demonstrate enough financial resources to support your stay.</h4>
            </div>
          </div>
          <div className='reason'>
            <div className='r-icon'>
              <img src={criminal} alt="" />
            </div>
            <div className='r-content'>
              <h4>Criminal Record</h4>
              <h4 className='g'>Having a criminal history that disqualifies you from obtaining a visa.</h4>
            </div>
          </div>
          <div className='reason'>
            <div className='r-icon'>
              <img src={prev} alt="" />
            </div>
            <div className='r-content'>
              <h4>Previous Visa Violations</h4>
              <h4 className='g'>Having overstayed or violated the terms of a previous visa.</h4>
            </div>
          </div>
        </div>
      </div>
    }


      <div className='review'>

            
        <Countryreview/>
            
      </div>

      <div className="country-faq">
        <Faq/>
      </div>


  </div>
</div>
          </div>    
        </div>
    )
}

export default CountryPage