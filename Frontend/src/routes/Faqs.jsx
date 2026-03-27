import React from 'react'
import FAQSection from '../components/FAQSection'
import BulkOrder from '../components/BulkOrder'
import HeroSection from '../components/HeroSection_Services'
import heroImg from '../assets/service-hero-img.png'

const Faqs = () => {
  return (
    <>
      <HeroSection title="Frequently Asked Questions" desc="Here are some of the most common questions or problems users come across." heroImg={heroImg} />
      <FAQSection />
      <BulkOrder />
    </>
  )
}

export default Faqs