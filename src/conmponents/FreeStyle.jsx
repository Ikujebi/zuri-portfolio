import {useState,useEffect} from 'react'
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FreeStyle = () => {
    const pic1 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004131.png";
  const pic2 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004124-1.png";
  const pic3 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004133.png";
  const pic4 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004132.png";
  const pic5 =
    "https://sailab.ng/wp-content/uploads/2023/10/Group-1000004131.png";

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
    autoplaySpeed: 5000,
  };
  return (
    <div className="container ">
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
            className="w-full  px-[3rem] 2xl:px-[10rem] mb-4  xl:h-[40rem] 2xl:h-[40rem] lg:h-[30rem] md:h-[33rem] h-[17rem]"
          />
        </motion.div>
      ))}
    </Slider>
  </div>
  )
}

export default FreeStyle