import React, { useState, useEffect } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import SliderMenu from './SliderMenu';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    const changeHeaderVisibility = () => {
      setHeaderVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', changeHeaderVisibility);

    return () => {
      window.removeEventListener('scroll', changeHeaderVisibility);
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobileNavbar /> : <DesktopNavbar headerVisible={headerVisible} />}
      <SliderMenu headerVisible={headerVisible} />
    </div>
  );
};

export default Header;
