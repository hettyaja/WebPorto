"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full md:px-24 bg-gradient-to-tl from-orange-200 to-orange-100 sticky top-0 z-10">
      {/* Logo */}
      <Link href="/">
        <Image src="/het.svg" alt="logo" width={100} height={100}/>
      </Link>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#aboutme" className="dark:text-white text-lg hover:text-orange-500 font-medium transition-colors duration-300">About</Link>
        <Link href="#project" className="dark:text-white text-lg hover:text-orange-500 font-medium transition-colors duration-300">Project</Link>
        <a 
          href="https://drive.google.com/file/d/1jn_v1QzSPoB_xXprH4XOgoUlfYpiGQPK/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg font-medium px-6 py-2 border-2 border-blue-500 rounded-3xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          View Resume
        </a>
      </div>  

      {/* Burger Button */}
      <button 
        className="md:hidden p-2 z-50" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src="/menu.svg" alt="menu" width={30} height={30} />
      </button>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? "block" : "hidden"} absolute top-16 right-0 w-full bg-orange-100 md:hidden p-5 shadow-lg`}>
        <Link href="#aboutme" className="block py-2 text-lg hover:text-orange-500 font-medium transition-colors duration-300">About</Link>
        <Link href="#project" className="block py-2 text-lg hover:text-orange-500 font-medium transition-colors duration-300">Project</Link>
        <a 
          href="https://drive.google.com/file/d/1jn_v1QzSPoB_xXprH4XOgoUlfYpiGQPK/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-lg font-medium px-6 py-2 border-2 border-blue-500 rounded-3xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 mt-2"
        >
          View Resume
        </a>
      </div>
    </nav>
  );
}
