import React from 'react';
import Image from 'next/image';
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

export default function Aboutme() {
  return (
    <div className="bg-gradient-to-b from-orange-100 to-yellow min-h-screen">
      {/* Header Section */}
      <div className="flex justify-center">
        <h1 className="text-6xl font-medium mt-10 text-gray-800">About Me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 px-6 mx-20">
        {/* Card 1 */}
        <div className="p-14 rounded-xl shadow-lg bg-white backdrop-blur-md border border-white/40 ">
            <div className ="flex items-center mb-6">
              <img src="/SIM.png" alt="SIM Logo" className="w-32 mr-4" />
              <div>
                <p className="font-semibold text-gray-900 mb-2 mt-2 text-xl"> Diploma in Information Technology</p>
                <div className="flex items-center">
                  <IoTimeOutline className="mr-1 -mt-4"/>
                  <p className="text-lg text-gray-600 mb-4"> Oct 2021 - Sep 2022</p>
                </div>
                <div className="flex items-center -mt-2">
                  <CiLocationOn className="mr-1 -mt-4"/>
                  <p className="text-lg text-gray-600 mb-4">Singapore</p>
                </div>
              </div>
            </div>

            <div className ="flex items-center mt-14">
              <img src="/uow_logo.png" alt="UOW Logo" className="w-32 mr-4" />
              <div>
                <p className="font-semibold text-gray-900 mb-2 mt-2 text-xl"> Bachelor in Computer Science (Cyber Security)</p>
                <div className="flex items-center">
                  <IoTimeOutline className="mr-1 -mt-4"/>
                  <p className="text-lg text-gray-600 mb-4">  Oct 2022 - Sep 2024</p>
                </div>
                <div className="flex items-center -mt-2">
                  <CiLocationOn className="mr-1 -mt-4"/>
                  <p className="text-lg text-gray-600 mb-4">Singapore</p>
                </div>
              </div>
            </div>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl shadow-lg bg-white backdrop-blur-md border border-white/40 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {[
          { src: '/react.svg', label: 'React JS', bgColor: 'bg-orange-200' },
          { src: '/nextjs.svg', label: 'Next JS', bgColor: 'bg-orange-200' },
          { src: '/figma.svg', label: 'Figma', bgColor: 'bg-orange-200' },
          { src: '/tailwind.svg', label: 'Tailwind CSS', bgColor: 'bg-orange-200' },
          { src: '/firebase.svg', label: 'Firebase', bgColor: 'bg-orange-200' },
          { src: '/html.svg', label: 'HTML', bgColor: 'bg-orange-200' },
          { src: '/taiga.svg', label: 'Taiga', bgColor: 'bg-orange-200' },
          { src: '/react.svg', label: 'React JS', bgColor: 'bg-orange-200' },
        ].map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} flex flex-col justify-center items-center p-6 rounded-lg shadow-md w-full h-full transform transition-transform hover:scale-105 hover:shadow-2xl`}
          >
            <img src={item.src} alt={`${item.label} Logo`} className="w-16 h-16 mb-4" />
            <p className="text-center text-sm font-semibold">{item.label}</p>
          </div>
        ))}
      </div>

        </div>


  
    </div>
  );
}
