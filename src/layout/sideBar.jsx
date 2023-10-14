import React, { useState, useEffect, useRef } from 'react';
import drop from '../assets/images/drop1.png';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const componentRef = useRef(null);

  const options = [
    { label: 'Home', value: 'home', href:"header" },
    { label: 'About', value: 'about' ,href:"header"},
    { label: 'Services', value: 'services',href:'services' },
    { label: 'Portfolio', value: 'portfolio',href:'portfolio' },
    { label: 'Stack', value: 'stack',href:'stack' },
    { label: 'Contact', value: 'contact' , href: 'contact'},
    { label: 'Footer', value: 'footer' , href: 'footer'},
  ];

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  // Function to show the sidebar when scrolling down
  const showSidebarOnScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      setSidebarVisible(true);
      // Automatically close the sidebar after 5 seconds
      setTimeout(() => {
        closeSidebar();
      }, 5000);
    } else {
      setSidebarVisible(false);
    }
  };

  // Attach a scroll event listener to the window
  useEffect(() => {
    window.addEventListener('scroll', showSidebarOnScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', showSidebarOnScroll);
    };
  }, []);

  // Event listener to close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={componentRef}>
      {isSidebarVisible && (
        <nav className="bg-white py-4 w-screen top-0 fixed z-10 px-2">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="logo text-gray-700 text-2xl font-bold">
                <a href="index.html">AYANFE</a>
              </div>
              <div className="responsive">
                <i data-icon="m" className="ion-navicon-round text-white"></i>
              </div>
              <div className="relative">
                <img
                  src={drop}
                  alt="menu"
                  onClick={toggleDropdown}
                  className="cursor-pointer"
                />
                {isDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {options.map((option) => (
                     <li
                     key={option.value}
                     className="px-4 py-2 cursor-pointer hover-bg-gray-200"
                     onClick={() => {
                       const targetSection = document.querySelector(`#${option.href}`);
                       if (targetSection) {
                         targetSection.scrollIntoView({ behavior: 'smooth' });
                         setDropdownOpen(false);
                       }
                     }}
                   >
                     {option.label}
                   </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default SideBar;
