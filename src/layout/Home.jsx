import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import ayanfe from '../assets/images/ayanfe.png';
// import ayanfe2 from '../assets/images/ayanfeLinkdn.jpg';
import { useNightMode } from '../conmponents/NightModeContext';
import styled from 'styled-components';


const Header = () => {
  const typedElement = useRef(null);
  const { nightMode, toggleNightMode } = useNightMode();

  useEffect(() => {
    const options = {
      strings: [
        "Ikujebi Kehinde.",
        "WebDesigner.",
        "Developer",
        "Business Expert",
        "Project Manager",
        "Digital marketter",
      ],
      typeSpeed: 50,
      startDelay: 0,
      backSpeed: 25,
      backDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      contentType: 'text',
    };
  
  
    // Initialize Typed.js
    const typed = new Typed(typedElement.current, options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const StyledButton = styled.button`
  background-color: ${props => (props.nightMode ? '#333' : '#fff')};
  color: ${props => (props.nightMode ? '#fff' : '#333')};
  /* Other styles */
`;

  return (
    <div>

      <div
        id="header"
        className="home xl:mt-[2rem] 2xl:mt-[2rem] h-screen flex items-center justify-center bg-gray-900"
        style={{ backgroundImage: `url(${ayanfe})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container text-center">
          <div> <StyledButton nightMode={nightMode} onClick={toggleNightMode}>
        {nightMode ? 'Disable Night Mode' : 'Activate Night Mode'}
      </StyledButton></div>
          <div className="header-content">

            <h1 className="text-white text-4xl mb-4">I'm <span ref={typedElement}></span></h1>
            <p className="text-gray-400">Developer, Web Developer, Business Manager,Digital marketter</p>
            <ul className="list-unstyled list-social mt-4">
              <li><a href="#"><i className="ion-social-facebook text-white"></i></a></li>
              <li><a href="#"><i className="ion-social-twitter text-white"></i></a></li>
              <li><a href="#"><i className="ion-social-instagram text-white"></i></a></li>
              <li><a href="#"><i className="ion-social-googleplus text-white"></i></a></li>
              <li><a href="#"><i className="ion-social-tumblr text-white"></i></a></li>
              <li><a href="#"><i className="ion-social-dribbble text-white"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* End section header */}
    </div>
  );
}

export default Header;
