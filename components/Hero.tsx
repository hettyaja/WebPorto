import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="-mt-12">
      <div className="max-w-screen-xl mx-24 p-8 flex items-center justify-between min-h-screen">
        {/* Left Content */}
        <div className="animate-fade-in">
          <p className="font-medium text-4xl md:text-5xl">Hi!</p>
          <h1 className="font-medium text-5xl md:text-6xl mt-3">{"I'm Hetty Verina Gustia"}</h1>

          <div className="flex justify-start gap-x-2 mt-4 -ml-4">
            <a href="https://github.com/hettyaja" className='hover:bg-gray-500 p-2 rounded'>
              <Image src="/github.svg" alt="github" width={50} height={29}/>
            </a>
            <a href="https://www.linkedin.com/in/hettyverinagustia/" className='hover:bg-gray-500 p-2 rounded'>
              <Image src="/linkedin.svg" alt="linkedin" width={50} height={29}/>
            </a>
            
            <a href="mailto:hettyverg@gmail.com" className = "hover:bg-gray-500 p-2 rounded">
              <Image src="/gmail.svg" alt="gmail" width={50} height={29}/>
            </a>
         
          </div>
        </div>

        {/* Right Profile Image */}
        <div>
          <Image
            src="/profile.jpeg"
            alt="Profile Picture"
            width={400}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
