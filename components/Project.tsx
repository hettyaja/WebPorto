import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-orange-100 to-yellow min-h-screen">
      {/* Header Section */}
      <div className="flex justify-center">
        <h1 className="text-6xl font-medium mt-10 text-gray-800">Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 px-6 mx-20">
        {/* Project 1 */}
        <div className="p-14 rounded-xl shadow-lg bg-white backdrop-blur-md border border-white/40 px-28">
          <div className="flex items-center mb-6">
            <Image
              src="/nextjs.svg"
              alt="Web Porto Logo"
              width={128}
              height={128}
              className="w-32 mr-4"
            />
            <div>
              <p className="font-semibold text-gray-900 mb-2 mt-2 text-xl">
                Web Portfolio
              </p>
              <p className="text-lg text-gray-600 mb-4">Built using Next.js and Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-14 rounded-xl shadow-lg bg-white backdrop-blur-md border border-white/40 px-28">
          <div className="flex items-center mb-6">
            <Image
              src="/react.svg"
              alt="FYP Logo"
              width={128}
              height={128}
              className="w-32 mr-4"
            />
            <div>
              <p className="font-semibold text-gray-900 mb-2 mt-2 text-xl">
                Final Year Project
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Built using React Native, Node.js, and Firebase
              </p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="p-14 rounded-xl shadow-lg bg-white backdrop-blur-md border border-white/40 px-28">
          <div className="flex items-center mb-6">
            <Image
              src="/java-logo.png"
              alt="Cafe Staff Management Logo"
              width={128}
              height={128}
              className="w-32 mr-4"
            />
            <div>
              <p className="font-semibold text-gray-900 mb-2 mt-2 text-xl">
                Cafe Staff Management System
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Built using Java with a GUI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
