import React, { useContext } from 'react'
import './Loader.scss'
import MyContext from '../Context/MyContext'


const Loader = () => {
    const{loading} = useContext(MyContext)
  return (
    <>
    {

        loading&&

        <div className='loader'>

          <div className="logo">
          
          </div>
       
        <div className='line'/>
        </div>
   

    }
    
    </>
  )
}

export default Loader