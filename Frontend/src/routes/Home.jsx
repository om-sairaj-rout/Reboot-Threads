import HomeHero from "../components/HomeHero";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import TS from "../assets/customTS.webp";
import TS2 from "../assets/custom-t-shirt-2.png";
import { TiTick } from "react-icons/ti";
import { ImQuotesLeft } from "react-icons/im";
import { useNavigate } from "react-router";
import LogoStrip from "../components/LogoStrip";
import { AnimatePresence, motion } from "motion/react";
import img from "../assets/professional-img.png";
import { useEffect, useState } from "react";
import customTshirts from "../assets/custom-tshirts.jpg";
import customHoodies from "../assets/custom-hoodies.jpg";
import shipping from "../assets/shipping.svg";
import fastDelivery from "../assets/fast-delivery.svg";
import quality from "../assets/quality.svg";
import designAssistance from "../assets/design-assistance.svg";
import screenPrinting from "../assets/screen-printing.svg";
import dtfPrinting from "../assets/dtf-printing.svg";
import sublimationPrinting from "../assets/sublimation-printing.svg";

const feedbacks = [
  {
    id: 1,
    name: "Alok Nikhil",
    text: "Nice quality...material they use is really good. I am satisfied.",
  },
  {
    id: 2,
    name: "Sanya Sharma",
    text: "The printing is top-notch and the delivery was on time. Highly recommended!",
  },
  {
    id: 3,
    name: "Rahul Verma",
    text: "Great customer service and very professional work. Will order again.",
  },
  {
    id: 4,
    name: "Priya Patel",
    text: "Fast delivery and excellent quality. Very happy with the purchase!",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const handleQuotationClick = () => {
    navigate("/GetQuotation");
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.15 },
  };

  const textVariants = {
    rest: { x: 0 },
    hover: { x: -10 },
  };

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  // Previous Slide Logic
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(timer); // Cleanup timer on unmount 
  }, [index]);

  return (
    <>
      <HomeHero />
      {/* section 1 */}
      <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-nowrap gap-6 w-full h-auto lg:h-screen px-4 py-10 md:px-15 md:py-20">
        <motion.div
          // 1. Parent: Handles size, overflow, and animation state
          onClick={() => navigate("/custom-tshirt")}
          className="relative w-full lg:w-130 h-[50vh] lg:h-full overflow-hidden cursor-pointer"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* 2. Background Layer: Handles the Image + Gradient (Scales on Hover) */}
          <motion.div
            variants={imageVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{backgroundImage: `linear-gradient(to bottom,transparent 20%,rgba(0,0,0,0.4)), url(${customTshirts})`}}
          />

          {/* 3. Text Layer: Handles the Title (Slides up on Hover) */}
          <motion.h1
            variants={textVariants}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-6 text-white text-2xl font-bold z-10"
          >
            Custom T-Shirt
          </motion.h1>
        </motion.div>
        <motion.div
          // 1. Parent: Handles size, overflow, and animation state
          onClick={() => navigate("/hoodies")}
          className="relative w-full lg:w-130 h-[50vh] lg:h-full overflow-hidden cursor-pointer"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* 2. Background Layer: Handles the Image + Gradient (Scales on Hover) */}
          <motion.div
            variants={imageVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
             style={{backgroundImage: `linear-gradient(to bottom,transparent 20%,rgba(0,0,0,0.4)), url(${customHoodies})`}}
          />

          {/* 3. Text Layer: Handles the Title (Slides up on Hover) */}
          <motion.h1
            variants={textVariants}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-6 text-white text-2xl font-bold z-10"
          >
            Hoodies & Sweatshirts
          </motion.h1>
        </motion.div>
        <motion.div
          // 1. Parent: Handles size, overflow, and animation state
          onClick={() => navigate("/professional")}
          className="relative w-full lg:w-130 h-[50vh] lg:h-full overflow-hidden cursor-pointer"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* 2. Background Layer: Handles the Image + Gradient (Scales on Hover) */}
          <motion.div
            variants={imageVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent 20%, rgba(0,0,0,0.4)), url(${img})`,
            }}
          />

          {/* 3. Text Layer: Handles the Title (Slides up on Hover) */}
          <motion.h1
            variants={textVariants}
            transition={{ duration: 0.3 }}
            className="absolute bottom-6 left-6 text-white text-2xl font-bold z-10"
          >
            Professional T-Shirt
          </motion.h1>
        </motion.div>
      </div>
      {/* section 2 */}
      <div
        className="w-full h-auto lg:h-[40vh] bg-[#e0f2f1] flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center gap-6 px-4 py-10 lg:px-15"
      >
        {/* Item 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-[46%] lg:w-[25%] h-full flex flex-col items-center justify-center gap-1 p-4 lg:p-0 origin-left"
        >
          <img
            className="w-20 h-15 object-cover"
            src={shipping}
            alt="img1"
          />
          <h1 className="font-bold text-xl">Free Shipping*</h1>
          <p className="text-center">
            We offer free delivery shipping within 7 days.
          </p>
        </motion.div>

        {/* Item 2 */}
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 ,delay: 0.2}} 
        className="w-full md:w-[46%] lg:w-[25%] h-full flex flex-col items-center justify-center gap-1 p-4 lg:p-0">
          <img
            className="w-20 h-15 object-cover"
            src={fastDelivery}
            alt="img2"
          />
          <h1 className="font-bold text-xl">All India Delivery</h1>
          <p className="text-center">
            We provide shipping all over india as earliest possible.
          </p>
        </motion.div>

        {/* Item 3 */}
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 ,delay: 0.4}}   
        className="w-full md:w-[46%] lg:w-[25%] h-full flex flex-col items-center justify-center gap-1 p-4 lg:p-0">
          <img
            className="w-20 h-15 object-cover"
            src={quality}
            alt="img3"
          />
          <h1 className="font-bold text-xl">Print Guarantee</h1>
          <p className="text-center">
            We provide 100% print assurance of our printed tshirts.
          </p>
        </motion.div>

        {/* Item 4 */}
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 ,delay: 0.6}}   
        className="w-full md:w-[46%] lg:w-[25%] h-full flex flex-col items-center justify-center gap-1 p-4 lg:p-0">
          <img
            className="w-20 h-15 object-cover"
            src={designAssistance}
            alt="img4"
          />
          <h1 className="font-bold text-xl">Design Assistance</h1>
          <p className="text-center">
            We have talented designers to help you finalize your design.
          </p>
        </motion.div>
      </div>
      
      {/* section 4 */}
      <motion.div className="w-full h-auto lg:h-[130vh] bg-linear-to-b from-[#e0f2f1] to-transparent py-12 flex flex-col">
        <div className="w-[90%] h-auto lg:h-[20%] mx-auto ">
          <h1 className="text-2xl lg:text-4xl font-semibold leading-8 lg:leading-12">
            One-stop Solution for Custom T-Shirt,
          </h1>
          <h1 className="text-2xl lg:text-4xl font-semibold leading-8 lg:leading-12">
            Hoodies, Sweatshirt Printing needs with
          </h1>
          <h1 className="text-2xl lg:text-4xl font-semibold leading-8 lg:leading-12">
            the below methods:
          </h1>
        </div>
        <div className="w-[90%] h-auto lg:h-[95%] mx-auto mt-12 flex flex-col md:flex-row justify-between gap-7">
          <motion.div
          initial = {{opacity: 0, x : 50}}
          whileInView={{opacity: 1, x : 0}}
          viewport={{ once: true }}
          transition={{duration: 0.7, ease: "easeInOut"}}  
          className="h-auto lg:h-full w-full md:w-[30%] lg:w-[33%] bg-white p-6 shadow-lg">
            <h1 className="text-2xl font-bold">01.</h1>
            <div className="w-60 lg:w-[60%] h-60 lg:h-[40%] md:w-40 md:h-40 bg-cover bg-center" style={{backgroundImage: `url(${screenPrinting})`}}></div>
            <h1 className="text-xl font-semibold py-5">Screen Printing</h1>
            <p className="text-sm">
              Screen printing is the perfect method for unique products for
              vibrant and creative, especially for large quantities. Screen
              printing allows matching exact colors than other printing methods.
            </p>
            <p onClick={() => navigate("/screen-printing")} className="cursor-pointer py-5 font-semibold text-xl text-blue-900">
              Know More
            </p>
          </motion.div>
          <motion.div
          initial = {{opacity: 0, x : 50}}
          whileInView={{opacity: 1, x : 0}}
          viewport={{ once: true }}
          transition={{duration: 0.7, delay: 0.2, ease: "easeInOut"}}  
          className="h-auto lg:h-full w-full md:w-[30%] lg:w-[33%] bg-white p-6 shadow-lg">
            <h1 className="text-2xl font-bold">02.</h1>
            <div className="w-60 lg:w-[60%] h-60 lg:h-[40%] md:w-40 md:h-40 bg-cover bg-center" style={{backgroundImage: `url(${dtfPrinting})`}}></div>
            <h1 className="text-xl font-semibold py-5">DTF Printing</h1>
            <p className="text-sm">
              DTF printing is a process that transfers prints onto fabric using
              a heat-press mechanism, this printing method can work on cotton
              and poly blends and it looks great with bright colors.
            </p>
            <p onClick={() => navigate("/dtf")} className="cursor-pointer py-5 font-semibold text-xl text-blue-900">
              Know More
            </p>
          </motion.div>
          <motion.div
          initial = {{opacity: 0, x : 50}}
          whileInView={{opacity: 1, x : 0}}
          viewport={{ once: true }}
          transition={{duration: 0.7, delay: 0.4, ease: "easeInOut"}}  
          className="h-auto lg:h-full w-full md:w-[30%] lg:w-[33%] bg-white p-6 shadow-lg">
            <h1 className="text-2xl font-bold">03.</h1>
            <div className="w-60 lg:w-[60%] h-60 lg:h-[40%] md:w-40 md:h-40 bg-cover bg-center" style={{backgroundImage: `url(${sublimationPrinting})`}}></div>
            <h1 className="text-xl font-semibold py-5">Sublimation Printing</h1>
            <p className="text-sm">
              Sublimation printing is only suitable for garments that include
              polyester (100% polyester or polyester blend). This method
              combines ink with the substrate while it is in a gaseous state.
            </p>
            <p onClick={() => navigate("/sublimation")} className="cursor-pointer py-5 font-semibold text-xl text-blue-900">
              Know More
            </p>
          </motion.div>
        </div>
      </motion.div>
      {/* section 5 */}
      <div className="w-full h-auto lg:h-[80vh] flex flex-col lg:flex-row px-15 lg:px-15 py-10 lg:py-0">
        <div className="flex flex-col gap-3 w-full lg:w-[60%] mx-auto pr-0 lg:pr-10">
          <h1 className="text-3xl py-5">Why Choose Reboot Threads</h1>
          <p className="text-md">
            Reboot Threads is one of the leading Custom T-Shirts Printing in
            Okhla, Delhi NCR. We are also known for providing promotional
            Clothing like Customized T-shirts, Sweatshirts,{" "}
            <span className="font-semibold"> Hoodies </span>, Caps, and all
            types of corporate gifting items.
          </p>
          <p className="text-md">
            We at <span className="font-semibold"> Reboot Threads </span>{" "}
            believe in delivering quality products on time. We don't compromise
            our custom printed t-shirt quality over anything. We have a trained
            team to deal with a spectrum of orders ranging from small requests
            to large quantities. While printing we always make sure about the
            color, design, and cloth is good quality and up to the customer
            satisfaction level. Most of the companies who are looking for
            promoting their company, through promotional wear and services,
            prefer to choose us because of our quality with long-lasting color
            and perfect Stitching.
          </p>
        </div>
        <div className="w-full lg:w-[40%] bg-yellow-500 h-auto mt-6 lg:mt-0">
          <img
            className="w-full h-full object-cover"
            src={TS}
            alt="customTShirt"
          />
        </div>
      </div>
      {/* section 6 */}
      <div className="w-full h-auto p-15">
        <h1 className="font-bold text-3xl pb-12">
          Your Trusted Partner for Custom T-Shirt Printing in Delhi and Across
          India
        </h1>
        <p>
          If you are seeking out great custom t-shirts printing in Delhi,
          appearance no similarly than Reboot Threads. With years of revel in
          inside the garb enterprise, we concentrate on delivering top class,
          customized t-shirts that cater to a wide range of needs. Whether it's
          for corporate branding, activities, or private use, Reboot Threads
          gives reliable and low-priced printing services.{" "}
        </p>
        <p className="py-4 text-xl font-semibold">
          Custom T-Shirts Online manufacturer in Delhi
        </p>
        <p>
          At Reboot Threads, we make it clean on the way to design and order
          custom t-shirts from the consolation of your private home. Our custom
          t-shirts online store in Delhi affords a unbroken shopping enjoy in
          which you may add your designs, pick out hues, and select sizes. We
          offer a wide range of t-shirt styles including traditional t-shirts.
          printed t-shirts and sports activity t-shirts So you can create the
          best bespoke outfit for every occasion.
        </p>
      </div>
      {/* section 7 */}
      <motion.div className="w-full h-auto bg-[#BA9647] flex flex-col justify-center items-center lg:flex-row px-15 lg:px-15 py-10 lg:py-0">
        <div className="flex flex-col gap-3 w-full md:w-[50%] mx-auto pr-0 lg:pr-10 py-4 md:py-10 lg:py-25">
          <motion.div
          initial = {{opacity:0, y: -20}} 
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.5, ease: "easeInOut"}}
          className="w-fit inline-flex items-center justify-center bg-[#8b6d3d] text-white rounded-full px-6 lg:px-12 py-2 text-md font-bold uppercase tracking-widest shadow-md ">
            Book Your Bulk Order
          </motion.div>
          <motion.h1 
          initial = {{opacity:0, y: -20}} 
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.5, ease: "easeInOut"}}
          className="text-2xl md:text-3xl text-white font-semibold">
            Get a Quote Free
          </motion.h1>
          <motion.p
          initial = {{opacity:0, x: 20}} 
          whileInView={{opacity:1, x: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.5, ease: "easeInOut"}} 
          className="flex gap-3 items-center text-lg md:text-xl text-white">
            <TiTick /> Save Big on Bulk Orders
          </motion.p>
          <motion.p
          initial = {{opacity:0, x: 20}} 
          whileInView={{opacity:1, x: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.5, ease: "easeInOut"}} 
          className="flex gap-3 items-center text-lg md:text-xl text-white">
            <TiTick /> Choose By Style Your Custom T-Shirt Prints, Hoodies and
            Sweatshirts
          </motion.p>
          <motion.p
          initial = {{opacity:0, x: 20}} 
          whileInView={{opacity:1, x: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.5, ease: "easeInOut"}} 
          className="flex gap-3 items-center text-lg md:text-xl text-white">
            <TiTick /> Send Your Design and Get from Reboot Threads
          </motion.p>
        </div>
        <div className="w-[80%] lg:w-[40%] h-auto">
          <img
            className="w-full h-full object-cover"
            src={TS2}
            alt="customTShirt"
          />
        </div>
      </motion.div>
      {/* section 8 */}
      <div className="w-full h-auto md:flex m-auto md:px-15 gap-5 justify-between">
        <div className="w-full sm:w-[95%] md:w-[50%] h-full md:flex flex-col gap-2">
          <div className="w-full h-[50%] p-10">
            <h1 className="font-semibold text-2xl pb-4">
              Bulk t-shirt printing in Delhi NCR
            </h1>
            <p>
              For businesses, events, and groups looking for bulk t-shirt
              printing in Delhi NCR, Reboot Threads offers aggressive pricing
              without compromising on penalties. Our bulk printing services are
              ideal for promotional occasions, team uniforms, and company
              giveaways. We make sure short turnaround times and steady print
              quality, making us a preferred companion for bulk orders.
            </p>
          </div>
          <div className="w-full h-[50%] p-10">
            <h1 className="font-semibold text-2xl pb-4">
              T-Shirt Printing Near Me
            </h1>
            <p>
              If you are trying to find "t-shirt printing near me" in Delhi,
              Reboot Threads is the nearby professional you could believe. We
              provide incredible printing offerings for people and companies
              across Delhi and the NCR vicinity. Whether it's a single custom
              t-shirts or a bulk order, we supply top-notch effects with
              attention to detail and purchaser satisfaction.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-[95%] md:w-[50%] h-full md:flex flex-col">
          <div className="w-full h-[50%] p-10">
            <h1 className="font-semibold text-2xl pb-4">
              Buy Customised Branded T-Shirts in India
            </h1>
            <p>
              Looking to boost your brand's visibility? Buy customised branded
              t-shirts in India thru Reboot Threads to sell your commercial
              enterprise, group, or event. Funky Designs for Everyone Our funky
              designed t-shirts shells can be printed along with your brand
              logo, tagline or any chosen design to enable brand visibility; we
              make sure that our logo/liner captures the necessary attention it
              deserves.
            </p>
          </div>
          <div className="w-full h-[50%] p-10">
            <h1 className="font-semibold text-2xl pb-4">
              Bulk T-Shirt Manufacturer and Printer
            </h1>
            <p>
              Reboot Threads isn't always only a printing carrier; we also are a
              main bulk t-shirt manufacturer and printer. From sourcing
              incredible fabric to providing quite a number printing strategies
              like display screen printing, digital printing, and embroidery, we
              ensure that every custom t-shirt we produce meets your actual
              specifications. Our production competencies permit us to cater to
              big orders even as retaining the highest requirements of
              first-class and affordability.
            </p>
          </div>
        </div>
      </div>
      {/* section 9 */}
      <div className="w-full h-auto px-10 py-10 md:px-24 md:py-16">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">
          Why Choose Reboot Threads?
        </h1>
        <ul className="list-disc pl-15 text-gray-700 text-lg">
          <li>
            <span className="font-bold text-black">Superior Quality: </span>
            We make high-quality prints on t-shirts using the best printing
            technology.
          </li>
          <li>
            <span className="font-bold text-black">Wide Selections: </span>
            There are various designs, shades, and sizes available to suit what
            your brand represents.
          </li>
          <li>
            <span className="font-bold text-black">Competitive Pricing: </span>
            Whether it is a single order or bulk printing, we provide
            inexpensive charges without compromising on quality.
          </li>
          <li>
            <span className="font-bold text-black">Quick Turnaround: </span>
            We ensure timely delivery of all orders, even for huge bulk
            quantities.
          </li>
        </ul>
        <p className="py-5 text-gray-700 text-lg">
          For all your custom t-shirt printing desires in Delhi and past, pick
          Reboot Threads for exquisite provider and unrivalled quality. Visit
          our website: www.Reboot Threads.com
        </p>
      </div>
      {/* section 10 */}
      <div className="w-full h-auto bg-[#ffe1a9] mt-10 flex flex-col lg:flex-row">
        <div className="w-[95%] lg:w-[50%] h-full p-10 lg:p-15">
          <h1 className="text-3xl sm:text-4xl py-2 lg:py-5">Call Us</h1>
          <motion.h1
          initial = {{opacity:0, y: -20}} 
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.8, ease: "easeInOut"}}
          className="text-3xl sm:text-4xl font-semibold"> 
            +(91) 9958388175
          </motion.h1>
          <motion.h1 
          initial = {{opacity:0, y: -20}} 
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.8, ease: "easeInOut"}}
          className="text-3xl sm:text-4xl font-semibold py-2 lg:py-5">
            rebootthreadsglobal@gmail.com
          </motion.h1>
          <motion.p
          initial = {{opacity:0, y: -20}} 
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.8, ease: "easeInOut"}}
          >
          We’re ready to help you in designing your custom design tshirt.</motion.p>
        </div>
        <div className="w-[95%] lg:w-[50%] h-full px-10 pb-10 lg:p-15">
          <motion.h1 
          initial = {{opacity:0, y: -20}} 
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.8, delay: 0.3, ease: "easeInOut"}}
          className="text-3xl sm:text-4xl font-semibold py-5">
            Request Your Order Estimation Today!!
          </motion.h1>
          <motion.p
          initial = {{opacity:0, y: -20}} 
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.8, delay: 0.3,ease: "easeInOut"}}
          >Reach out to us for custom estimation for your bulk orders.</motion.p>
          <motion.button
          initial = {{opacity:0, y: -20}} 
          whileInView={{opacity:1, y: 0}}
          viewport={{ once: true }}
          transition={{duration: 0.8, delay: 0.3 ,ease: "easeInOut"}}
            onClick={handleQuotationClick}
            className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
          >
            Get Quotation
          </motion.button>
        </div>
      </div>
      {/* section 11 */}
      <div className="w-full h-auto">
        <div className="w-[90%] mx-auto my-15">
          <h1 className="font-bold text-4xl pb-12">
            T-Shirt Printing Company in Delhi NCR
          </h1>
          <p className="py-5">
            Reboot Threads is your go-to destination for high-quality t-shirt
            printing services in Delhi. We specialize in providing vibrant,
            durable, and customized t-shirt prints for individuals, businesses,
            and events. Whether you’re looking for a single custom design or a
            large batch, our advanced printing techniques ensure the best
            results on all types of fabric. From promotional shirts to
            personalized gifts, Reboot Threads delivers top-notch t-shirt
            printing that stands out in both quality and creativity.
          </p>
          <p className="py-5">
            As a leading t-shirt printing company in Delhi NCR, we offer a range
            of printing options, including screen printing, DTG
            (direct-to-garment), and heat transfer printing. Our team works with
            precision and dedication to meet the needs of our clients, whether
            it's for corporate branding, special events, or personal projects.
            With years of experience and a commitment to excellence, we are the
            top choice for t-shirt printing across Delhi NCR.
          </p>
          <h1 className="font-bold text-4xl pb-12">
            Order Bulk T-Shirt Printing in Delhi on Reboot Threads
          </h1>
          <p className="py-5">
            Reboot Threads excels in bulk t-shirt printing in Delhi, providing
            high-quality prints at competitive prices. Whether you need t-shirts
            for a corporate event, a promotional campaign, or a sports team, we
            handle large orders efficiently. Our team ensures that each t-shirt
            is printed to perfection, offering both affordability and
            exceptional quality. Trust us for your bulk printing needs in Delhi.
          </p>
          <p className="py-5">
            When it comes to bulk t-shirt printing in Delhi, we stand out for
            its reliability and superior service. We understand the importance
            of timely delivery and quality results, and our team ensures that
            large orders are printed quickly without compromising on quality.
            From simple designs to complex graphics, we have the capabilities to
            deliver your bulk t-shirt printing requirements on time.
          </p>
          <h1 className="font-bold text-4xl pb-12">
            Custom Sweatshirt Printing in Delhi
          </h1>
          <p className="py-5">
            Reboot Threads offers custom sweatshirt printing services in Delhi,
            allowing you to add a personal touch to your wardrobe. Our advanced
            printing techniques ensure that your designs, logos, or artwork
            stand out with clarity and vivid colors. Whether it’s for a team,
            event, or personalized gift, our custom sweatshirts provide warmth
            and style.
          </p>
          <h1 className="font-bold text-4xl pb-12">Hoodie Printing in Delhi</h1>
          <p className="py-5">
            Looking for hoodie printing in Delhi? provides premium hoodie
            printing services, perfect for casual wear, corporate giveaways, or
            event merchandise. With our expert printing methods, your designs
            will look sharp and remain intact for a long time. Choose Octa
            Prints for top-quality hoodie printing that enhances your brand or
            personal style.
          </p>
          <h1 className="font-bold text-4xl pb-12">
            Polo T-Shirt Printing Near Me
          </h1>
          <p className="py-5">
            Searching for polo t-shirt printing near you? Reboot Threads is the
            ideal choice for those looking to print customized polo t-shirts in
            Delhi. Whether for team uniforms, office wear, or events, our
            high-quality prints on polo t-shirts offer a professional and
            stylish look. We use the latest printing technologies to ensure
            long-lasting designs on premium fabric.
          </p>
          <h1 className="font-bold text-4xl pb-12">
            Cotton T-Shirts Printing in Delhi
          </h1>
          <p className="py-5">
            Reboot Threads specializes in cotton t-shirt printing in Delhi,
            offering high-quality, comfortable t-shirts for all your needs. Our
            cotton t-shirts are soft, breathable, and ideal for various types of
            prints. Whether you're looking for a custom design for a casual
            event or promotional use, our cotton t-shirt printing ensures
            vibrant and long-lasting results.
          </p>
          <h1 className="font-bold text-4xl pb-12">
            Find T-Shirt Printing Near Me
          </h1>
          <p className="py-5">
            For reliable t-shirt printing near you, Reboot Threads is the best
            option in Delhi. We provide fast, professional, and affordable
            t-shirt printing services for individuals, companies, and
            organizations. No matter where you are in Delhi, we ensure quick
            delivery and excellent print quality. Reach out to Reboot Threads
            for your next custom t-shirt project!
          </p>
          <h1 className="font-bold text-4xl pb-12">
            About Reboot Threads – Premium Custom Printing Solutions
          </h1>
          <p className="py-5">
            Reboot Threads is a premier T-shirt printing company in Delhi NCR,
            providing high-quality, customized, and personalized T-shirt
            printing services for individuals, groups, and organizations.
            Established in 2020, we have quickly built a reputation for
            excellence in the industry. With state-of-the-art printing
            technology and an experienced team, we are hoodie manufacturer in
            Delhi, offer a wide range of customized T-shirts to meet your
            specific needs, including custom T-shirts printing in Delhi and bulk
            T-shirt printing in Delhi, India
          </p>
          <p className="py-5">
            We believe T-shirts are a fantastic medium for personal expression
            and brand promotion, and our mission is to help clients achieve
            their goals through high-quality T-shirt printing services. Whether
            you need T-shirts for a corporate event, fundraiser, or personal
            use, we have the expertise to deliver results. From custom staff
            T-shirt printers to bulk T-shirt printing in Okhla, Reboot Threads
            covers all your needs.
          </p>
          <p className="py-5 font-semibold text-xl">
            High-Quality Materials and Advanced Techniques
          </p>
          <p className="py-5">
            At Reboot Threads, we are committed to using the highest quality
            materials and cutting-edge printing techniques. Our team of
            designers and printers works closely with clients to create unique
            and personalized designs, reflecting their brand or personal style.
            Our printing techniques include screen printing, sublimation
            printing, heat transfer printing, and direct-to-film (DTF) printing,
            offering the perfect solution for your requirements. Whether it’s
            round neck T-shirt printing services, cotton T-shirts printing in
            Delhi, or polo T-shirt printing near me, we’ve got you covered.
          </p>
          <p className="py-5 font-semibold text-xl">
            Exceptional Customer Service
          </p>
          <p className="py-5">
            What sets us apart is our commitment to customer satisfaction. We
            understand that each client has unique needs, and we work closely
            with them to exceed expectations. Our dedicated customer service
            team is always available to assist clients with any concerns.
            Additionally, our printing team is skilled in the latest techniques,
            ensuring that every print lasts for years. Whether you need bulk
            T-shirt printing manufacturers or custom screen printed T-shirts,
            Reboot Threads guarantees premium results.{" "}
          </p>
          <p className="py-5 font-semibold text-xl">
            Personalized T-shirt Printing Services
          </p>
          <p className="py-5">
            We pride ourselves on offering a wide variety of T-shirt styles,
            colors, and sizes. From custom T-shirts online store in Delhi to buy
            customized branded T-shirts in India, we make it easy to find the
            perfect fit for your needs. Whether it’s for business, group, or
            personal use, our personalized T-shirt services ensure you get
            exactly what you’re looking for, as you can search Hoodie and
            sweatshirt printing near me, exactly you will find on Top of Google
            custom hoodies logo printing and custom t-shirt logo printing
            Company Reboot Threads.
          </p>
          <p className="py-5 font-semibold text-xl">
            Comprehensive Printing Solutions
          </p>
          <p className="py-5">
            In addition to custom T-shirts printing in Delhi, we provide
            printing services for caps, bags, hoodies, and more. Our
            one-stop-shop approach for all printing needs means convenience for
            clients, whether they’re in search of bulk T-shirt printing
            companies in Noida or T-shirt printing near me.
          </p>
          <p className="py-5">
            Reboot Threads stands as a leading T-shirt printing company in Delhi
            NCR, known for offering high-quality, customized, and personalized
            printing services. Our dedication to customer satisfaction, superior
            materials, and advanced printing methods make us the go-to choice
            for T-shirt printing needs. Whether it’s custom staff T-shirt
            printers, customized t-shirts printing in Delhi, best staff T-shirt
            printers, or bulk T-shirt printing in Okhla, Reboot Threads is ready
            to assist. Contact us today to explore how we can help you achieve
            your goals through exceptional T-shirt printing services.
          </p>
          <p className="py-5 font-semibold text-xl">
            What is Custom T-shirt Printing?
          </p>
          <p className="py-5">
            Custom T-shirt printing is the process of creating personalized
            T-shirts with unique designs, often using methods like screen
            printing, direct-to-film printing, and vinyl printing. It’s a
            popular choice for businesses, schools, sports teams, events, and
            individuals looking to express creativity or promote their brand.
            Reboot Threads provides high-quality customized T-shirt printing in
            India, Customized T-Shirts Printing in Noida with fast turnaround
            times and affordable pricing for all custom printing needs.
          </p>
          <p className="py-5 font-semibold text-xl">
            There are several methods of custom T-shirt printing, including:
          </p>
          <ul className="list-disc pl-15">
            <li>
              <span className="font-semibold text-lg">Screen Printing:</span> A
              stencil is created, and ink is applied through the stencil onto
              the T-shirt. This method is best for printing large quantities of
              T-shirts.
            </li>
            <li>
              <span className="font-semibold text-lg">
                Direct-to-Film (DTF) Printing:
              </span>{" "}
              A special printer is used to print the design directly onto the
              fabric of the T-shirt. This method is ideal for printing detailed,
              full-color designs on smaller quantities of T-shirts.
            </li>
            <li>
              <span className="font-semibold text-lg">
                Heat Transfer Printing:
              </span>{" "}
              A design is cut out of vinyl and then heat-pressed onto the
              T-shirt. This method is suitable for single-color designs or small
              quantities of T-shirts.
            </li>
            <li>
              <span className="font-semibold text-lg">Embroidery:</span> A
              design is sewn onto the T-shirt using needle and thread. This
              method is excellent for creating high-quality, textured designs
              that will last for a long time.
            </li>
          </ul>
          <p className="py-5">
            For businesses, events, or personal use, Reboot Threads has the
            expertise to deliver the best solutions, whether you need bulk
            T-shirt printing or customized T-shirts online in Delhi.
          </p>
          <p className="pt-5">
            Create unique, eye-catching designs printed with our custom hoodie
            printing services available near you! Whether you're in Delhi NCR,
            Greater Noida, Faridabad, Gurugram, Ghaziabad, Meerut, Rohtak,
            Sonepat, Rewari, Jhajjar, Panipat, Palwal, Bhiwani, Charkhi Dadri,
            Mahendragarh, Alwar, or Bharatpur, we provide stylish and
            high-quality karol bagh t shirt printing, Cotton T shirt Printing in
            Karol Bagh and hoodie printing solutions tailored to your needs. Now
            find the contact no of custom professional t shirt printing in
            Delhi, Noida – Call at +91-9958388175
          </p>
        </div>
      </div>
      {/* section 12 */}
      <div className="relative w-full h-auto flex flex-col items-center justify-center gap-6 mb-10">
        <h1 className="px-10 text-4xl font-semibold">
          What Our Clients say about us
        </h1>
        <ImQuotesLeft className="text-6xl text-gray-200 mt-10" />
        <button
          onClick={prevSlide}
          className="absolute text-6xl left-0 top-60 sm:left-10 sm:top-50 lg:left-30 lg:top-50 text-gray-600"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <div className="relative text-xl flex flex-col items-center justify-center text-center w-[70%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index} // Key change hote hi animation trigger hoga
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="py-4">
                "{feedbacks[index].text}"
              </p>
              <p className="font-semibold">— {feedbacks[index].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={nextSlide}
          className="absolute text-6xl right-0 top-60 sm:right-10 sm:top-50 lg:right-30 lg:top-50 text-gray-600"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
        {/* Indicator Dots */}
      <div className="flex gap-3 mt-10">
        {feedbacks.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-[#D9712E]" : "w-3 bg-gray-300"
            }`}
          />
        ))}
      </div>
      </div>
      <LogoStrip />
    </>
  );
};

export default Home;