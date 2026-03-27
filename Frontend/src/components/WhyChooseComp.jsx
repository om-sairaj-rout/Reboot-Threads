import React from 'react'
import aboutFeature1 from "../assets/about-feature-01.png"
import aboutFeature2 from "../assets/about-feature-02.png"
import aboutFeature3 from "../assets/about-feature-03.png"
import aboutFeature4 from "../assets/about-feature-04.png"

const WhyChooseComp = () => { 
  return (
    <div className="w-full h-auto mt-10 flex flex-col lg:flex-row bg-[#e0f2f1]">
        <div className="w-full lg:w-[40%] h-full p-15">
            <h1 className="text-4xl font-semibold leading-12">Why you should choose us</h1>
            <p className="text-lg py-3">We have extensive experience in Corporate wear, Promotional Products, and Corporate Gifting & we do Embroidery & all type of printing like Sublimation printing, Screen Printing, Rubber & Vinyl Printing, etc.</p>
        </div>
        <div className="w-full lg:w-[60%] h-full flex flex-col md:flex-row md:flex-wrap">
            <div className="w-full md:w-[50%] h-[50%] px-10 py-6">
                <div className="w-20 h-20 bg-cover bg-center" style={{backgroundImage: `url(${aboutFeature1})`}}></div>
                <h1 className="text-2xl font-semibold py-3">Talented Creative Team</h1>
                <p className="text-lg">We have a talented team of Designers, Content writers, Printing experts, and a Support Desk to help you with your Orders and Shipment.</p>
            </div>
            <div className="w-full md:w-[50%] h-[50%] px-10 py-6">
                <div className="w-20 h-20 bg-cover bg-center" style={{backgroundImage: `url(${aboutFeature2})`}}></div>
                <h1 className="text-2xl font-semibold py-3">On-time Delivery</h1>
                <p className="text-lg">We understand the value of time and always stand by our commitment that's why we always try to deliver on/before estimation.</p>
            </div>
            <div className="w-full md:w-[50%] h-[50%] px-10 py-6">
                <div className="w-20 h-20 bg-cover bg-center" style={{backgroundImage: `url(${aboutFeature3})`}}></div>
                <h1 className="text-2xl font-semibold py-3">Best Price Guaranteed</h1>
                <p className="text-lg">We always try to provide our customers best possible price for their orders ranging from small to large quantities with the best quality.</p>
            </div>
            <div className="w-full md:w-[50%] h-[50%] px-10 py-6">
                <div className="w-20 h-20 bg-cover bg-center" style={{backgroundImage: `url(${aboutFeature4})`}}></div>
                <h1 className="text-2xl font-semibold py-3">Corporative Support Team</h1>
                <p className="text-lg">Our customer support team is highly talented and corporative to help you with designing your custom tshirt or order related queries.</p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseComp