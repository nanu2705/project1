import React from 'react'
import "./ServiceCardModal.scss"
import usaFlag from "../Assets/flags/usa.png"


const SmodalCard = ({ obj }) => {
    return (
        <div className='country-card'>
            <img src={usaFlag} alt="flag" />
            <span>USA</span>
        </div>
    )
}

export default SmodalCard