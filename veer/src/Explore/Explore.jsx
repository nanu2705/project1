import React from 'react'
import "./Explore.scss"
import { explorecountries, exploreS3, exploreServices } from '../CardsDetails';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUniversity } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { Helmet } from 'react-helmet-async';

const Explore = () => {

    return (
        <div className='explore'>

<Helmet>
        <title>Explore</title>
        <meta name="description" content="Explore page" />
      </Helmet>
            <div className='e-first'>
                <div className='explore1'>
                </div>
                <div className='explore2'>
                    <div className='s-card'>
                        <div className='icon-title'>
                            <div className='icon'>
                                <FaUniversity size={"40px"} />
                            </div>
                            <div className='title'>
                                <span>Overseas Education and Work Visa Consultants</span>
                            </div>
                        </div>
                        <p>Expert guidance for overseas education and study visas, helping you achieve your global dreams!</p>
                    </div>
                    <div className='s-card'>
                        <div className='icon-title'>
                            <div className='icon'>
                                <IoMdCheckmarkCircleOutline size={"40px"} />
                            </div>
                            <div className='title'>
                                <span>Consultations for Students and Visitors visa</span>
                            </div>
                        </div>
                        <p>Comprehensive consultations for student and visitor visas, tailored to your travel needs!</p>
                    </div>

                    <div className='s-card'>
                        <div className='icon-title'>
                            <div className='icon'>
                                <GrCertificate size={"40px"} />
                            </div>
                            <div className='title'>
                                <span>Travel & Government Certification Assistance</span>
                            </div>
                        </div>
                        <p>Reliable assistance with travel documentation and government certifications, ensuring a smooth process!</p>
                    </div>
                </div>
            </div>
            <div className='e-second'>
                <h2>OUR SERVICES </h2>
                <div className='ecards-container'>

                    {
                        exploreServices.map((item) => {
                            return (
                                <div className='card'>
                                    <img src={item.img} alt={item.title} />
                                    <div className='text-content'>
                                        <p>{item.title}</p>
                                        <span>{item.desc}</span>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            </div>

            <div className='e-third'>

                <h2>CHOOSE YOUR COUNTRIES</h2>

                <div className='container2'>

                    {
                        explorecountries.map((country) => {
                            return (
                                <div className='card2'>
                                    <div className='img-title'>
                                        <img src={country.img} alt="" />
                                        <span>{country.title}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className='e-four'>
                <h2>MORE WE OFFER</h2>
                <div className='container3'>
                    {
                        exploreS3.map((item) => {
                            return (
                                <div className='card3'>
                                    <div className='round'>
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className='content'>
                                        <h2>{item.title}</h2>
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>

    )
}

export default Explore