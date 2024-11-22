import React from 'react'
import './Modal.scss'
import { useContext } from 'react'
import MyContext from '../Common/Context/MyContext'
import img from '.././Assets/images/passport.png'

const Modal = () => {

  
    const{passmodel,handleC,title}=useContext(MyContext)
    const data = [
      {
       "title":"normal-passport",
       "name":"Normal",
       "description": "We're currently assisting other customers. For immediate help with applying for a Normal passport, please call us at +91 9316051170. Thank you for your patience!",
       
     },
     {
       "title":"tatkal-passport",
       "name":"Tatkal",
       "description": "We're currently assisting other customers. For immediate help with applying for a Tatkaal passport, please call us at +91 9316051170. Thank you for your patience!",
       
     }
   ]
    
  return (
    <div>
   { passmodel && (
    
    <div className="pass-overlay" >
    <div className="pass-content">
    <span  className="cancel-icon" id="smodal" onClick={handleC}>&times;</span>
        <span><img src={img} alt="" /></span>
        {data.filter(b=> b.title === title)
        .map((c)=>{
          return(<>
           <span>{c.name} Passport</span>
           <p>{c.description}</p>
          </>)
        })}
     
     
      <button onClick={() => window.location.href = 'tel:+919316051170'}>Call Us on +91 9316051170</button>
    </div>
  </div>
   ) }
   </div>
  )
}

export default Modal
