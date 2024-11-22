import React from 'react'
import './Banner.scss'
import Inquiry from '../Inquiry/Inquiry'

const Banner = () => {
    return (
        <div className='bi'>
            <div className="heading">
                    <h1 className='b-heading'>Visa Consultation and Immigration</h1>
                    <span className='b-span'>Unlock Your Global Opportunities with Trusted visa services</span>
                    </div>
            <div className="second">
                <Inquiry />
            </div>
        </div>

    )
}

export default Banner