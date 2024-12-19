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
        <div className="p-6 rounded-xl shadow-lg bg-white flex flex-col justify-between min-h-[350px]">
            <p className="mt-4 text-gray-700 leading-relaxed">
                 I enjoy creating user-friendly and visually appealing solutions, combining my technical skills with a creative mindset.
                With hands-on experience in mobile development, I thrive in building responsive and interactive applications.
            </p>
           
        </div>
        </div>


  
    </div>
  );
}
