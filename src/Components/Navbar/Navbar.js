import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiHeart } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import sitelogo from "../../asset/taima-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#ff0000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 left-0 w-full ease-in duration-300 z-10"
    >
      <div style={{ backgroundColor: `${color}` }} className="text-center p-2">
        <span>Free Shipping in Ontario</span>
      </div>
      {/* Wrapper */}
      <div className="flex justify-between py-[10px] px-[30px] ">
        {/* Left */}
        <div className="hidden sm:flex items-center gap-[25px]">
          {/* <div className="flex items-center">
            <img src="img/usen.png" alt="" width={20} />
            <FiChevronDown />
          </div>
          <div className="flex items-center">
            <span>CAD</span>
            <FiChevronDown />
          </div> */}
          <div>
            <Link to="/products/1">Men</Link>
          </div>
          <div>
            <Link to="/products/2">Women</Link>
          </div>
          <div>
            <Link to="/products/3">Headwear</Link>
          </div>
        </div>

        {/* Center */}
        <div className=" text-2xl">
          <Link to="/">
            <img src={sitelogo} alt="" />
          </Link>
        </div>

        {/* Right */}
        <div className="hidden sm:flex items-center gap-[25px]">
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-[15px] text-gray-400 cursor-pointer">
            <FiSearch />
            <FiUser />
            <FiHeart />
            <div className="flex items-center relative ">
              <FiShoppingCart />
              <span className=" absolute left-2 bottom-2 rounded-xl w-5 h-5 text-[12px] bg-blue-600 text-white flex justify-center items-center">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Buttom */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-10 text-3xl text-white items-center justify-center h-screen w-full bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex items-center justify-center h-screen w-full bg-black text-center ease-in duration-300"
          }
        >
        
          <Link to="/">
            <img src={sitelogo} alt="" />
          </Link>
            <Link to="/products/1">Men</Link>
            <Link to="/products/2">Women</Link>
            <Link to="/products/3">Headwear</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        
        </div>

      </div>
    </div>
  );
  //   return (
  //   <div  className='fixed top-0 left-0 w-full ease-in duration-300 z-10'>
  //       <div className=' max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
  //           <img src={sitelogo} alt='Site logo' className=' cursor-pointer'/>
  //           <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
  //               <li className='p-4 cursor-pointer '>Home</li>
  //               <li className='p-4 cursor-pointer'>Mens</li>
  //               <li className='p-4 cursor-pointer '>Women</li>
  //               <li className='p-4 cursor-pointer '>Contact</li>
  //           </ul>

  //       </div>
  //   </div>
  // )
};

export default Navbar;
