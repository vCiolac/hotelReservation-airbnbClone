import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import airbnb from '../assets/airbnb.svg';
import userIcon from '../assets/user.svg';
import worldIcon from '../assets/world.svg';
import barsIcon from '../assets/bars.svg';
import NavCalendar from './NavCalendar';

interface DesktopNavbarProps {
  headerVisible: boolean;
}

function DesktopNavbar({ headerVisible }: DesktopNavbarProps) {
  const [selectedButton, setSelectedButton] = useState('acomodacoes');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

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
        src={airbnb}
        alt="logo"
      />
    </Link>
  );

  return (
    <div className={`z-50 w-full fixed top-0 bg-white`}>
      <div className="w-full">
        <div className="grid grid-cols-3 items-center">
          {Logo}
          <div className="flex justify-center gap-6 items-center">
            {headerVisible ? (
              <>
                <span
                  className={`rounded-full px-2 cursor-pointer  hover:bg-gray-200 hover:text-black ${selectedButton === 'acomodacoes' ? 'text-black font-semibold' : 'text-gray-700'
                    }`}
                  onClick={() => handleButtonClick('acomodacoes')}
                >
                  Acomodações
                </span>
                <span
                  className={`rounded-full px-2 cursor-pointer hover:bg-gray-200 hover:text-black ${selectedButton === 'experiencias' ? 'text-black font-semibold' : 'text-gray-700'
                    }`}
                  onClick={() => handleButtonClick('experiencias')}
                >
                  Experiências
                </span>
                <span
                  className={`rounded-full px-2 whitespace-nowrap cursor-pointer hover:bg-gray-200 hover:text-black ${selectedButton === 'experienciasOnline' ? 'text-black font-semibold' : 'text-gray-700'
                    }`}
                  onClick={() => handleButtonClick('experienciasOnline')}
                >
                  Experiências online
                </span>
              </>
            ) :
              (
                <NavCalendar />
              )}
          </div>
          <div className="flex justify-center space-x-6 items-center">
            <span
              className="text-black whitespace-nowrap font-semibold text-sm"
            >
              Anuncie seu espaço no Airbnb
            </span>
            <img src={worldIcon} alt="world-icon" className="w-6 h-6" />
            <button onClick={toggleMenu} className="focus:outline-none">
              <img src={barsIcon} alt="bars-icon" className="w-6 h-6" />
            </button>
            <button onClick={toggleMenu} className="focus:outline-none">
              <img src={userIcon} alt="user-icon" className="w-10" />
            </button>
            {isMenuOpen && (
              <div ref={menuRef} className="absolute top-16 right-0 mt-2 w-48 bg-white shadow-lg rounded-md border-2 border-gray-200 overflow-hidden z-10" onClick={handleClickOutside}>
                <div className="py-1">
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => { /* handle button click */ }}>
                    Cadastrar-se
                  </button>
                  <button className="block px-3 py-2 text-gray-800 hover:bg-gray-100" onClick={() => { /* handle button click */ }}>
                    Entrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {headerVisible &&
        <div className='flex justify-center align-middle'>
          <NavCalendar />
        </div>}
    </div>
  );
}

export default DesktopNavbar;
