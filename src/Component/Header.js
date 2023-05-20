import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import myphoto from'../Image/mind.jpg'
import {AiOutlineMenu} from'react-icons/ai';
import {RxCross2} from 'react-icons/rx'

function Header() {
  const [menuBar, setMenubar] = useState(true);
  const toggleMenubar = () => {
    setMenubar((menuBar) =>  !menuBar);
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  
  return (
    <>
      <div className="w-full bg-slate-100 z-10 sticky top-0 ">
        <div className=" m-auto flex flex-wrap w-[100%] px-5 py-3 2xl:px-0 2xl:w-[1400px]   items-center">
          <div className="w-[50%] sm:w-[20%] flex items-center ">
            {
              menuBar ? <AiOutlineMenu className="flex  sm:hidden text-[20px]" onClick={toggleMenubar}/> : <RxCross2 className="flex sm:hidden text-[20px]" onClick={toggleMenubar}/>
            }
            
            <span className="font-bold text-[18px]  md:text-[25px] hidden sm:flex"> SEYHA </span>
          </div>
          <div className=  { menuBar ? "sm:w-[60%] sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:top-0 sm:left-0 sm:relative sm:bg-slate-100 sm:text-black fixed top-[64px]  left-[100%] bg-slate-600 w-[100%] text-white flex flex-col px-5 py-4 gap-5": "fixed top-[64px]  left-0 bg-slate-600 w-[100%] text-white flex flex-col px-5 py-4 gap-5  sm:w-[60%] sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:top-0 sm:left-0 sm:relative sm:bg-slate-100 sm:text-black  "} >
            <Link onClick={() => scrollToSection('home')} className="text-[16px] font-[700]"> HOME </Link>
            <Link onClick={() => scrollToSection('about')} className="text-[16px] font-[700]"> ABOUT </Link>
            <Link onClick={() => scrollToSection('project')} className="text-[16px] font-[700]"> PROJECT </Link>
            <Link onClick={() => scrollToSection('skill')}className="text-[16px] font-[700]"> SKILL </Link>
          </div>
          <div className="w-[50%] sm:w-[20%] flex justify-end  ">
            <img src={myphoto} alt="" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]  object-cover rounded-[100%]"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
