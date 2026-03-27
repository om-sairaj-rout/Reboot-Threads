import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import heroImg from "../assets/Home-Hero-Img.jpg";

const HeroText = [
  {
    id: 1,
    text1: "Tshirts for",
    text2: "Corporate",
    text3: "Events",
    para: "Get your custom design t-shirts for corporate events to promote your business",
  },
  {
    id: 1,
    text1: "Tshirts for",
    text2: "your Casual",
    text3: "Events",
    para: "Get your custom design t-shirts for all types of casual events like birthday, weddings, or any vacation with friends",
  },
  {
    id: 1,
    text1: "Custom",
    text2: "Professional",
    text3: "T-Shirts",
    para: "Look professional with our custom printed t-shirts with your logo/branding.",
  }
]

const HomeHero = () => {
  
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === HeroText.length - 1 ? 0 : prev + 1));
  };
  
  useEffect(() => {
      const timer = setInterval(() => {
        nextSlide();
      }, 4000);
  
      return () => clearInterval(timer); // Cleanup timer on unmount
    }, []);

  const textVarients = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5, // Wait a moment after the green bar starts before showing text
      },
    },
  };

  return (
    <>
      <div className="relative flex items-center flex-col-reverse w-full h-screen bg-cover bg-center overflow-hidden"
      style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImg})`,
  }}
      >
        
        <motion.div
          key={index}
          varients={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute top-[20vh] left:0 lg:left-30 w-[70%] lg:w-[80%] h-auto lg:h-[70vh] pl-0 lg:pl-[40%] px-6 lg:px-0 z-10 lg:text-left"
        >
          <motion.h1
            variants={textVarients}
            className="text-4xl lg:text-7xl text-white font-extrabold leading-tight"
          >
            {HeroText[index].text1}
          </motion.h1>
          <motion.h1
            variants={textVarients}
            className="text-4xl lg:text-7xl text-white font-extrabold leading-tight"
          >
            {HeroText[index].text2}
          </motion.h1>
          <motion.h1
            variants={textVarients}
            className="text-4xl lg:text-7xl text-white font-extrabold leading-tight"
          >
            {HeroText[index].text3} 
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="mt-6 lg:mt-10 text-white text-lg"
          >
            {HeroText[index].para}
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default HomeHero;
