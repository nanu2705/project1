import React, { useContext, useState } from 'react'
import './Passport.scss'
import img1 from '../Assets/images/Avatar.jpg'
import img2 from '../Assets/images/Avatar (1).jpg'
import img3 from '../Assets/images/Avatar (2).jpg'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import MyContext from '../Common/Context/MyContext';
import Socket from './Socket.io/Socket'

const Passportfaq = () => {

    const{fapi,socketO,sockets} =useContext(MyContext)
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
     !sockets ?(<>
    <div className="passport-faq">
    
    <div className="faq-container">
    <h2>Frequently asked questions</h2>
    <span>Everything you need to know about the product and billing.</span>
   <div className="line"></div>

   
    <div className="faq-list">
      {fapi.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <span>{openIndex === index ?<CiCircleMinus /> : <CiCirclePlus />}</span>
          </div>
          
          {openIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>

  <div className="faq-doubt">
    <div className="circle-image">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        
      
    </div>
    <span>Still have questions?</span>
    <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
    <button onClick={socketO}>Get In Touch</button>
  </div>
    </div></>):
    <Socket/>
  
  
  )
}

export default Passportfaq
