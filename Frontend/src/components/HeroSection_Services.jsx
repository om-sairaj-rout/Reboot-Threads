import { motion } from "motion/react";

const HeroSection = ({title, desc, heroImg}) => {
  return ( 
    <>
    {/* Hero Section with Background Image */}
      <div className="relative bg-linear-to-r from-[#C93D2F] to-[#E8A826] h-[90vh] flex items-center overflow-hidden">
        <div className="px-10 relative z-10 flex justify-between h-full w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full md:w-1/2 text-white flex flex-col justify-center"
          >
            <h1 className="text-5xl font-bold mb-8">{title}</h1>
            <p className="text-xl mb-8 ">
              {desc}
            </p>
          </motion.div>
          {/* This is a placeholder for the image, you would use an <img> tag with your actual image source */}
          <div className="hidden md:block w-1/2 absolute right-0 top-0 h-full">
             <img src={heroImg} alt="Hero image" className="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection