
import React, { useContext } from 'react'
import './Review.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MyContext from '../Context/MyContext';
const Review = ({show}) => {

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
    <div className="review-main">

        <div className="review-content">


            <span><b>What Our Client Say's</b></span>

            <div className="review-slider">
         <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        draggable={false}
        pauseOnHover={false}
        arrows={false}
        responsive={responsive} >
                   
                    {
                    rapi
                        
                        .map((item)=>{
                            return(
                                <>
                                <div className='card-box'>

                                    <div className="in-name">
                                   <div className='span'>{item.intialName}</div> 
                                    <p>{item.name}</p>
                                    </div>
                               
                               
                                 <div className="rcontent">
                                 {item.content}
                                 </div>

                               
                                </div> 
                                </>
                            )
                        })
                    }             
  </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Review
