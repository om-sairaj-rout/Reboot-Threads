import React from "react";
import WhyChooseComp from "../components/WhyChooseComp";
import contactImg from "../assets/contact_image.png";
import BulkOrder from "../components/BulkOrder";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import aboutHero from "../assets/about-hero.jpg";

const About = () => { 
  const navigate = useNavigate();
  const handleQuotationClick = () => {
    navigate("/GetQuotation");
  };
  return (
    <>
      {/* section 1 */}
      <div className="w-full h-auto flex bg-[#E4E1D8]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="hidden md:block h-120 w-[50%] overflow-hidden "
        >
          <img
            src={aboutHero}
            alt="About Hero"
            className="w-full h-full object-cover object-center" // Same background look ke liye object-cover zaroori hai
          />
        </motion.div>
        <motion.div className="h-auto lg:h-120 w-full md:w-[50%] px-15 md:px-0 py-15 bg-[#E4E1D8]">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="font-semibold text-3xl lg:text-4xl py-4"
          >
            What makes Reboot Threads
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="font-bold text-3xl lg:text-4xl"
          >
            “Best Tshirt Printing Company”
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-md lg:text-lg py-10"
          >
            Reboot Threads is a Printing Company based in Delhi, India with the
            best quality at the best prices. We have specialized in all
            customized corporate and individual printing requirements like
            T-shirts, Hoodies, Mugs, and Caps.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={handleQuotationClick}
            className="px-6 py-3 rounded-md bg-[#16476A] text-white hover:bg-[#0e2e45]"
          >
            Get Quotation
          </motion.button>
        </motion.div>
      </div>
      {/* section 2 */}
      <div className="w-full h-auto p-15">
        <h1 className="text-3xl font-semibold">About Reboot Threads</h1>
        <p className="text-lg py-3">
          Reboot Threads is an online division of our company registered as
          World of Print and based in Delhi, providing the best quality at the
          best prices. We are providing our services since 2020 and delivered
          high-quality products to our clients. We have specialized in all
          customized corporate and individual printing requirements like
          T-shirts, Hoodies, Mugs, and Caps. Custom printing items are always
          the best and right way to promote your company.
        </p>
        <p className="text-lg py-3">
          We have numerous years of experience in College Event T-shirts,
          Corporate wear, Promotional products, and Corporate gifting & we do
          all types of printing like Sublimation printing, Screen Printing,
          Plastic sol, Rubber printing, etc. Our dedicated team regularly checks
          the quality of each product pre and post-production. We aim to give
          you something that suits your price range.
        </p>
      </div>
      <WhyChooseComp />
      {/* section 3 */}
      <div className="w-full h-auto p-15">
        <h1 className="text-4xl font-semibold py-3">Our Philosophy</h1>
        <div className="w-full h-flex-1 lg:h-[20%] flex flex-col lg:flex-row">
          <p className="w-full lg:w-[50%] h-full pr-8">
            Our team are committed to giving you a positive experience every
            time you give orders to us. Please rest assured that we provide best
            product quality, making sure that we deliver before the
            expected/proposed delivery date.
          </p>
          <p className="w-full lg:w-[50%] h-full py-5 lg:pl-4 lg:py-0">
            We always make sure the our team maintain the quality as promised to
            the customer. Quality is something we never compromise, we have
            deliver small to large bulk order to while keeping our promise of
            quality assurance and on-time delivery.
          </p>
        </div>
        <div className="w-full h-[70%] py-10  ">
          <img
            className="w-full h-full object-cover hover:cursor-pointer"
            src={contactImg}
            alt="Contact_Img"
          />
        </div>
      </div>
      {/* section 4 */}
      <div className="w-full h-auto mb-10">
        <div className="w-[90%] mx-auto">
          <h1 className="font-bold text-4xl pb-12">
            Bulk T-Shirt Printing Manufacturer Company
          </h1>
          <p className="py-5">
            Reboot Threads is a leading bulk t-shirt printing manufacturer
            company, offering top-notch services tailored to your large-scale
            printing needs. With state-of-the-art technology and expert
            craftsmanship, we handle bulk orders with precision and efficiency.
            Whether you’re organizing a corporate event, school function, or
            marketing campaign, our team ensures consistency and quality in
            every piece. We specialize in creating eye-catching designs on
            premium-quality t-shirts at competitive prices. As a trusted bulk
            printing manufacturer, we prioritize timely delivery and customer
            satisfaction, making us the preferred choice for businesses and
            organizations across Delhi and beyond.
          </p>
          <h1 className="font-bold text-4xl pb-12">
            T-Shirts Printing Near Me – Reboot Threads
          </h1>
          <p className="py-5">
            Looking for reliable t-shirts printing near you? Reboot Threads is
            your trusted destination for high-quality, customized t-shirt
            printing services. Based in Delhi, we offer a variety of printing
            techniques, including screen printing, direct-to-garment (DTG), and
            heat transfer, ensuring vibrant and durable designs for every
            project. Whether you need personalized t-shirts for events,
            promotional campaigns, or gifting, we provide quick turnarounds and
            exceptional results. With our local expertise, we make it easy to
            bring your creative ideas to life. Reboot Threads delivers unmatched
            quality and convenience, making us the top choice for t-shirt
            printing near you.
          </p>

          <h1 className="font-bold text-4xl pb-12">
            Hoodie Manufacturer in Delhi
          </h1>
          <p className="py-5">
            Reboot Threads is a trusted hoodie manufacturer in Delhi, providing
            custom-designed hoodies for individuals, businesses, and events.
            From comfortable cotton blends to premium fleece fabrics, our
            hoodies are designed for style, warmth, and durability. We offer
            vibrant and long-lasting prints that showcase your brand or personal
            designs. Whether you need hoodies for team uniforms, promotional
            giveaways, or retail, our expertise ensures exceptional quality and
            timely delivery. Choose Reboot Threads for affordable and
            professionally crafted hoodies that make a statement.
          </p>
          <h1 className="font-bold text-4xl pb-12">
            Reboot Threads: Your One-Stop Shop for Custom Printing in Delhi
          </h1>
          <p className="py-5">
            When it involves custom printing offerings in Delhi, Reboot Threads
            sticks out as a trusted and dependable call. From t-shirt printing
            to personalised mugs, hoodies, and caps, we cater to a huge variety
            of custom printing needs for people, groups, and corporations.
            Whether you are seeking to sell your brand or create customised
            gifts, Reboot Threads promises great merchandise with fast
            turnaround instances.
          </p>

          <p className="py-5 font-semibold text-xl">
            T-Shirts Printing Companies in Delhi
          </p>
          <p className="py-5">
            Reboot Threads may be one of the leading t-shirts printing companies
            in Delhi, providing high-quality printing solutions for events,
            companies and personal reasons. Thus, we adopt advanced printing
            methods in order to ensure bright colors and durable prints that
            will last for a long time. If you want to customize t-shirts for a
            promotional activity, design group uniforms or create personal
            designs, our expertise guarantees a perfect finish at all times.
          </p>
          <p className="py-5 font-semibold text-xl">
            T-Shirt Printing in Delhi
          </p>
          <p className="py-5">
            Looking for pinnacle-notch T-shirt printing in Delhi? Reboot Threads
            gives a huge style of customization alternatives, consisting of
            brand printing, complete-colour designs, and personalised art work.
            We work with top rate-quality fabric to make certain that every
            t-shirt not handiest appears first-rate but additionally feels
            cushty and lasts long. From unmarried custom t-shirts to bulk
            orders, we assure a continuing enjoy and excellent effects.
          </p>
          <p className="py-5 font-semibold text-xl">
            Personalised T-Shirt Printing Near Me
          </p>
          <p className="py-5">
            For customers attempting to find personalized t-shirt printing near
            me, Reboot Threads gives handy and reliable offerings across Delhi.
            We make it easy as a way to customise t-shirts together with your
            very own designs, names, or trademarks. Whether it is for a special
            event, company event, or promotional marketing campaign, our
            personalized t-shirt printing services supply wonderful, specific
            designs that make an announcement.
          </p>
          <p className="py-5 font-semibold text-xl">
            Custom Hoodies Logo Printing
          </p>
          <p className="py-5">
            Want to take your logo merchandising or private style to the
            following stage? Our custom hoodies logo printing provider is ideal
            for businesses, teams, and individuals seeking out extremely good,
            snug hoodies offering precise trademarks and designs. Whether you
            are seeking out embroidered emblems or revealed designs, we offer
            customization options to fit your wishes.
          </p>

          <p className="py-5 font-semibold text-xl">Why Reboot Threads?</p>
          <ul className="list-disc pl-15">
            <li>
              High-Quality Printing: We leverage modern technology to make sure
              each and every print is brightly coloured, long-lasting and
              extremely good.
            </li>
            <li>
              An Extensive Range of Products: Clothing to adornments, we have a
              variety of customizable items.
            </li>
            <li>
              Affordable Pricing: Our aggressive costs make custom printing
              accessible for businesses and people alike.
            </li>
            <li>
              Quick Turnaround: We make sure well-timed transport for all
              orders, even for massive bulk quantities.
            </li>
          </ul>
          <p className="py-5">
            For all your custom printing desires, consider Reboot Threads to
            deliver excellent products that exceed your expectations. Whether it
            is t-shirts, mugs, hoodies, or caps, we've the know-how to carry
            your designs to life. Contact us nowadays or visit our online store
            to get began!
          </p>
          <p className="pt-5">
            About Reboot Threads, about us, about t-shirt printing, custom
            t-shirts, professional t-shirt, Sublimation T-Shirts Printing,
            T-Shirt Printing Delhi, T-Shirt Printing Services, Corporate T-Shirt
            Services, Personalized Tshirts Services, Digital Printing Services,
            Promotional Tshirt, Urgent Printing Services, Election Tshirts,
            Collage Tshirts, Office TShirts, Tshirts, T-shirts, Tees,
            Promotional Tshirts, Custom T shirts, Custom T-Shirt Printing in
            Delhi
          </p>
        </div>
      </div>
      <BulkOrder />
    </>
  );
};

export default About;
