import React, { useState } from 'react';
import rightArrow from '../assets/right-arrow.svg';
import leftArrow from '../assets/left-arrow.svg';
interface DesktopNavbarProps {
  headerVisible: boolean;
}

function SliderMenu({ headerVisible }: DesktopNavbarProps) {
  const [arrowClicked, setArrowClicked] = useState(false);

  const handleRightArrow = () => {
    setArrowClicked(true);
  };

  const handleLeftArrow = () => {
    setArrowClicked(false);
  };

  return (
    <div className={`${headerVisible ? 'top-48' : 'top-28'} fixed w-full flex justify-center items-center`}>
      {arrowClicked && (
        <button onClick={handleLeftArrow} className="p-1 rounded-full border border-gray-500 bg-white">
          <img src={leftArrow} alt="arrow" className="w-4 h-4" />
        </button>
      )}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 mx-2">
        <a href="#" className="p-4 bg-gray-200 hover:shadow-lg rounded-lg">
          Opção 1
        </a>
        <a href="#" className="p-4 bg-gray-200 hover:shadow-lg rounded-lg">
          Opção 2
        </a>
        <a href="#" className="p-4 bg-gray-200 hover:shadow-lg rounded-lg">
          Opção 3
        </a>
        <a href="#" className="p-4 bg-gray-200 hover:shadow-lg rounded-lg">
          Opção 4
        </a>
        <a href="#" className="p-4 bg-gray-200 hover:shadow-lg rounded-lg">
          Opção 5
        </a>
        <a href="#" className="p-4 bg-gray-200 hover:shadow-lg rounded-lg">
          Opção 6
        </a>
        <a href="#" className="p-4 bg-gray-200 hover:shadow-lg rounded-lg">
          Opção 7
        </a>
        <a href="#" className="p-4 bg-gray-200 hover:shadow-lg rounded-lg">
          Opção 8
        </a>
        <a href="#" className="p-4 bg-gray-200 hover:shadow-lg rounded-lg">
          Opção 9
        </a>
        <a href="#" className="p-4 bg-gray-200 hover:shadow-lg rounded-lg">
          Opção 10
        </a>
      </div>
      <button onClick={handleRightArrow} className="p-1 rounded-full border border-gray-500 bg-white">
        <img src={rightArrow} alt="arrow" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SliderMenu;