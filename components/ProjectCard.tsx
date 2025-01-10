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
      className="shadow-lg rounded-lg p-6"
      style={{ backgroundColor: bgColor }} // Inline style for dynamic background color
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{desc}</p>
        <p className="text-gray-600 mt-2">{tools}</p>
      </div>
      
      <div>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg mb-4"
        />
      )}
      </div>
    </div>
    
  );
};

export default ProjectCard;
