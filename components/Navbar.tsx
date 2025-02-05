import Link from 'next/link';
import React from 'react';


export default function Navbar() {
  return (
    <nav className='flex justify-between w-full padding-container
    relative z-30 pt-4 bg-gradient-to-r from-orange-300 px-24'>
      {/* Logo part  */}
      <Link href="/">
        <p className="text-4xl font-semibold ">Hetty</p>
      </Link>
      <div className="hidden md:flex space-x-8 lg:flex ">
        <Link href="#aboutme" className="text-lg hover:text-orange-400 font-medium">About</Link>
        <Link href="#project" className="text-lg hover:text-blue-400 font-medium">Project</Link>
        <button className="text-lg hover:text-blue-400 font-medium rounded-lg "> View resume</button>
      </div>     
    </nav>
  )
}
