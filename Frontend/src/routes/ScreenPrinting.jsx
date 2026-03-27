import React from 'react'
import BulkOrder from '../components/BulkOrder';
import HeroSection from '../components/HeroSection_Services';
import ProsCons from '../components/ProsCons';
import Section3Services from '../components/Section3Services';
import Section4Services from '../components/Section4Services';
import heroImg from '../assets/service-hero-img.png'

const ScreenPrinting = () => {
  const pros = [
    "Produces designs with multiple colours",
    "High Long Lasting durability & Quality",
    "Professional finish",
    "Very competitively priced – the more you order the cheaper the price",
    "Fastest printing technique for printing in large volumes",
    "Pantone colour matching to keep true to brand colours & guidelines"
  ];

  return (
    <>
      <HeroSection title="Screen Printing" desc="Screen printing is the perfect method to match a specific color with pantone value of your design and it is a good option for large and unique products." heroImg={heroImg} />
      <ProsCons title="Screen Printing" pros={pros}>
        <p className="text-gray-400 text-md py-5">
              Screen Printing is one of the most popular T-shirt printing
              method. It’s a process that applies ink directly onto clothing and
              fabric using mesh screens. Being the fastest and best printing
              method it also has fewer limitations as to what products and
              materials can be printed on. Screen printing is also sometimes
              known as silkscreen printing. One color is printed at a time, so
              several screens can be used to produce a multicolored image or
              design.
            </p>
            <p className="text-gray-400 text-md py-5">
              The process of screen printing is, that we first separate out the
              colors in your logo or design using graphical software. A mesh
              stencil is then created for each color in the design and to create
              the stencil. It starts by creating a fine mesh for each design and
              then ink is mixed for each color in the design. Ink is placed on
              its appropriate screen and then squeezing ink through the mesh
              screen onto the cloth. Finally, run clothes through a large dryer
              to prevent ink from washing out.
            </p>
      </ProsCons>
      <Section3Services heading="Factors to consider before choosing Screen Printing Method" >
        <p className="text-md">
            <span className="font-semibold">Number of colors:</span> Colorful
            design is always eye-catching and appealing, but at the same time it
            is very important to consider the number of colors to use in the
            design. More colors mean, more work, and higher printing costs.
          </p>
          <p className="text-md">
            <span className="font-semibold">
              Quality and Quantity of Apparel:
            </span>{" "}
            The apparel must be fit for the screen method printing you want to
            use on it. Generally, screen printing is more cost-effective for
            bulk orders.
          </p>
          <p className="text-md">
            100% cotton – As it is prone to shrinkages and wrinkles and saves
            extra efforts in printing designs on ‘tough’ locations. 100%
            polyester – Not as breathable as cotton, but strong, durable, and
            long-lasting. Resistant to shrinking, wrinkles, and color fading
            over time.
          </p>
          <p className="text-md">
            Sometimes, a 50-50 blend of cotton and polyester can also work well
            at times.
          </p>
      </ Section3Services>
      <Section4Services heading="Quality t-shirt Assurance">
        <p className="text-lg py-10">
            We have highly qualified team members and an experienced workforce to deal with all kinds of orders. Our team is trained to deal with a spectrum of orders ranging from small requests to large quantities.
        </p>
      </Section4Services>
      <BulkOrder />
    </>
  )
}

export default ScreenPrinting;