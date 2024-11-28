import React, { useContext, useEffect } from 'react'
import MyContext from '../Context/MyContext'
import './Error.scss'
import { MdErrorOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Error = () => {

    const { sneck, msg, setSneck } = useContext(MyContext)

    useEffect(() => {
        if (sneck) {
            setTimeout(() => {
                setSneck(false)
            }, 3000);
        }
    })
    return (
        <>
            {sneck &&
                <div className='animate__animated animate__fadeInRight alert' style={{ color: msg.match('Thanks') ? 'green' : 'red' }}>{!msg.match('Thanks') 
                ? <MdErrorOutline className='e-icon' /> :
                <IoMdCheckmarkCircleOutline className='s-icon' />}
                 {msg}
                </div>
                

            }
        </>

    )
}

export default Error