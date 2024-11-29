import React, { useContext } from 'react';
import './ErrorPage.scss';
import ErrorIcon from '../../Assets/images/errorIcon.png';
import { Helmet } from 'react-helmet-async';
import { GoAlert } from 'react-icons/go';
import { IoSearchOutline } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import MyContext from '../Context/MyContext';

const ErrorPage = () => {
  const {
    api,
    Navigate,
    searchTerm,
    setSearchTerm,
  } = useContext(MyContext);

  const handleSearch = (a, c) => {
    Navigate(`/service/${a.name}/${c.name}`);
    setSearchTerm('');

  };

  return (
    <div className="error-page">
      <Helmet>
        <title>Error: 404</title>
        <meta name="Oops! It looks like the page you're looking for doesn't exist or has been moved. We couldn't find the page at the link you provided. Don’t worry – you can still explore the rest of our website or search for the content you need." 
        content="Page not found - Error 404" />
      </Helmet>

      <div className="error-content">
        <img src={ErrorIcon} alt="Error Icon" />
        <span className="error-title">
          <GoAlert /> 404 Error
        </span>
        <p className="error-message">Page not Found</p>
        <p className="error-code">
          Sorry, the page you are looking for doesn’t exist or has been removed. Keep exploring our site:
        </p>
        <div className="error-search">
          <IoSearchOutline />
          <input
            type="text"
            autoFocus
            placeholder="Search here Your Page ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <p onClick={() => setSearchTerm('')}>
              <RxCross1 />
            </p>
          )}
           {searchTerm.trim() && (
          <div className="search-list">
            {api.map((a) => (
              <div key={a.name}>
                {a.country &&
                  a.country
                  
                    .filter((c) => {
                      const combinedText = `${a.title.toLowerCase().trim()} ${c.title.toLowerCase().trim()}`;
                      return combinedText.includes(searchTerm.toLowerCase().trim());
                    })
                    
                    .map((c) => (
                      <ul key={c.id}>
                        <li
                          tabIndex="0"
                          onClick={() => handleSearch(a, c)}
                         
                        >
                         <span className='error-list'>  {' '}
                          {a.title.includes('Visa') ? `${a.title} for ${c.title}` : c.title}
                          </span>
                        </li>
                      </ul>
                    ))}
              </div>
            ))}
          </div>
        )}
        </div>

       
      </div>
    </div>
  );
};

export default ErrorPage;
