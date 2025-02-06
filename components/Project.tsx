import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {
            src: "/fyp.jpg",
            title: "Glucosense",
            desc: "A project aimed at improving health management for people with diabetes. It provides personalized insights by tracking glucose levels and calorie intake. Designed to help users make informed dietary choices effortlessly.",
            tools: "Node.js, React Native, Firebase"
        },
        {
            src: "/csci.jpg",
            title: "Cafe Management System",
            desc: "This Cafe Management System is a PC application designed to assist managers, staff, and owners by providing role-based access tailored to their specific responsibilities.",
            tools: "Java GUI, MySQL, JDBC"
        },
        {
            src: "/web.png",
            title: "Web Portfolio",
            desc: "A personal website to highlight my projects, experiences, and creative work, reflecting my journey and skills with simple and clean design",
            tools: "Next.js, TailwindCSS"
        }
    ];

    return (
        <div className=" min-h-screen">
            <div className="flex justify-center">
                <h1 className="text-5xl font-semibold text-gray-800 mt-1">Projects</h1>
            </div>

            <div className="grid grid-cols-1 gap-8 p-8 mx-24">
                {projects.map((project, index) => (
                    <div key={index} className="w-full">
                        <ProjectCard
                            title={project.title}
                            desc={project.desc}
                            tools={project.tools}
                            image={project.src}
                            bgColor="#FFFAF0" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
