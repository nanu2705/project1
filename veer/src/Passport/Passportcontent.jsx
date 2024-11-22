import React from 'react'
import './Passport.scss'
import { GiHeadphones } from "react-icons/gi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { SiReacthookform } from "react-icons/si";
import { PiElevatorThin } from "react-icons/pi";
import { BsEnvelopePaperHeart } from "react-icons/bs";
import { IoPieChartOutline } from "react-icons/io5";
const Passportcontent = () => {
  return (
    <div className="passport-content">
         <div className="pass-head">
            <h4>What You Will Get</h4>
            <span>Get Passport On Time</span>
         </div>

         <div className="pass-grid">
            <div className="pass-box">
            <span><GiHeadphones /></span>
            <span>Support</span>
            <p>Dedicated customer service available to help you with any questions or issues related to the application, renewal, or other passport services.</p>

            </div>
            <div className="pass-box">
            <span><MdOutlineAutoGraph /></span>
            <span>Document</span>
            <p>Your official passport, which serves as your international travel document and identification.</p>
            </div>
            <div className="pass-box">
            <span><SiReacthookform /></span>
            <span>Application Process</span>
            <p>A streamlined application and tracking process, with clear guidelines, so you know exactly where your application stands at every step.</p>
            </div>
            <div className="pass-box">
            <span><PiElevatorThin /></span>
            <span>Security</span>
            <p>Biometric data integration and secure identity features embedded in the passport, ensuring privacy and security as per international standards.</p>
            </div>
            <div className="pass-box">
            <span><BsEnvelopePaperHeart /></span>
            <span>Quality</span>
            <p>Automatic updates, notifications, and reminders sent to your preferred communication channel to keep you informed about application status.</p>
            </div>
            <div className="pass-box">
            <span><IoPieChartOutline /></span>
            <span>Result</span>
            <p>Access to travel advisories, visa requirements, and other essential travel resources to help you prepare for international trips.</p>
            </div>
         </div>
    </div>
  )
}

export default Passportcontent
