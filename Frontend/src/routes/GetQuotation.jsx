import React from "react";
import BulkOrder from "../components/BulkOrder";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { submitQuotation } from "../API/submitQuotation";
import { motion } from "motion/react";
import toast from 'react-hot-toast';

const GetQuotation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    product: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("product", formData.product);
    data.append("message", formData.message);
    if (formData.file) {
      data.append("file", formData.file);
    }

    try {
      await submitQuotation(data);
      toast.success("Quotation submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        product: "",
        file: null,
      });
    } catch (error) {
      console.error("Error submitting quotation:", error);
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <div className="w-full h-auto bg-[#e0f2f1] flex flex-col lg:flex-row py-20">
        {/* form */}
        <div className="w-full lg:w-[60%] h-auto py-20 pl-10 lg:pl-20 pr-10">
          <div className="w-full h-full border rounded-lg p-10 bg-[#16476A]">
            <h1 className="text-4xl font-semibold text-white pb-6">
              Get Quotation
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-lg">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/50 rounded-md p-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* E-mail Field */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-lg">E-mail *</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent border border-white/50 rounded-md p-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-lg">Phone *</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="w-full bg-transparent border border-white/50 rounded-md p-3 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Products Dropdown */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-lg">Products *</label>
                <div className="relative">
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border border-white/50 rounded-md p-3 text-white focus:outline-none focus:border-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-black">
                      Please Select
                    </option>
                    <option value="Round Neck T-Shirt" className="text-black">
                      Round Neck T-Shirt
                    </option>
                    <option value="Polo T-Shirt" className="text-black">
                      Polo T-Shirt
                    </option>
                    <option value="Hoodies" className="text-black">
                      Hoodies
                    </option>
                    <option value="Sweat Shirts" className="text-black">
                      Sweat Shirts
                    </option>
                    <option value="Professional T-Shirts" className="text-black">
                      Professional T-Shirts
                    </option>
                  </select>
                  {/* Custom Arrow Icon */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Upload Design */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-lg">Upload Design</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-1/2 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white file:text-[#aa0061] hover:file:bg-gray-100"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white text-lg">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full h-32 bg-transparent border border-white/50 rounded-md p-5 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-md bg-white font-bold text-[#16476A] hover:bg-gray-200 hover:cursor-pointer"
              >
                Get a Quote
              </button>
            </form>
          </div>
        </div>
        {/* side-section */}
        <div className="w-full lg:w-[40%] h-auto lg:px-0 px-10 lg:py-30">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-gray-500 font-semibold text-5xl"
          >
            Submit form to Request Quotation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-lg text-gray-400 py-10"
          >
            Submit the form with your contact details and order requirements to
            get a quotation as soon as possible. You can also contact us for
            bulk orders via below options.
          </motion.p>
          <div className="w-full h-auto flex flex-col gap-6">
            <div className="w-full h-1/2 flex">
              <div className="h-full w-[20%]">
                <PiPhoneCallFill className="text-4xl" />
              </div>
              <div className="h-full w-[80%]">
                <h1 className="text-2xl font-semibold">Call Us</h1>
                <p> +91 9958388175 </p>
              </div>
            </div>
            <div className="w-full h-1/2 flex">
              <div className="h-full w-[20%]">
                <MdEmail className="text-4xl" />
              </div>
              <div className="h-full w-[80%]">
                <h1 className="text-2xl font-semibold">Email Us</h1>
                <p>rebootthreadsglobal@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BulkOrder />
    </>
  );
};

export default GetQuotation;
