import React, { useContext } from 'react'
import './Card.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import MyContext from '../../Common/Context/MyContext';

const Card = ({ obj }) => {
    
    const { openModal } = useContext(MyContext)
    return (
        <>
            <div className='service-card' onClick={() => openModal(obj.name)} >

                <img className='one' src={obj.icon} alt="" height={'44px'} width={'44px'} />
                <span className='head'>{obj.title}</span>
               
                <span className='two'>
                    {obj.desc}
                </span>
                <div className='icon2'>
                    <img src={obj.icon} alt="" height={'44px'} width={'44px'} />

                </div>

                <div className='icon'><FaArrowRightLong /></div>
                <div className='line'></div>

            </div>


        </>
    )
}

export default Card