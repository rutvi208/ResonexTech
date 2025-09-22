"use client";

import {useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbMenu } from "react-icons/tb";
import Navlogo from './../../../public/images/ResoNex30.png';

const Navbar = () => {
    const [onTap, setOnTap] = useState(false);
    
      const [nav, setNav] = useState(false)
      const handleNav = () => {
          setNav(!nav)
          setOnTap((prev) => !prev); // Toggle color
        // Your existing logic for handling navigation
        }

    return (
        <div>
            <nav>
                <section className="w-full flex flex-col items-center justify-center text-center px-6 md:px-10">
                    <div className="max-w-7xl w-full py-6">
                        <header className="flex justify-between items-center">
                        <div>
                            <Link href={"/"}><Image fetchPriority='high' src={Navlogo} alt="ResoNex Logo" width={180} height={60}
                            loading="lazy" /></Link>
                        </div>
                        <nav className="hidden md:flex gap-8 text-sm text-[var(--foreground)] font-medium">
                            <a href="#services" className="text-base lg:text-xl hover:text-[var(--brandcolor)]">Services</a>
                            <a href="#why-us" className="text-base lg:text-xl hover:text-[var(--brandcolor)]">Why Us</a>
                            <a href="#kpi-library" className="text-base lg:text-xl hover:text-[var(--brandcolor)]">KPI Library</a>
                            <a href="#case-studies" className="text-base lg:text-xl hover:text-[var(--brandcolor)]">Case Studies</a>
                            <a href="#contact" className="text-base lg:text-xl hover:text-[var(--brandcolor)]">Contact</a>
                        </nav>
                        <div onClick={handleNav} className='lg:hidden z-20'>
                            <TbMenu size={20} color={onTap ? '#4D4D4D' : '#5800BD'} />
                        </div>
                            <div
                                onClick={handleNav}
                                className={nav ? 'overflow-hidden z-10 lg:hidden ease-in duration-300 fixed text-[var(--foreground)] left-0 top-0 w-full h-screen bg-[#F7F7F7] px-4 py-8 flex flex-col translate-x-0' : 'fixed top-0 h-screen -left-[100%] ease-in duration-500'}
                            >

                            <div className='justify-between flex'>
                                <Link href={"/"}><Image fetchPriority='high' src={Navlogo} alt="ResoNex logo" width={160} height={40}
                                loading="lazy" /></Link>
                            </div>

                            <ul className='h-max w-full text-center py-8'>
                                <li className='px-4 text-2xl py-4'><Link href="#services">Services</Link></li>
                                <li className='px-4 text-2xl py-4'><Link href='#why-us'>Why Us</Link></li>
                                <li className='px-4 text-2xl py-4'><Link href='#kpi-library'>KPI Library</Link></li>
                                <li className='px-4 text-2xl py-4'><Link href='#case-studies'>Case Studies</Link></li>
                                <li className='px-4 text-2xl py-4'><Link href='#contact'>Contact</Link></li>
                            </ul>
                        </div>
                        </header>
                        </div>
                    </section>
            </nav>
        </div>
    )
}

export default Navbar;