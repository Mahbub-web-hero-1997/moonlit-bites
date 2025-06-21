import React, { useContext, useState, useRef, useEffect } from 'react';
import { AuthContext } from '../../ContextAPI/AuthProvider';

const Category = () => {
  const {
    handlePopularMenus,
    handleAllMenus,
    handleSaladItems,
    handlePizzaItems,
    handleDessertItems,
    handleDrinksItems,
    handleSoupItems,
  } = useContext(AuthContext);

  const categories = [
    {
      name: 'All',
      onClick: handleAllMenus,
      img: 'https://i.ibb.co/k9RHBXB/salad-bg.jpg',
    },
    {
      name: 'Salad',
      onClick: handleSaladItems,
      img: 'https://i.ibb.co/k9RHBXB/salad-bg.jpg',
    },
    {
      name: 'Pizza',
      onClick: handlePizzaItems,
      img: 'https://i.ibb.co/f9mTDGf/slide2.jpg',
    },
    {
      name: 'Dessert',
      onClick: handleDessertItems,
      img: 'https://i.ibb.co/VgF9TFd/slide4.jpg',
    },
    {
      name: 'Popular',
      onClick: handlePopularMenus,
      img: 'https://i.ibb.co/8Y6vBWR/slide1.jpg',
    },
    {
      name: 'Drinks',
      onClick: handleDrinksItems,
      img: 'https://i.ibb.co/KsMZps5/slide3.jpg',
    },
    {
      name: 'Soup',
      onClick: handleSoupItems,
      img: 'https://i.ibb.co/7ntTWNp/soup-bg.jpg',
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (name, onClick) => {
    setSelectedCategory(name);
    onClick();
    setDropdownOpen(false);
  };

  return (
    <div className="sticky top-16 bg-white z-10 border-y border-gray-200 shadow-md py-4 px-2 md:px-10 max-w-7xl mx-auto">

      {/* Desktop / Tablet: grid menu */}
      <div className="hidden md:grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-10 justify-items-center">
        {categories.map(({ name, onClick, img }) => (
          <button
            key={name}
            onClick={() => handleSelect(name, onClick)}
            className="flex flex-col items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2"
          >
            <img
              src={img}
              alt={name}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-transparent hover:border-orange-500 transition-all duration-300 shadow-md hover:shadow-lg"
              loading="lazy"
            />
            <span className="text-sm md:text-lg font-medium select-none">{name}</span>
          </button>
        ))}
      </div>

      {/* Mobile: dropdown menu */}
      <div className="md:hidden relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-orange-100 rounded-md font-semibold text-orange-600 hover:bg-orange-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
        >
          {selectedCategory}
          <svg
            className={`w-5 h-5 ml-2 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {dropdownOpen && (
          <ul
            className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none"
            role="listbox"
            tabIndex={-1}
          >
            {categories.map(({ name, onClick, img }) => (
              <li key={name} className="cursor-pointer hover:bg-orange-100" role="option" tabIndex={0}>
                <button
                  onClick={() => handleSelect(name, onClick)}
                  className="w-full flex items-center gap-3 p-3 text-gray-700 hover:text-orange-600 transition-colors duration-300 focus:outline-none"
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-transparent hover:border-orange-500 transition-all duration-300 shadow"
                    loading="lazy"
                  />
                  <span className="font-medium">{name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Category;
