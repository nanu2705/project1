/* eslint-disable react/jsx-no-undef */
import React, { useContext, useEffect } from 'react'
import './Layoutdoc.scss';
import MyContext from '../Context/MyContext';
import visa from "../../Assets/flaticons/visa.png"
import calendar from "../../Assets/flaticons/calendar.png"
import stopwatch from "../../Assets/flaticons/stopwatch.png"
import entry from "../../Assets/flaticons/group.png"
import locker from "../../Assets/flaticons/locker.png"
import epass from "../../Assets/flaticons/expriedpassport.png"
import criminal from "../../Assets/flaticons/criminal.png"
import prev from "../../Assets/flaticons/prev.png"
import { useParams } from 'react-router-dom';


const Layoutdoc = () => {

  const { api, setPageData,setCountryName,pageData, countryName} = useContext(MyContext);
  
  const
  { servicename, countryname }
  =
  useParams();

  useEffect(() => {
    console.log(api.filter((item) => item.name === servicename)[0])
    const filteredData = api.filter((item) => item.name === servicename)[0];
    setPageData(filteredData);
    setCountryName(countryname)
}, [servicename, api, countryname, setCountryName, setPageData]);

  return (

    <div className="box-container">


      <div className='df'>
        <div className='all-content'>

          <div className='info-container'>
            <div className='docs'>
              <h2>Documents Required for {countryname}</h2>
              <div className='line'></div>
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

            </div>
            {
              ["visitor-visa", "student-visa", "work-visa"].includes(pageData?.name) &&

              <div className='info'>
                <h2>{countryName} Visa information</h2>
                <div className='line'></div>

                <div className='container'>
                  {
                    pageData?.country
                      .filter((item) => item.name === countryName)
                      .map((item) => {
                        return (
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
                          </>
                        )
                      })

                  }
                </div>

              </div>
            }
          </div>
          {
            ["visitor-visa", "student-visa", "work-visa"].includes(pageData?.name) &&
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
                  <span>Our team verifies your documents and submits to Immigration</span>
                </div>
                <div className='step'>
                  <p>Step 3</p>
                  <h4>Your Visa Gets Processed</h4>
                  <span>We work with Immigration to ensure you get your visa on time.</span>
                  <div className='step'>
                    <h5>1. Application has been sent to the immigration supervisor</h5>
                    <h5>2. Application has been sent to internal intelligence</h5>
                  </div>
                </div>
                <div className='step'>
                  <p>Step 4</p>
                  <h4>Get Your Visa</h4>
                </div>
              </div>
            </div>
          }

          {
            ["visitor-visa", "student-visa", "work-visa"].includes(pageData?.name) &&
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

        </div>
       
      </div>




     
    </div>



  )
}

export default Layoutdoc
