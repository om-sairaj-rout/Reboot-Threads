import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import WhatsAppBut from '../components/WhatsAppBut';

// FAQ Data based on the image
const faqData = [
  {
    question: "How can i share my design?",
    answer: "Yes, you can upload your high-quality image/logo or some reference you would like us to design for you and ask for a quotation by sending a form on Get Quotation page. If you do not have the actual image, simply describe it to us, and we will bring it to life!",
  },
  {
    question: "Will i get final designs before the production?",
    answer: "We only start the production once its get verified from our customer, We send design proof to our customer if needed.",
  },
  {
    question: "How to contact us?",
    answer: "You can contact us via the 'Contact Us' page, email, or the WhatsApp button on this page.",
  },
  {
    question: "Do we offer rush orders?",
    answer: "Our turnaround time is one of the fastest in the industry, but if you require an even faster delivery, we will work with you to determine the best available and most cost-effective options.",
  },
  {
    question: "What is your minimum quantity for order?",
    answer: "We offer bulk order with minimum quanity is 5 pieces per order.",
  },
  {
    question: "How can I place bulk order?",
    answer: "You can place your bulk order by filling the form, over the phone or by coming to our office in Delhi and kolkata",
  },
  {
    question: "How do i receive my order?",
    answer: "We use multiple services to provide the fastest shipment. You will receive your order by our courier partner, 3rd party transportation service or you can collect it from our office",
  },
];

// Individual FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 mb-4 bg-white rounded-md shadow-sm">
      <button
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-xl font-semibold text-gray-900">{question}</h3>
        <span className="text-2xl font-bold">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Main FAQ Section Component
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-pink-50">
      {/* FAQ Accordion Section */}
      <div className="container mx-auto px-6 py-12 relative z-20">
        <div className="w-full md:w-[95%] mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
      <WhatsAppBut />    
      
    </div>
  );
};

export default FAQSection;