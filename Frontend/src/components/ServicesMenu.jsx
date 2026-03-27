import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import serviceImg from "../assets/service-menu-img.jpg";

const ServicesMenu = () => {

  return (
    <div className="group relative h-full flex items-center">
      {/* TRIGGER LINK */}
      <NavLink to="#" className="flex items-center gap-2 h-full py-6">
        Services
        <FaAngleDown className="pt-1" />
      </NavLink>

      {/* DROPDOWN CONTENT */}
      <div className="absolute top-full -left-120 w-225 bg-[#fce4ec] shadow-2xl rounded-b-xl border-t-4 border-[#ad1457] hidden group-hover:flex flex-row p-0 overflow-hidden z-50">
        <div className="w-1/3 bg-white">
          <img
            src={serviceImg}
            alt="Custom Printing"
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Printing Services Column */}
        <div className="w-[33%] p-4 flex flex-col gap-2 text-gray-800">
          <MenuItem to="/screen-printing">Screen Printing</MenuItem>
          <MenuItem to="/sublimation">Sublimation Printing</MenuItem>
          <MenuItem to="/dtf">DTF Printing</MenuItem>
          <MenuItem to="/custom-tshirt">Custom Tshirt Printing</MenuItem>
        </div>

        {/* Custom Products Column */}
        <div className="w-[33%] p-4 flex flex-col gap-2 text-gray-800 bg-[#f8bbd0]/10">
          <MenuItem to="/hoodies">Custom Hoodies & Sweatshirts</MenuItem>
          <MenuItem to="/professional">Professional T-Shirts</MenuItem>
        </div>
      </div>
    </div>
  );
};

// Small helper component to keep the main code clean
const MenuItem = ({ to, children }) => (
  <NavLink
    to={to}
    className="hover:text-[#ad1457] hover:translate-x-2 transition-all duration-200 block"
  >
    {children}
  </NavLink>
);

export default ServicesMenu;
