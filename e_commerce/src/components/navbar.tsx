"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import profile from "../../public/images/Frame (2).png";
import cart from "../../public/images/Frame (1).png";
import search from "../../public/images/Frame (3).png";
import dropdown from "../../public/images/Frame (4).png";
import menuIcon from '../../public/images/menu.png';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMenu2 = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="navbody w-full bg-white fixed top-[30px] sm:top-[38px] md:top-[38px] pb-[0.5rem] border-b-[1px] z-[100] shadow-md">
      <div className="w-[95%] h-[5rem] 2xl:w-[1500px] mx-auto flex justify-around items-center">
      <div className="mt-[1rem] sm:mt-[2.5rem] sm:ml-[2rem] md:hidden cursor-pointer" onClick={toggleMenu}>
        <Image src={menuOpen ? menuIcon : menuIcon} alt="menu toggle" className='w-8 h-8 bg-white mb-2' />
      </div>
        <Link href={"/"}>
          <div className='integral md:pl-0 font-bold text-[25px] sm:text-[30px] md:text-[32px] cursor-pointer'>
            SHOP.CO
          </div>
        </Link>
        <div className='hidden satoshi md:flex gap-5'>
          <div className="link flex gap-1 hover:font-semibold">
            <Link href={"/category"} className="satoshi font-semibold dropdown-button border-none cursor-pointer border-r-[5px] ml-20 hover:underline hover:underline-offset-4">
              Shop 
            </Link>
            <div className='mt-2'>
              <Image src={dropdown} alt="drop" />
            </div>
          </div>
          <div><Link href={"#"} className='satoshi link font-semibold hover:underline hover:underline-offset-4'>On Sale</Link></div>
          <div><Link href={"/new_Arival"} className='satoshi link font-semibold hover:underline hover:underline-offset-4'>New Arrivals</Link></div>
          <div><Link href={"#"} className='satoshi link font-semibold hover:underline hover:underline-offset-4'>Brands</Link></div>
        </div>
        <div className="hidden sm:block relative md:ml-[20px] sm:ml-[8rem] w-[10rem] sm:w-[15rem] md:w-[35rem]">
          <input type="text" placeholder="Search for products..." className="absolute sm:absolute sm:p-[0.65rem] md:p-[0.75rem] sm:pl-[2.5rem] md:mt-[-1rem] md:pl-[3rem] w-full border-none sm:text-[12px] md:text-[15px] rounded-full bg-[#F5F5F5] text-black" />
          <span className="absolute inset-y-0 left-[8rem] sm:left-3 md:left-4 flex items-center pt-[1.2rem] sm:pt-[1.5rem] md:pt-[0.5rem] cursor-pointer">
            <Image src={search} alt='icon_send'/>
          </span>
        </div>
        <div className="flex gap-3 md:gap-4 md:w-32 ml-[0.1rem] sm:ml-[2rem] md:ml-[20px] h-8 items-center">
          <span onClick={toggleMenu2} className="flex sm:hidden cursor-pointer">
            <Image src={search} alt='icon_send'/>
          </span>
          {searchOpen && (
            <div className="absolute sm:hidden top-20 right-[0.01rem] w-screen center h-screen bg-black text-white flex flex-col items-center gap-4 py-3 rounded opaci">
              <div className="relative flex justify-center w-[20rem] mt-[2rem] pt-[0.3rem] rounded-full">
                <input type="text" placeholder="Search for products..." className="absolute p-[0.75rem] pl-12 w-full border-none text-[15px] rounded-full bg-[#F5F5F5] text-black" />
                <span className="absolute inset-y-0 left-4 flex items-center pt-[1.7rem] cursor-pointer">
                  <Image src={search} alt='icon_send'/>
                </span>
              </div>
            </div>
          )}
          <Link href={"/cart"}><Image src={cart} alt="cross" className='cursor-pointer'/></Link>
          <Link href={"/login"}><Image src={profile} alt="cross" className='cursor-pointer'/></Link>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute sm:hidden top-[5.5rem] mx-2 w-[50%] h-auto bg-black text-white flex flex-col items-center gap-4 py-3 rounded opaci">
          <div className='satoshi w-[15rem] px-10 gap-[10rem] mt-[0.2rem]'>
            <div className="link flex gap-1 hover:font-semibold p-2 m-2">
              <Link href={"/category"} onClick={toggleMenu} className="satoshi font-semibold dropdown-button border-none cursor-pointer border-r-[5px]">Shop</Link>
              <div className='mt-2'><Image src={dropdown} alt="drop"/></div>
            </div>
            <div className='p-2 m-2'><Link href={"#"} onClick={toggleMenu} className='satoshi link font-semibold'>On Sale</Link></div>
            <div className='p-2 m-2'><Link href={"/new_Arival"} onClick={toggleMenu} className='satoshi link font-semibold'>New Arrivals</Link></div>
            <div className='p-2 m-2'><Link href={"#"} onClick={toggleMenu} className='satoshi link font-semibold'>Brands</Link></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;