import React from 'react'
import HeroSection from '../components/HeroSection_Services'
import ProsCons from '../components/ProsCons'
import Section3Services from '../components/Section3Services'
import Section4Services from '../components/Section4Services'
import BulkOrder from '../components/BulkOrder'
import heroImg from '../assets/service-hero-img.png'

const Dtf = () => {
  const pros = [
    "Works with almost all types of fabrics",
    "Does not require pre-treatment",
    "The Fabrics thus designed exhibit good wash characteristics.",
    "The fabric has a very slight hand feel the touch",
    "The process is faster and less tedious than DTG printing",
  ]
  return (
    <>
      <HeroSection title="DTF Printing" desc="DTF stands for Direct To Film. This technique involves printing your design directly onto a film and then transferring it to a T-shirt made of cotton, polyester, or their blends, regardless of their color, as it can work with white ink." heroImg={heroImg} />
      <ProsCons title="DTF Printing" pros={pros}>
            <p className="text-gray-400 text-md py-5">
              Digital textile printing industry has seen rapid growth over the last decade as more & more users shift towards the digitalization of textile printing. The use of digital printers allows one to inculcate ease, simplicity, fabric performance, consistency, and most importantly an enormous variety of colors in textiles thus making the whole process reliable & cost-effective overall.
            </p>
            <p className="text-gray-400 text-md py-5">
              Sublimation only works on light colors and printers are unable to print the color white. DTF transfers can be done on light and dark colored materials, and DTF printers can print white. DTF printers look different from traditional paper printers, they function much like other inkjet printers.
            </p>
      </ProsCons>
      <Section3Services heading="Advantges of DTF Printing?" >
        <p className="text-md">
           DTF works on many different garment materials: cotton, nylon, treated leather, polyester, 50/50 blends, and both light and dark fabrics. The transfers can even be applied to different types of surfaces like luggage, shoes, and even glass, wood, and metal! You can expand your inventory by applying your designs to a whole variety of merchandise with DTF.
          </p>
        <p className="text-md">
          DTF Prints transfers wash well and are flexible, they won’t crack or peel, making them great for heavy-use items. This is very popular for a faster production process.
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

export default Dtf