import React from 'react'
import HeroSection from '../components/HeroSection_Services'
import Section3Services from '../components/Section3Services'
import Section4Services from '../components/Section4Services'
import WhyChooseComp from '../components/WhyChooseComp'
import LogoStrip from '../components/LogoStrip'
import BulkOrder from '../components/BulkOrder'
import heroImg from '../assets/service-hero-img.png'

const Professional = () => {
  return (
    <>
      <HeroSection
        title="Custom Professional Tshirts"
        desc="Custom t-shirts are an effective way to promote your company or they can be used for events & special functions. We provide custom t-shirts to suit your all needs and are very comfortable to use. It’s easy to order your customized t-shirt, all you need is to share your design and we will take care of the rest."
        heroImg={heroImg}
      />
      {/* section1 */}
      <div className="w-full h-auto p-5 sm:p-15">
        <h1 className="text-4xl font-semibold py-5">
          Lets roll with your brand
        </h1>
        <h1 className="text-3xl font-semibold py-5">
          Reboot Threads: Your Partner for Custom Professional T-Shirt Printing in Delhi
        </h1>
        <div className="w-full h-[70%] flex flex-col lg:flex-row gap-5 justify-between">
        <div className="w-full lg:w-[50%] h-full flex flex-col gap-2">
          <div className="w-full h-[50%] py-5">
            <h1 className="font-semibold text-xl pb-4">
              Custom Professional T-Shirt Printing in Delhi
            </h1>
            <p className="text-lg">
              At Reboot Threads, we apprehend that every t-shirt tells a story. As the main custom expert t-shirt printing carrier in Delhi, we're committed to bringing your unique designs to existence with precision and care. Whether for corporate events, team uniforms, or private projects, our brand new printing generation ensures each t-shirt we produce meets the best requirements of first-rate and sturdiness. Our team of professional specialists works meticulously to deliver vibrant, long-lasting prints that go away an enduring impression.
            </p>
          </div>
          <div className="w-full h-[50%] py-5">
            <h1 className="font-semibold text-xl pb-4">
              Branded Custom T-Shirt Online Shopping
            </h1>
            <p className="text-lg">
              Say goodbye to the problem of traditional purchasing and embrace the convenience of branded custom t-shirt on-line shopping with Reboot Threads. Our clean-to-navigate on-line save permits you to browse thru a extensive kind of styles, colours, and sizes. Simply upload your layout or select from our tremendous library, and we will deal with the rest. From the comfort of your house, you may create personalised, branded t-shirts that stand out in any crowd.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[50%] h-full flex flex-col">
          <div className="w-full h-[50%] py-5">
            <h1 className="font-semibold text-xl pb-4">
              Custom Branded T-Shirts Company
            </h1>
            <p className="text-lg">
              As a most reliable custom branded t-shirts employer, Reboot Threads takes satisfaction in offering tailored solutions to fulfill your branding needs. We specialise in developing custom branded t-shirts that resonate with your brand identity. Whether you want t-shirts for a advertising and marketing marketing campaign, company items, or employee uniforms, our custom branding offerings make sure your emblem and message are displayed with clarity and fashion. Our dedication to satisfactory guarantees your branded t-shirts now not simplest appearance outstanding however also sense snug to put on.
            </p>
          </div>
          <div className="w-full h-[50%] py-5">
            <h1 className="font-semibold text-xl pb-4">
              Custom Branded Printing T-Shirts Company
            </h1>
            <p className="text-lg">
              Reboot Threads is greater than just a t-shirt printing carrier; we are your committed accomplice in custom branded printing. We understand the importance of emblem consistency and work intently with you to make sure your t-shirts reflect your brand's values and aesthetics. Our custom branded printing t-shirts organization makes use of the trendy printing strategies and first-rate substances to provide t-shirts that make a declaration. From preliminary design to very last production, we attention on handing over excellence at each step.
            </p>
          </div>
        </div>
      </div>
      </div>

      <Section3Services heading="Begin Your Custom T-Shirt Journey with Us">
        <p className="text-md">
         Ready to create your custom professional t-shirts? Visit our internet site or contact us these days to find out how Reboot Threads assist you to elevate your logo with custom printed t-shirts. Join our growing community of satisfied customers in Delhi and throughout India, and experience the difference of running with a committed custom branded printing t-shirts organisation.
        </p>
        <ul className="list-disc list-inside text-lg space-y-2 px-10">
          <li>
            Unmatched Quality: We use superior printing technology to produce excessive-definition, long lasting prints.
          </li>
          <li>
           Tailored Solutions: Our team collaborates with you to create designs that align together with your logo.
          </li>
        </ul>
      </Section3Services>
      <Section4Services heading="Print Quality Assurance">
        <p className="text-lg py-10">
          We have highly qualified team members and an experienced workforce to
          deal with all kinds of orders. Our team is trained to deal with a
          spectrum of orders ranging from small requests to large quantities.
        </p>
      </Section4Services>
      <WhyChooseComp />
      <LogoStrip />
      <BulkOrder />
    </>
  )
}

export default Professional