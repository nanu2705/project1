import React, { useContext } from 'react'
import MyContext from '../Context/MyContext'
import './Droplist.scss'
import img from '../../Assets/images/normalP.png'
import img1 from '../../Assets/images/tatkalP.png'
import { IoIosArrowForward } from "react-icons/io";

const Droplist = () => {
  const { logopen,setLogopen } = useContext(MyContext)
  return (
    <div>
      {logopen && (
        <div className="logout-overlay" onClick={() => setLogopen(false)}>
          <div className="drop-list">
            <div className='dropP' onClick={()=> window.location.href = "/passport/normal-passport"}>
              
              <div className="dropI">
              <img src={img} alt="" />
              </div>
            
              <div className="dropC">
             <span>  Normal Passport Application  </span>
              <p>  New, Renew, Name Change Details... <br />
               ₹ 2500 </p>
              </div>

               <div className="drop-icon">
               <IoIosArrowForward />
               </div>
              </div>
           
            <div className='dropP' onClick={()=>window.location.href = "/passport/tatkal-passport"}>
              
            <div className="dropI">
              <img src={img1} alt="" />
              </div>
              <div className="dropC">
             <span>  Tatkal Passport Application  </span>
              <p>  New, Renew, Name Change Details... <br />
             ₹ 4500 </p>
              </div>

              <div className="drop-icon">
               <IoIosArrowForward />
               </div>
              </div>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Droplist
