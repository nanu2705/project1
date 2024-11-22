import React, { useContext } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Countryreview.scss'
import MyContext from '../Context/MyContext';

const Countryreview = () => {

    const{rapi} =useContext(MyContext)

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      }; 
  return (
    
    <div className="creview-main">

        
<h2>Reviews</h2>
        <div className="line"></div>
            <Carousel
             autoPlay={true}
             autoPlaySpeed={3000}
             infinite={true}
             draggable={false}
             pauseOnHover={false}
             arrows={false}
             responsive={responsive}
            >
            {
                rapi
                .filter((item) => item.content && item.content.includes("visa"))
                .map((item)=> {
                    return(
                        <>
                        <div className="slider-card">

                            <div className="card-content">
                                
                            <div className="initialname"><span>{item.intialName}</span> </div>
                        <span>{item.name}</span>
                        <div className="contentpart">
                        {item.content}
                        </div>
                      
                            </div>
                          
                        </div>
                        </>

                    )
                })
            }


            </Carousel>
      
        </div>
    
  )
}

export default Countryreview
