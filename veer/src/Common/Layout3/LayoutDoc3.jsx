import React, { useContext} from 'react'
import "./LayoutDoc3.scss"
import MyContext from '../Context/MyContext';
import gif from '../../Assets/images/tick-13644_256.gif'


const LayoutDoc3 = () => {

    const{Navigate}=useContext(MyContext)

  
    
  
    return (
        <div className="confirm-main">

             <div className="confirm-content">

                <div className="confirm">
                    {/* <CheckCircleIcon/> */}

                    <p>  <img src={gif} alt=''/> </p>

                    <h5>Payment Successfully Completed!</h5>

                    <span>A confirmation has been sent to your email for further details.</span>

                    <button onClick={() => Navigate('/')}>Close</button>
                </div>
             </div>

        </div>
    )
}

export default LayoutDoc3