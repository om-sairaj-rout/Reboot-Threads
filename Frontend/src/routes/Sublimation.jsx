import React from 'react'
import BulkOrder from '../components/BulkOrder';
import HeroSection from '../components/HeroSection_Services';
import ProsCons from '../components/ProsCons';
import Section3Services from '../components/Section3Services';
import Section4Services from '../components/Section4Services';
import heroImg from '../assets/service-hero-img.png'

const Sublimation = () => {
  const pros = [
    "Best result with polyester materials.",
    "It lasts longer, and will not crack or peel over time, even with prolonged washing",
    "Designs can be more easily customized with this process",
    "You get the best results when the fabrics are either white or light-colored",
  ]
  return (
    <>
      <HeroSection title="Sublimation Printing" desc="Sublimation shirt printing is a specific process of printing that first involves printing onto a special sheet of paper, then transferring that image onto another material (usually polyester or a polyester mix)." heroImg={heroImg} />
      <ProsCons title="Sublimation Printing" pros={pros}>
        <p className="text-gray-400 text-md py-5">
              Sublimation printing is also known as dye-sublimation printing. The term sublimation is the transition of a substance directly from a solid-state to a gas state. It does not pass through the usual liquid state and only occurs at specific temperatures and pressures. The process of sublimation shirt printing costs more than other methods, but it lasts longer, and will not crack or peel over time, like other shirt printing methods. This printing method combines ink with the substrate while it is in a gaseous state. Then, the ink solidifies as it merges with the substrate and forms the logo or image you designed. It is basically a method of printing that transfers a design by using ink and heat.
            </p>
            <p className="text-gray-400 text-md py-5">
              Sublimation printing is a specific process of printing that first involves printing onto a special sheet of paper, then transferring that image onto another material (usually polyester or a polyester mix). Sublimation printing is only suitable for garments that include polyester (100% polyester or polyester blend). Sublimation printing is suitable for small batch orders, seam-to-seam designs, and garments with a large number of design variations and applications.
            </p>
      </ProsCons>
      <Section3Services heading="Limitations of Sublimation Printing?" >
        <p className="text-md">
           Aside from the materials that can be used for sublimation, one of the core limitations for sublimation is the colors of any materials. Because sublimation is essentially a dye process, you get the best results when the fabrics are either white or light-colored. If you want to print onto a black shirt or darker materials, then you could be better off using a digital print solution instead.
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

export default Sublimation