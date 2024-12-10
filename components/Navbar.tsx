import Link from 'next/link';
import React from 'react';


export default function Navbar() {
  return (
    <nav className='flex justify-between max-container padding-container
    relative z-30 py-5 bg-gradient-to-r from-orange-300 '>
      {/* Logo part  */}
      <Link href="/">
        <p className="text-4xl font-semibold ml-24">Hetty</p>
      </Link>
      <div className="flex h-full gap-12 lg:flex mr-24">
        <Link href="/about" className="text-lg hover:text-orange-400 font-medium">About</Link>
        <Link href="/project" className="text-lg hover:text-blue-400 font-medium">Project</Link>
        <Link href="/resume" className="text-lg hover:text-blue-400 font-medium">Resume</Link>
        <Link href="/contact" className="text-lg hover:text-blue-400 font-medium">Contact</Link>
      </div>     
    </nav>
  )
}
