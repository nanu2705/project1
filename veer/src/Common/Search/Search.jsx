import React, { useContext, useState } from 'react';
import MyContext from '../Context/MyContext';
import './Search.scss';
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const { searchTerm, setSearchTerm, api, Navigate } = useContext(MyContext);

  // Initialize recent searches from localStorage as an array
  const [recentSearches, setRecentSearches] = useState(() => {
    const store = localStorage.getItem('recent');
    return store ? JSON.parse(store) : [];
  });

  // Handle search and update recent searches
  const handleSearch = (a, c) => {
    Navigate(`/service/${a.name}/${c.name}`);
    setSearchTerm('');

    // Add the search term to recent searches if it's not already present and if the list is less than 8 items
    const newSearch = `${a.title} for ${c.title}`;
    if (!recentSearches.includes(newSearch)) {
      const updatedSearches = [...recentSearches, newSearch].slice(-8); // Keep only the last 8 searches
      setRecentSearches(updatedSearches);
      localStorage.setItem('recent', JSON.stringify(updatedSearches));
    }
  };

  // Handle recent search click to populate the search term
  const handleRecentSearchClick = (search) => {

    const [aTitle, cName] = search.split(' for ');


    const matchingApi = api.find((item) => item.title === aTitle);
    const matchingCountry = matchingApi?.country?.find((country) => country.title === cName);

    if (matchingApi && matchingCountry) {
      Navigate(`/service/${matchingApi.name}/${matchingCountry.name}`);
    }
  };


  return (
    <div className="search-mains">
      <div className='search-bar'>
        {/* Conditionally display recent searches only when searchTerm is empty */}
        {!searchTerm && (
          <>
            <div className="recent-searches">
              <h3>Most Recent Searches</h3>
              <div className="keyword">

                {recentSearches.map((search, index) => (
                  <div
                    key={index}
                    className="keyword-box"
                    onClick={() => handleRecentSearchClick(search)}>
                    <span><IoSearchOutline /></span>
                    {search}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}


        {searchTerm && (
          <div className="search-list">
            {api

              .map((a) => {
                return (
                  <div key={a.name}>
                    {
                      a.country &&
                      a.country

                        .filter((c) => {
                          const newjson = c.title.toLowerCase().trim() + a.title.toLowerCase().trim()

                          const newinput = searchTerm.toLowerCase().trim()
                          return newinput && newjson.includes(newinput);
                        })
                        .map((c) => (
                          <ul key={c.id}>
                            <li
                              
                              onClick={() => handleSearch(a, c)}
                            >
                              <IoSearchOutline/>  {a.title.match('Visa') ? `${a.title} for ${c.title}` : c.title}

                            </li>
                          </ul>
                        ))}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
