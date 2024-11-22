import React, { useContext } from 'react'
import "./SubHeader.scss"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import MyContext from '../Common/Context/MyContext';
const SubHeader = () => {

    const { location } = useContext(MyContext);

    if (location.pathname !== '/') {
        return null
    }
    return (
        <div className='sub-header-content'>
            <div className='left'>
                <FaLocationDot className='icon' />
                <span>202,Kunal Complex Opp.Passport Office, Vadodara-390002</span>
            </div>

            <div className='right'>
                <FaPhone className='icon' />
                <span>+919316051170</span>
                <span className='line'>|</span>
                <IoIosMail className='icon' size={"20px"} />
                <span>veer.veerconsultancyglobal.com</span>
            </div>
        </div>

    )
}

export default SubHeader