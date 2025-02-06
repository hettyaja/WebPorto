import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    
    <nav className="flex items-center justify-between w-full md:px-24 bg-gradient-to-tl from-orange-200 to-orange-100 sticky top-0 z-10">
      {/* Logo part */}
      <Link href="/">
        <Image src="/het.svg" alt="logo" width={100} height={100}/>
      </Link>

      {/* Navbar links */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#aboutme" className="text-lg hover:text-orange-500 font-medium transition-colors duration-300">About</Link>
        <Link href="#project" className="text-lg hover:text-blue-500 font-medium transition-colors duration-300">Project</Link>

        <a 
          href="https://drive.google.com/file/d/1jn_v1QzSPoB_xXprH4XOgoUlfYpiGQPK/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg font-medium px-6 py-2 border-2 border-blue-500 rounded-3xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          View Resume
        </a>
      </div>     
    </nav>
  );
}