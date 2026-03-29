import {NavLink} from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import ServicesMenu from './ServicesMenu';
import { FiMenu } from "react-icons/fi";
import logo from '../assets/Logo.png';

const Header = ({isSideBarOpen,setIsSideBarOpen}) => {
    const navigate  = useNavigate();
    const handleQuotationClick = () => {
        navigate('/GetQuotation');
    }
  return (
    <>
        <div className="hidden w-full h-10 bg-[#e0f2f1] md:flex flex-row-reverse items-center gap-6 px-25">
            <a href="#">
                <FaInstagram />
            </a>
            <a href="tel:+919958388175">+91 9958388175</a>
            <a href="mailto:rebootthreadsglobal@gmail.com">rebootthreadsglobal@gmail.com</a>
            
        </div>
        <div className="w-full h-23 bg-white shadow-lg sticky top-0 z-50 flex justify-between items-center px-22">
            <div className='items-center'>
                <img src={logo} alt="Logo" className="h-38 w-38 object-contain" />
            </div>
            <div className="md:flex gap-10 items-center hidden">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/About'>About</NavLink>
                <ServicesMenu />
                <NavLink to='/Faqs'>Faqs</NavLink>
                <button onClick={handleQuotationClick}  className="px-6 py-3 rounded-md bg-[#038578] text-white hover:bg-[#00796b]">Get Quotation</button>
            </div>
            <FiMenu onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="text-3xl md:hidden" />
        </div>

    </>
  );
};

export default Header;
