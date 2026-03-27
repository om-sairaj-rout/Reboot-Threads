import React from "react";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-gray-700 text-gray-200">
      <div className="w-[95%] h-[85%] m-auto flex flex-col md:flex-wrap md:flex-row border-b border-gray-500">
        <div className="w-full md:w-[50%] lg:w-[25%] md:h-[25%] lg:h-full px-5 py-10">
          <ul>
            <li className="hover:text-white py-2">
              <Link to="#">Custom Tshirt Printing</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">Custom Hoodies & Sweatshirts</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">Custom Professional T-Shirts</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">Custom Promotional T-Shirts</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Delhi</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Noida</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Gurgaon</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[50%] lg:w-[25%] md:h-[25%] lg:h-full px-5 py-10">
          <ul>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Chandigarh</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Jaipur</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Lucknow</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Pune</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Himachal Pradesh</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Kota</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Bhuvaneshwar</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[50%] lg:w-[25%] md:h-[25%] lg:h-full px-5 py-10">
          <ul>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Baleshwar</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">T-Shirts Printing in Cuttack</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">Screen Printing</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">Custom Promotional T-Shirts</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">Sublimation Printing</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">DTF Printing</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-[50%] lg:w-[25%] md:h-[25%] lg:h-full px-5 py-10">
          <ul>
            <li className="hover:text-white py-2">
              <Link to="#">About Us</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">Faqs</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">Privacy Policy</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">Shipping Policy</Link>
            </li>
            <li className="hover:text-white py-2">
              <Link to="#">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[95%] m-auto flex items-center justify-between py-4 border-t border-gray-200">
        <p className="text-gray-400 text-sm">
          © 2026 Reboot Threads. All rights reserved.
        </p>

        <FaInstagram className="text-gray-400 text-xl cursor-pointer hover:text-pink-600" />
      </div>
    </div>
  );
};

export default Footer;
