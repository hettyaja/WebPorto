import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {
            src: "/test1.svg",
            title: "Web Portfolio",
            desc: "A personal website to highlight my projects, experiences, and creative work, reflecting my journey and skills with simple and clean design",
            tools: "Next.js, TailwindCSS"
        },
        {
            src: "/fyp.svg",
            title: "Glucosense - Final Year Project",
            desc: "A project aimed at improving health management for people with diabetes. It provides personalized insights by tracking glucose levels and calorie intake. Designed to help users make informed dietary choices effortlessly.",
            tools: "Node.js, React Native, Firebase"
        },
        {
            src: "/csci.png",
            title: "Cafe Management System",
            desc: "This Cafe Management System is a PC application designed to assist managers, staff, and owners by providing role-based access tailored to their specific responsibilities.",
            tools: "Java GUI, MySQL, JDBC"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-orange-100 to-yellow min-h-screen">
            <div className="flex justify-center">
                <h1 className="text-6xl font-medium mt-10">Projects</h1>
            </div>

            <div className="grid grid-cols-1 gap-8 p-6 mx-20">
                {projects.map((project, index) => (
                    <div key={index} className="w-full">
                        <ProjectCard
                            title={project.title}
                            desc={project.desc}
                            tools={project.tools}
                            image={project.src}
                            bgColor="#D9F8C4" // Light green
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
