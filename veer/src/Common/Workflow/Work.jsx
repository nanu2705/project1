import React from 'react'
import './Work.scss'
import { GrDocumentText } from "react-icons/gr"; 
import { FcStatistics } from "react-icons/fc"; 
import { VscFileCode } from "react-icons/vsc";
import { VscReferences } from "react-icons/vsc";

const Work = () => {
  return (
  <div className="work">
    <div className="work-main">

           <div className="work-head">
              <h4>Our Working Process</h4>
           </div>

           <div className="work-process">

             <div className="work-icon">
             <span><GrDocumentText /></span>
             <div className='work-line'>
             <div className="triangle"></div>
             </div>
             <h5>Initial Consultation & Document Collection</h5>
             </div>
         
        
             <div className="work-icon">
             <span><VscFileCode /></span>
             <div className='work-line no'>
              <div className="triangle"></div>
             </div>
             <h5>University & Course Selection</h5>
             </div>
           
         
             <div className="work-icon">
             <span><FcStatistics /></span>
             <div className='work-line'>
             <div className="triangle"></div>
             </div>
              
             <h5>Visa Application  Preparation</h5>
             </div>

        
             <div className="work-icon">
             <span><VscReferences /></span>
             <h5>Submission & Interview Support</h5>
             </div>
            
           </div>
    </div>

    </div>
  )
}

export default Work
