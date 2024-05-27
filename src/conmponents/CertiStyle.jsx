import {useState,useEffect} from 'react'
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cert1 from '../assets/images/certi01.jpg'
import cert2 from '../assets/images/certi02.jpg'
import cert3 from '../assets/images/certi03.jpg'
import cert4 from '../assets/images/certi04.jpg'
import certa1 from '../assets/images/certa01.jpg'
import { useNightMode } from './NightModeContext';

const FreeStyle = () => {
  const { nightMode } = useNightMode();
    const pic1 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004131.png";
    const pic2 =
    cert1;
  const pic3 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004124-1.png";
  const pic4 =
    cert2;
  const pic5 =
   cert3;
  const pic6 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004133.png";
  const pic7 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004132.png";
  const pic8 =
   cert4;
  const pic9 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004131.png";
  const pic10 =
    certa1;

    const [_index, setIndex] = useState(0);
  const slides = [
    {
      image: pic1,
    },
    {
      image: pic2,
    },
    {
      image: pic3,
    },
    {
      image: pic4,
    },
    {
      image: pic5,
    },
    {
      image: pic6,
    },
    {
      image: pic7,
    },
    {
      image: pic8,
    },
    {
      image: pic9,
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
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "-100%" },
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className={nightMode ? 'navbar-dark' : 'navbar-light container my-[9rem]'}>
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
          <img
            src={item.image}
            alt="service"
            className="w-full flex justify-center mx-auto md:w-[60%] xl:w-[70%] 2xl:w-[70%]   mb-4  xl:h-[40rem] 2xl:h-[40rem] lg:h-[30rem] md:h-[33rem] h-[17rem]"
          />
        </motion.div>
      ))}
    </Slider>
  </div>
  )
}

export default FreeStyle