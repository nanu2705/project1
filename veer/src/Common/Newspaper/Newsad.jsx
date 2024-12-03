import React, { useState } from 'react';
import './Newsad.scss';
import quarterImg from '../../Assets/images/quarter.jpg';
import verticalImg from '../../Assets/images/quarter.jpg';
import horizontalImg from '../../Assets/images/quarter.jpg';
import fullImg from '../../Assets/images/quarter.jpg';

const Newsad = () => {
  const [inputText, setInputText] = useState('');
  const [adSize, setAdSize] = useState('');
  const [price, setPrice] = useState(0);
  const [hoveredSize, setHoveredSize] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Pricing for different ad sizes
  const sizeRates = {
    quarter: 2000,
    halfVertical: 4000,
    halfHorizontal: 4000,
    full: 8000,
  };

  // Images for different ad sizes
  const sizeImages = {
    quarter: quarterImg,
    halfVertical: verticalImg,
    halfHorizontal: horizontalImg,
    full: fullImg,
  };

  // Predefined suggestions based on ad sizes
  const adSuggestions = {
    quarter: [
      'Compact and precise message.',
      'Perfect for promotions and offers.',
      'Small space for big impact.',
    ],
    halfVertical: [
      'Highlight key details in style.',
      'Ideal for product launches.',
      'Perfect for vertical visuals.',
    ],
    halfHorizontal: [
      'Ample space for creativity.',
      'Great for showcasing deals.',
      'Perfect for horizontal layouts.',
    ],
    full: [
      'Maximum visibility guaranteed.',
      'Best for brand stories.',
      'Full-page impact for full attention.',
    ],
  };

  const handleTextChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    calculatePrice(adSize, text.length);
  };

  const handleSizeChange = (e) => {
    const size = e.target.value;
    setAdSize(size);
    setSuggestions(adSuggestions[size] || []);
    calculatePrice(size, inputText.length);
  };

  const calculatePrice = (size, characterCount) => {
    if (size) {
      const basePrice = sizeRates[size] || 0;
      const charPrice = Math.ceil(characterCount / 20) * 160;
      setPrice(basePrice + charPrice);
    }
  };

  const handleMouseEnter = (size) => {
    setHoveredSize(size);
  };

  const handleMouseLeave = () => {
    setHoveredSize('');
  };

  return (
    <div className="newspaper-ad-page">
      <h1>Newspaper Ad Pricing</h1>
      <p>Select the ad size and enter your ad text below. The price will be calculated accordingly.</p>

      <div className="size-selection">
        <label htmlFor="adSize">Select Ad Size:</label>
        <select id="adSize" value={adSize} onChange={handleSizeChange}>
          <option value="" disabled>
            -- Select Ad Size --
          </option>
          <option
            value="quarter"
            onMouseEnter={() => handleMouseEnter('quarter')}
            onMouseLeave={handleMouseLeave}
          >
            Quarter Page (16cm x 25cm)
          </option>
          <option
            value="halfVertical"
            onMouseEnter={() => handleMouseEnter('halfVertical')}
            onMouseLeave={handleMouseLeave}
          >
            Half Page Vertical (16cm x 46cm)
          </option>
          <option
            value="halfHorizontal"
            onMouseEnter={() => handleMouseEnter('halfHorizontal')}
            onMouseLeave={handleMouseLeave}
          >
            Half Page Horizontal (32.9cm x 25cm)
          </option>
          <option
            value="full"
            onMouseEnter={() => handleMouseEnter('full')}
            onMouseLeave={handleMouseLeave}
          >
            Full Page (32.9cm x 52cm)
          </option>
        </select>
      </div>

      {hoveredSize && (
        <div className="hover-image">
          <img
            src={sizeImages[hoveredSize]}
            alt={`${hoveredSize} ad size`}
            onError={(e) => (e.target.style.display = 'none')}
          />
        </div>
      )}

      <div className="input-section">
        <textarea
          value={inputText}
          onChange={handleTextChange}
          placeholder="Enter your ad text here..."
          rows="5"
          cols="50"
        ></textarea>
        <div className="character-count">
          <span>Character count: {inputText.length}</span>
        </div>
      </div>

      {suggestions.length > 0 && (
        <div className="suggestions-section">
          <h3>Suggestions for {adSize}:</h3>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => setInputText(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="pricing-section">
        <h3>Price: ₹{price}</h3>
        <p>Base prices vary by size. Additional ₹160 is charged for every 20 characters in the text.</p>
      </div>

      <button className="submit-btn">Submit Ad</button>
    </div>
  );
};

export default Newsad;
