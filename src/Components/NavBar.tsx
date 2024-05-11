/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import airbnb from '../assets/airbnb.svg';
import { Context } from '../Context/Context';
import userIcon from '../assets/user.svg';
import worldIcon from '../assets/world.svg';
import barsIcon from '../assets/bars.svg';

function NavBar() {
  // const { location, setLocation } = useContext(Context);
  // const { checkIn, setCheckIn, checkOut, setCheckOut, guests, setGuests } = useContext(Context);

  const [header, setHeader] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [selectedButton, setSelectedButton] = useState('acomodacoes');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const changeHeader = () => {
      if (window.scrollY >= 80) {
        setHeader(true);
        setShowSearch(true);
      } else {
        setHeader(false);
        setShowSearch(false);
      }
    };

    window.addEventListener('scroll', changeHeader);

    return () => {
      window.removeEventListener('scroll', changeHeader);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const Logo = (
    <Link to="/" className="flex flex-row flex-grow">
      <img
        className="w-28 h-20 ml-8 mb-1 p-1"
        src={ airbnb }
        alt="logo"
      />
    </Link>
  );

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <header className="z-50 w-full">
      <div className="w-full">
        <div className="grid grid-cols-3 items-center">
          {Logo}
          <div className="flex justify-center gap-6 items-center">
            <span
              className={ `rounded-full px-2 cursor-pointer ${
                selectedButton === 'acomodacoes' ? 'text-black font-semibold' : 'text-gray-700'
              } hover:bg-gray-200 hover:text-black` }
              onClick={ () => handleButtonClick('acomodacoes') }
            >
              Acomodações
            </span>
            <span
              className={ `rounded-full px-2 cursor-pointer ${
                selectedButton === 'experiencias' ? 'text-black font-semibold' : 'text-gray-700'
              } hover:bg-gray-200 hover:text-black` }
              onClick={ () => handleButtonClick('experiencias') }
            >
              Experiências
            </span>
            <span
              className={ `rounded-full px-2 cursor-pointer ${
                selectedButton === 'experienciasOnline' ? 'text-black font-semibold' : 'text-gray-700'
              } hover:bg-gray-200 hover:text-black` }
              onClick={ () => handleButtonClick('experienciasOnline') }
            >
              Experiências online
            </span>
          </div>
          <div className="flex justify-center space-x-6 items-center">
            <span
              className="text-black font-semibold text-sm"
            >
              Anuncie seu espaço no Airbnb
            </span>
            <img src={ worldIcon } alt="world-icon" className="w-6 h-6" />
            <button onClick={ toggleMenu } className="focus:outline-none">
              <img src={ barsIcon } alt="bars-icon" className="w-6 h-6" />
            </button>
            <button onClick={ toggleMenu } className="focus:outline-none">
              <img src={ userIcon } alt="user-icon" className="w-10" />
            </button>
            {isMenuOpen && (
              <div ref={ menuRef } className="absolute top-16 right-0 mt-2 w-48 bg-white shadow-lg rounded-md border-2 border-gray-200 overflow-hidden z-10">
                <div className="py-1">
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={ () => { /* handle button click */ } }>
                    Cadastrar-se
                  </button>
                  <button className="block px-3 py-2 text-gray-800 hover:bg-gray-100" onClick={ () => { /* handle button click */ } }>
                    Entrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
