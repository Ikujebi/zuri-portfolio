import React from 'react';
import { Row, Col } from 'antd';
import { IoCallOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import {
  FacebookOutlined,
  
  InstagramOutlined,
  GooglePlusOutlined,
  WhatsAppOutlined
  
} from '@ant-design/icons';
import twiter from '../assets/images/twiter.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  const emailAddress = 'ikujebikehinde@gmail.com';

  const socialMedia = [
    {
      icon:<FacebookOutlined />,
      to: "https://www.facebook.com/ikujebikehinde"

    },
    {
      icon:<FaXTwitter />,
      to: "https://twitter.com/ikujebikehinde"

    },
    {
      icon:<InstagramOutlined />,
      to: "https://www.instagram.com/ikujebikehinde"

    },
    {
      icon:<GooglePlusOutlined />,
      to: `mailto:${emailAddress}`

    },
    {
      icon:<FacebookOutlined />,
      to: "https://www.facebook.com/ikujebikehinde"

    }
  ]

    const phoneNumber = "08137977542";
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <div id="footer" className="md:pl-[5rem] 2xl:pl-[10rem] xl:pl-[10rem] w-full bg-gray-300 text-gray-500">
      <div className="container text-center">
        <div className="socials-media ">
          <ul className="list-unstyled flex justify-center items-center gap-5">
            {socialMedia.map((media,i)=>(
              <li key={i} className='border-2 rounded-full px-1 bg-white'><Link target="blank"  to={media.to}>{media.icon}</Link></li>
            ))}
            
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