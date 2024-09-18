import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import ImageSocials from './stickycomps/ImageSocials';
import NavMenu from './stickycomps/NavMenu';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Button for hamburger menu */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg z-50"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#040B14] shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <ImageSocials />

        <NavMenu onMenuItemClick={closeMenu} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
