import React, { useContext, useState } from 'react'
import './Faq.scss'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import MyContext from '../Context/MyContext';



const Faq = () => {
    const{fapi} =useContext(MyContext)
    const [openIndex, setOpenIndex] = useState(null);

    // Toggle FAQ answer visibility
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className="faq-container">
    <h2>Frequently asked questions</h2>
   <div className="line"></div>
    <div className="faq-list">
      {fapi.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
           
            
            <h3><span>{openIndex === index ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>{faq.question}</h3>
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
);
};

export default Faq
