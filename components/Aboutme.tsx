import React from 'react';
import Image from 'next/image';
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

export default function Aboutme() {
  const education = [
    {
      src: "/SIM.png",
      title: "Diploma in Information Technology",
      date: "Oct 2021 - Sep 2022",
      location: "Singapore"
    },
    {
      src: "/uow_logo.png",
      title: "Bachelor in Computer Science (Cyber Security)",
      date: "Oct 2022 - Sep 2024",
      location: "Singapore"
    }
  ];

  const skills = [
    { src: '/react.svg', label: 'React JS', bgColor: 'bg-orange-200' },
    { src: '/nextjs.svg', label: 'Next JS', bgColor: 'bg-orange-200' },
    { src: '/figma.svg', label: 'Figma', bgColor: 'bg-orange-200' },
    { src: '/tailwind.svg', label: 'Tailwind CSS', bgColor: 'bg-orange-200' },
    { src: '/firebase.svg', label: 'Firebase', bgColor: 'bg-orange-200' },
    { src: '/html.svg', label: 'HTML', bgColor: 'bg-orange-200' },
    { src: '/taiga.svg', label: 'Taiga', bgColor: 'bg-orange-200' },
    { src: '/react.svg', label: 'React Native', bgColor: 'bg-orange-200' },
  ];

  return (
    // Aboutme Component
    <div className="min-h-screen py-16">
      <div className="flex justify-center -mt-24">
        <h1 className="text-5xl font-semibold text-gray-800 mb-8">About Me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-12 px-8 mx-24">
        {/* Education Section */}
        <div className="px-24 py-8 rounded-xl shadow-lg bg-orange-50 backdrop-blur-md border border-white/40">
          {education.map((edu, index) => (
            <div className="flex items-center mb-8" key={index}>
              <Image src={edu.src} alt={`${edu.title} Logo`} width={128} height={128} className="w-32 mr-8" />
              <div>
                <p className="font-semibold text-gray-900 mb-2 text-xl">{edu.title}</p>
                <div className="flex items-center">
                  <IoTimeOutline className="mr-2" />
                  <p className="text-lg text-gray-600">{edu.date}</p>
                </div>
                <div className="flex items-center">
                  <CiLocationOn className="mr-2" />
                  <p className="text-lg text-gray-600">{edu.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="flex justify-center">
          <h1 className="text-5xl font-semibold text-gray-800 mb-1">Tools and Frameworks</h1>
        </div>
        <div className="p-8 rounded-xl shadow-lg bg-orange-50 backdrop-blur-md border border-white/40 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} flex flex-col justify-center items-center p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-2xl`}
            >
              <Image src={item.src} alt={`${item.label} Logo`} width={64} height={64} className="w-16 h-16 mb-4" />
              <p className="text-center text-sm font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

