import React, { useContext } from 'react'
import logo from '../../Assets/images/loderlogo.png'
import './Loader.scss'
import MyContext from '../Context/MyContext'

const Loader = () => {
    const{loading} = useContext(MyContext)
  return (
    <>
    {

        loading&&

        <div className='loader'>


        
        <img src={logo} alt=''/>

        <div className='line'/>
        </div>
   

    }
    
    </>
  )
}

export default Loader