import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'; 
import ayanfe from '../assets/images/ayanfe.png';

const Header = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Ikujebi Kehinde.",
        "WebDesigner.",
        "Developer",
        "Business Expert",
        "Project Manager"
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

  return (
    <div>
      
      <div
        id="header"
        className="home h-screen flex items-center justify-center bg-gray-900"
        style={{ backgroundImage: `url(${ayanfe})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="container text-center">
          <div className="header-content">
            <h1 className="text-white text-4xl mb-4">I'm <span ref={typedElement}></span></h1>
            <p className="text-gray-400">Developer, Web Developer, Business Manager</p>
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
