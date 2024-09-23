import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import airbnb from '../assets/airbnb.svg';
import userIcon from '../assets/user.svg';
import worldIcon from '../assets/world.svg';
import barsIcon from '../assets/bars.svg';
import { motion } from 'framer-motion';

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const Logo = (
    <Link to="/" className="flex justify-center w-full">
      <img className="w-20 h-16" src={airbnb} alt="logo" />
    </Link>
  );

  return (
    <motion.div
      className={`z-50 w-full fixed top-0 bg-white`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center p-4">
        {Logo}
        <div className="flex items-center">
          <button className="focus:outline-none">
            <img src={worldIcon} alt="world-icon" className="w-5 h-5 mr-4" />
          </button>
          <div onClick={toggleMenu} className="flex items-center border border-gray-300 p-2 rounded-full">
            <button className="focus:outline-none mr-3">
              <img src={barsIcon} alt="bars-icon" className="w-5 h-5" />
            </button>
            <button className="focus:outline-none">
              <img src={userIcon} alt="user-icon" className="w-8" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div ref={menuRef} className="absolute top-16 right-0 mt-2 w-48 bg-white shadow-lg rounded-md border-2 border-gray-200 overflow-hidden z-10">
          <div className="py-1">
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Cadastrar-se
            </button>
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Entrar
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default MobileNavbar;
