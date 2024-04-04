import React from 'react';
import { Row, Col } from 'antd';
import { IoCallOutline } from "react-icons/io5";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GooglePlusOutlined,
  WhatsAppOutlined
  
} from '@ant-design/icons';
import twiter from '../assets/images/twiter.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  const emailAddress = 'ikujebikehinde@gmail.com';

    const phoneNumber = "08137977542";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <div id="footer" className="text-center bg-gray-300 text-gray-500">
      <div className="container">
        <div className="socials-media text-center">
          <ul className="list-unstyled flex justify-center items-center gap-3">
            <li><Link target="blank"  to={"https://www.facebook.com/ikujebikehinde"}><FacebookOutlined /></Link></li>
            <li><Link target="blank"  to={"https://twitter.com/ikujebikehinde"}><TwitterOutlined /></Link></li>
            <li><Link target="blank"  to={"https://www.instagram.com/ikujebikehinde"}><InstagramOutlined /></Link></li>
            <li><Link target="_blank" to={`mailto:${emailAddress}`}><GooglePlusOutlined /></Link></li>
            <li><Link to={whatsappURL} target="_blank"><WhatsAppOutlined /></Link></li>
            <li><Link to="tel:+2348137977542" className='flex gap-1 hover:text-green-700'> <span className='mt-1'><IoCallOutline /></span>  </Link></li>
          </ul>
        </div>
        <p>&copy; Copyrights Ayanfe. All rights reserved.</p>
        <div className="credits">Designed by Ayanfe</div>
      </div>
    </div>
  );
};

export default Footer;