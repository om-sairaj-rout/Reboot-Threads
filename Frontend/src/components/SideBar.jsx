import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { FaPlus, FaMinus, FaInstagram } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { NavLink } from 'react-router'; // Ensure this import is correct for your router version

const SideBar = ({ isSideBarOpen, setIsSideBarOpen }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // CHANGED: fixed position, right-0, z-50, and overflow-y-auto for scrolling
        <div 
            className={`
                fixed top-0 right-0 h-screen w-[50%]
                bg-[#038578] text-neutral-100 
                z-50 shadow-2xl 
                overflow-y-auto transition-transform duration-300 ease-in-out
                ${isSideBarOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
        >
            <IoMdCloseCircle 
                onClick={() => setIsSideBarOpen(false)} 
                className="absolute right-5 top-5 text-3xl text-neutral-200 cursor-pointer hover:text-white" 
            />
            
            <ul className="mt-20 mb-5 text-lg"> {/* Increased top margin for scroll clearance */}
                <li className="p-3 border-b border-white/10 hover:bg-white/10"><NavLink to='/' onClick={() => setIsSideBarOpen(false)}>Home</NavLink></li>
                <li className="p-3 border-b border-white/10 hover:bg-white/10"><NavLink to='/About' onClick={() => setIsSideBarOpen(false)}>About</NavLink></li>
                
                {/* Services Dropdown */}
                <li className="border-b border-white/10">
                    <div 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="p-3 flex justify-between items-center cursor-pointer hover:bg-white/10"
                    >
                        <span>Services</span>
                        {isOpen ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                    </div>
                    {/* Animated Dropdown Logic */}
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ul className="bg-[#02695e] pl-6 text-base">
                            <li className="p-3 hover:text-yellow-300"><NavLink to='/screen-printing' onClick={() => setIsSideBarOpen(false)}>Screen Printing</NavLink></li>
                            <li className="p-3 hover:text-yellow-300"><NavLink to='/sublimation' onClick={() => setIsSideBarOpen(false)}>Sublimation Printing</NavLink></li>
                            <li className="p-3 hover:text-yellow-300"><NavLink to='/dtf' onClick={() => setIsSideBarOpen(false)}>DTF Printing</NavLink></li>
                            <li className="p-3 hover:text-yellow-300"><NavLink to='/custom-tshirt' onClick={() => setIsSideBarOpen(false)}>Custom T-shirt Printing</NavLink></li>
                            <li className="p-3 hover:text-yellow-300"><NavLink to='/hoodies' onClick={() => setIsSideBarOpen(false)}>Custom Hoodies</NavLink></li>
                            <li className="p-3 hover:text-yellow-300"><NavLink to='/professional' onClick={() => setIsSideBarOpen(false)}>Professional T-shirts</NavLink></li>
                        </ul>
                    </div>
                </li>

                <li className="p-3 border-b border-white/10 hover:bg-white/10"><NavLink to='/Faqs' onClick={() => setIsSideBarOpen(false)}>Faqs</NavLink></li>
                <li className="p-3 border-b border-white/10 hover:bg-white/10"><NavLink to='/GetQuotation' onClick={() => setIsSideBarOpen(false)}>Get Quotation</NavLink></li>
            </ul>

            <ul className="flex flex-col items-center justify-center gap-4 mt-10 pb-10">
                <li className="text-2xl hover:text-pink-400 cursor-pointer"><FaInstagram /></li>
                <li className="flex gap-2 items-center text-sm"><MdEmail className="text-xl" /><span>RebootThreads@gmail.com</span></li>
                <li className="text-lg font-semibold tracking-wide"><span>+91 98765 54422</span></li>
            </ul>
        </div>
    )
}

export default SideBar