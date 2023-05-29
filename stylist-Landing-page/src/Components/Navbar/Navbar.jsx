import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { Link } from "react-scroll";
import { BiMenu, BiX } from "react-icons/bi";
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () =>  setOpen(!open)
  
  return (
   
    <div className=' h-[70px] z-20 relative bg-slate-200 drop-shadow-lg xs:justify-between  2xl:justify-around  p-4 flex font-sans ' >
      <div className='w-[100px] cursor-pointer text-[#F8F8F8] '>
        <p className='font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Seaplace</p>
      </div>
      <div className='2xl:flex  cursor-pointer  2xl:gap-9 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold hidden 2xl:block pl-[-30px] '>
      <Link to="about" smooth={true} duration={500}>
           <p className='cursor-pointer'>
           About us
          </p> 
          </Link>
          <Link to="approach" smooth={true} duration={500}>
          <p className='cursor-pointer'>
           Trending collections
          </p> 
          </Link>
          <Link to="contact" smooth={true} duration={500}>
          <p className='cursor-pointer'>
           NFT'S 
          </p> 
          </Link>
          <Link to="service" smooth={true} duration={500}>
          <p className='cursor-pointer'>
           Our Creators
          </p> 
          </Link>
      </div>


      {/*small screen */}

      <div className='2xl:hidden xs:block text-lg z-10 '
      onClick={handleClick}
      >
        {open ?  (
          <BiMenu className='font-extrabold text-slate-500 text-3xl  ' />
        ) : (
          <BiX className='font-extrabold text-slate-500 text-3xl'/>
        )}

      </div>

      <div   className={open ? `hidden` : `  flex-col flex text-center justify-center items-center fixed inset-0 gap-9 p-4 xs:w-full  xs:h-screen 2xl:hidden lg:hidden   xs:h-screen md:h-screen bg-slate-200 text-slate-500 font-bold text-2xl absolute top-0 left-0 bottom-0`}>
      <Link to="about" smooth={true} duration={500}>
           <p>
           about
          </p> 
          </Link>
          <Link to="approach" smooth={true} duration={500}>
          <p>
           approach
          </p> 
          </Link>
          <Link to="contact" smooth={true} duration={500} >
          <p>
           contact
          </p> 
          </Link>
          <Link to="service" smooth={true} duration={500} >
          <p>
           service
          </p> 
          </Link>
      </div>
    </div>
  )
}

export default Navbar