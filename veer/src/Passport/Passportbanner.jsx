import React, { useContext, useEffect } from 'react';
import './Passport.scss';
import img from '../Assets/images/passportbanner.png';
import { Helmet } from 'react-helmet-async';
import MyContext from '../Common/Context/MyContext';
import { useParams } from 'react-router-dom';


const Passportbanner = () => {
  const {handleO,setTitle} = useContext(MyContext);


  const{title} =useParams()

  const data = [
     {
      "title":"normal-passport",
      "name":"Normal",
      "description": "Standard passport processing service with regular timelines.",
      
    },
    {
      "title":"tatkal-passport",
      "name":"Tatkal",
      "description": "Expedited passport service under the Tatkaal scheme for urgent needs. We handle documentation and expedite processing to meet tight deadlines.",
      
    }
  ]

  useEffect(() => {
    setTitle(title); // Update the shared title
  }, [title, setTitle]);
  return (
    <div className="passport-banner">
      <Helmet>
        <title>passport/{title}</title>
        <meta name="description" content={`${title} Passport page`}  />
      </Helmet>
      <div className="banner-left">
      { data.filter(a=> a.title === title )
        .map((b)=>{
          return (<>
           <div className="left-content">

           <h4>{b.name} Passport</h4>
 <span>{b.description}</span>

<button onClick={handleO}>Click for Apply</button> 
</div>
           
          
            </>)
        })
      }
       
      </div>

      <div className="banner-right">
        <div className="comment-box">
          <span>Got passport on time</span>
          <div className="triangle"></div>
        </div>
        <img src={img} alt="Passport banner" />
        <div className="circle"></div>
        <div className="circle1"></div>
      </div>

     
    </div>
  );
};

export default Passportbanner;
