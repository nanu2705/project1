import React from 'react'
import './Passport.scss'
import Passportbanner from './Passportbanner';
import Passportcontent from './Passportcontent';
import Passportfaq from './Passportfaq';
import { useParams } from 'react-router-dom';


const Passport = () => {
  const { title } = useParams()
  
  return (
   <div className="passport-main">

    
   <div className="pass-main">

   <Passportbanner title={title}/>
    
    <Passportcontent/>
   
   <Passportfaq/>
    </div>
   </div>
  )
}

export default Passport
