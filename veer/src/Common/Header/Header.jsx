import React, { useEffect, useState, useMemo, useContext } from 'react';
import './Header.scss';
import { IoSearchOutline } from "react-icons/io5";
import MyContext from '../Context/MyContext';
import { Helmet } from 'react-helmet-async';
import Droplist from '../Droplist/Droplist';

const Header = () => {
  const { Navigate, location, searchTerm, setSearchTerm,setLogopen,logopen} = useContext(MyContext)
  const items = useMemo(() => ['passport', 'student visa', 'visitor visa', 'work permit', 'ielts', 'pte', 'aadhar card', 'pan card', 'election card', 'driving license'], []);
  const [right, setRight] = useState(items[0]);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const searchmatch = location.pathname.match('/search')
 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1600);

    return () => clearInterval(interval);
  }, [items.length]);

  useEffect(() => {
    setRight(items[index]);
    setAnimate(true);

    const timeout = setTimeout(() => setAnimate(false), 700);

    return () => clearTimeout(timeout);
  }, [index, items]);


  const loc=['/layout','/adminveer']

  if (loc.includes(location.pathname)) {
      return null
  }

  
  return (
    <>
      <header>

        <div className='header'>
        <Helmet>
        <title>Veer Consultancy</title>
        <meta name="description" content="Contact page" />
      </Helmet>
          <div className='left' onClick={() => Navigate('/')}>Veer Consultancy</div>
          <div className='left' onClick={() => Navigate('/')}>Veer<br /> Consultancy</div>

          { searchmatch  ? null: location.pathname==='/layout' ? null:
          <div className='center' onClick={() => Navigate('/search')}>
            <span className='icon'><IoSearchOutline /></span>
           <span className={`search ${animate ? 'animate' : ''}`}>
              search for "{right}"
            </span>
          </div>}

          {searchmatch && <div className='centers'>
            <input type='text' autoFocus placeholder='search for student visa and more...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <IoSearchOutline />
          </div>
          }

          <div className='right'>
        
              <div className="passport-apply"
              onMouseEnter={() => setLogopen(true)} 
              onMouseLeave={() => setLogopen(false)} >
              <button
                className="btn1"
              >
              Apply For Passport</button>
            {logopen && <Droplist/> } 
              </div>

               {/* {for passport button in mobile view */
        
        <div className="passport-applys">
        <button className='btn1s' onClick={()=>setLogopen(true)}>Apply For Passport</button>
       <Droplist/>
        </div>
        }
             
               <button className='explore' onClick={() => Navigate('/explore')}>Explore</button>
           

          </div>


        </div>

        {/*for search bar in mobile */}

        {!searchmatch &&  <div className='centerm' onClick={() => Navigate('/search')}>
          <IoSearchOutline />
          <span className={`search ${animate ? 'animate' : ''}`}>
            search for "{right}"
          </span>
        </div>
        }

        {searchmatch && <div className='centermo'>
          <input type='text' autoFocus placeholder='search for student visa and more...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <IoSearchOutline />
        </div>
        }

       

      </header>

    </>
  );
};

export default Header;
