import React from "react";

interface CardProps {
  title: string;
  desc: string;
  tools: string;
  image?: string;
  bgColor: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, desc, tools, image, bgColor }) => {
  return (
    <div
      className="shadow-lg rounded-3xl p-8 flex flex-col md:flex-row-reverse items-stretch 
      space-y-4 md:space-y-0 md:space-x-6 md:space-x-reverse mb-8 transition-transform 
      hover:scale-105"

      style={{ backgroundColor: bgColor }}
    >
      {/* Image Section */}
      {image && (
        <div className="w-full md:w-1/2 lg:w-3/4 flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="rounded-lg object-contain w-full h-auto"
          />
        </div>
      )}

      {/* Text Section */}
      <div className="w-full text-left md:w-1/2 flex flex-col justify-between">
        {/* Title and Description */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <p className="text-lg text-gray-600 mt-4">{desc}</p>
        </div>

        {/* Tools Section (at the bottom) */}
        <div>
          <p className="text-gray-500 italic">{tools}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
