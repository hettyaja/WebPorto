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
        

        {/* Card 2 */}
        <div className="p-14 rounded-xl shadow-lg bg-white min-h-[350px]">
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
        {/* Card 3 */}
<div className="p-6 rounded-xl shadow-lg bg-white grid grid-cols-4 gap-6 min-h-[350px]">
  <div className="bg-gray-400 flex flex-col items-center p-4 rounded-lg">
    <img src="/react.svg" alt="React Logo" className="w-16 mb-2" />
    <p className="text-lg text-center">React JS</p>
  </div>

  <div className="bg-orange-400 flex flex-col items-center p-4 rounded-lg">
    <img src="/nextjs.svg" alt="Next JS Logo" className="w-16 mb-2" />
    <p className="text-center">Next JS</p>
  </div>

  <div className="bg-orange-400 flex flex-col items-center p-4 rounded-lg">
    <img src="/figma.svg" alt="Figma Logo" className="w-16 mb-2" />
    <p className="text-center">Figma</p>
  </div>

  <div className="bg-orange-400 flex flex-col items-center p-4 rounded-lg">
    <img src="/tailwind.svg" alt="Tailwind Logo" className="w-16 mb-2" />
    <p className="text-center">Tailwind CSS</p>
  </div>

  <div className="bg-orange-400 flex flex-col items-center p-4 rounded-lg">
    <img src="/firebase.svg" alt="Firebase Logo" className="w-16 mb-2" />
    <p className="text-center">Firebase</p>
  </div>

  <div className="bg-orange-400 flex flex-col items-center p-4 rounded-lg">
    <img src="/html.svg" alt="HTML Logo" className="w-16 mb-2" />
    <p className="text-center">HTML</p>
  </div>

  <div className="bg-orange-400 flex flex-col items-center p-4 rounded-lg">
    <img src="/taiga.svg" alt="Taiga Logo" className="w-16 mb-2" />
    <p className="text-center">Taiga</p>
  </div>

  <div className="bg-[#1a1a1a] flex flex-col items-center p-4 rounded-xl shadow-md w-28 h-44">
    <img src="/react.svg" alt="React Logo" className="w-12 mb-2" />
    <p className="text-sm font-semibold text-white text-center">React JS</p>
  </div>
</div>

        </div>


  
    </div>
  );
}
