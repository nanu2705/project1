
import React from 'react'
import './Counting.scss'
import CountUp from 'react-countup'
import img from '../../Assets/images/ImageBox.png'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Counting = () => {
  return (
    <div className="count-main">


        <div className="count-detail">

       <div className="count-left">
        
        <span>We Save Your Time</span>

        <h4>Apply Visa From At Your Home Easily.</h4>

        <div className="count-grid">
          <div className="grid-item">
            <div className="grid-icon"> 
              <CheckCircleOutlineIcon/>  
            </div>
        <div className="gridC">
        Choose the Destination Country For Visa
        </div>
         
          </div>
          <div className="grid-item">
          <div className="grid-icon">   
          <CheckCircleOutlineIcon/>  
          </div>
          <div className="gridC">
            Fill Out the Application Form
            </div>
            </div>
          <div className="grid-item">
          <div className="grid-icon">   
          <CheckCircleOutlineIcon/>  
          </div>
          <div className="gridC">
            Upload Necessary Documents
            </div>
            </div>
          <div className="grid-item">
          <div className="grid-icon">   
          <CheckCircleOutlineIcon/>  
          </div>
          <div className="gridC">
            Pay and Submit the Application
            </div>
            </div>
        </div>

        <div className="right-count">
          <div className="count-text">
            <h5>500+ Visas and Counting –  <br/>
            Your Trusted Visa Partner!</h5>
          </div>
          <div className="count-circle-wrapper">
              <div className="count-circle">
                <svg viewBox="0 0 100 100" className="progress-ring">
                  <circle
                    className="progress-ring__background"
                    cx="50"
                    cy="50"
                    r="45"
                  />
                  <circle
                    className="progress-ring__circle"
                    cx="50"
                    cy="50"
                    r="45"
                    style={{ animationDuration: '3s' }}
                  />
                </svg>
                <span className="count-percentage">
                 <p>Success</p>  
                  <CountUp
                    start={0}
                    end={95}
                    duration={3}
                    separator=" "
                    decimals={0}
                    suffix="%"
                    enableScrollSpy={true}
                  />
                </span>
              </div>
            </div>
          </div>
       </div>


       <div className="count-right">
        <div className="right-img">
        <img src={img} alt="" />
        </div>
        <div className="right-count">
          <div className="count-text">
            <h5>500+ Visas and Counting –  <br/>
            Your Trusted Visa Partner!</h5>
          </div>
          <div className="count-circle-wrapper">
              <div className="count-circle">
                <svg viewBox="0 0 100 100" className="progress-ring">
                  <circle
                    className="progress-ring__background"
                    cx="50"
                    cy="50"
                    r="45"
                  />
                  <circle
                    className="progress-ring__circle"
                    cx="50"
                    cy="50"
                    r="45"
                    style={{ animationDuration: '3s' }}
                  />
                </svg>
                <span className="count-percentage">
                 <p>Success</p>  
                  <CountUp
                    start={0}
                    end={95}
                    duration={3}
                    separator=" "
                    decimals={0}
                    suffix="%"
                    enableScrollSpy={true}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
       
       

           
        </div>
    </div>
  )
}

export default Counting
