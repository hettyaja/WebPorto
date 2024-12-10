import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="ml-24 mt-48 pt-3">
      <p className="font-extralight text-4xl">Hi!</p>
      <h1 className="font-medium text-5xl mt-3">I'm Hetty</h1>
      <p className="font-bold text-5xl mt-3">Software Developer</p>

      <div className='flex justify-start gap-1'>
        <a href="https://github.com/hettyaja" className='hover:bg-gray-500 px-4 py-2 rounded -ml-5'>
          <img src="/github.svg" alt="github" width={74} height={29}/>
        </a>
        <a href="https://www.linkedin.com/in/hettyverinagustia/"></a>
          <img src="/linkedin.svg" alt="linkedin" width={74} height={29}/>
      </div>
    </div>
  )
}
