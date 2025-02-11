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
    { src: '/react.svg', label: 'React JS' },
    { src: '/nextjs.svg', label: 'Next JS' },
    { src: '/figma.svg', label: 'Figma' },
    { src: '/tailwind.svg', label: 'Tailwind CSS' },
    { src: '/firebase.svg', label: 'Firebase' },
    { src: '/html.svg', label: 'HTML' },
    { src: '/taiga.svg', label: 'Taiga' },
    { src: '/react.svg', label: 'React Native' }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="flex justify-center -mt-10">
        <h1 className="text-5xl font-semibold text-gray-800 mb-8 ">About Me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-12 px-8 mx-6 md:mx-24">
        {/* Education Section */}
        <div className="p-8 rounded-xl shadow-lg bg-orange-50 border border-white/40 flex flex-col space-y-6">
          {education.map((edu, index) => (
            <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start space-y-4 md:space-y-0 md:space-x-6" key={index}>
              <Image src={edu.src} alt={`${edu.title} Logo`} width={128} height={128} className="w-24 h-24 md:w-32 md:h-32" />
              <div>
                <p className="font-semibold text-gray-900 text-xl">{edu.title}</p>
                <div className="flex items-center justify-center md:justify-start mt-2">
                  <IoTimeOutline className="mr-2" />
                  <p className="text-lg text-gray-600">{edu.date}</p>
                </div>
                <div className="flex items-center justify-center md:justify-start mt-1">
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
        <div className="p-8 rounded-xl shadow-lg bg-orange-50 border border-white/40 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <Image src={item.src} alt={`${item.label} Logo`} width={64} height={64} className="w-16 h-16 mb-4" />
              <p className="text-center text-gray-800 text-sm font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
