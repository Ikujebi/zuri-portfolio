import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import webd from '../assets/images/webd-icon.jpg';
import webp from '../assets/images/4.jpg';
import mob from '../assets/images/mob.png';
import manager from '../assets/images/manager.png';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      image: webd,
      title: 'Web Development',
      description: 'I specialize in building scalable web applications.',
    },
    {
      image: webp,
      title: 'Web Design',
      description: "I'm passionate about creating visually stunning webpages.",
    },
    {
      image: mob,
      title: 'Mobile Apps',
      description: "I'm currently learning to build mobile apps using React Native.",
    },
    {
      image: manager,
      title: 'Project Management',
      description: 'Having studied business administration for my first degree, I am currently trying to hone my project management skills.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const cardVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: '0%' },
    exit: { opacity: 0, x: '-100%' },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay interval to 5000 milliseconds (5 seconds)
  };
  return (
    <div id="services" className="flex justify-center align-center mb-[5rem] px-2">
    <div className="container">
      <Slider {...sliderSettings}>
        {slides.map((item, itemIndex) => (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            key={itemIndex}
          >
            <Card className="service-card h-[24.9rem]">
              <img src={item.image} alt="service" className="w-[7rem] xl:text-[1.2rem] lg:text-[1.2rem] md:text-[1rem] text-[.7rem] px-1 xl:w-[15rem] lg:w-[15rem] md:w-[15rem] mb-4 xl:h-[15rem] lg:h-[15rem] md:h-[15rem] h-[8rem]" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 flex-grow xl:text-[1.2rem] lg:text-[1.2rem] md:text-[.85rem] text-[.7rem]">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default Services;
