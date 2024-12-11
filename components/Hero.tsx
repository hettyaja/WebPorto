import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="flex items-center justify center min-h-screen overflow-hidden bg-gradient-to-r from-orange-300 ">
      <div className="ml-24 -mt-28 ">
        <p className="font-extralight text-4xl">Hi!</p>
        <h1 className="font-medium text-5xl mt-3">I'm Hetty</h1>
        <p className="font-bold text-5xl mt-3">Software Developer</p>

        <div className='flex justify-start gap-x-0.5'>
          <a href="https://github.com/hettyaja" className='hover:bg-gray-500 px-4 py-2 rounded -ml-5'>
            <Image src="/github.svg" alt="github" width={50} height={29}/>
          </a>
          <a href="https://www.linkedin.com/in/hettyverinagustia/" className='hover:bg-gray-500 rounded px-2 py-2 -ml-5'>
            <Image src="/linkedin.svg" alt="linkedin" width={50} height={29}/>
          </a>
        </div>
      </div>

      <div className="flex justify-between ml-60 ">
        <Image
          src="/cat.jpg"
          alt="Rectangle"
          width={382}
          height={500}
          className='ml-10'
        />
      </div>
    </div>


    

    
  )
}
