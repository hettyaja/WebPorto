import React from 'react';
import Image from 'next/image';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const projects = [
        {
            src: "/nextjs.svg",
            title: "Web Portofolio",
            desc :"A website for my personal portofolio",
            tools : "Next.js, TailwindCSS"
        },
        {
            src: "/nextjs.svg",
            title: "Glucosense - Final Year Project ",
            desc :"A website for my personal portofolio",
            tools : "Node.js, React Native, Firebase"
        },
        {
            src: "/nextjs.svg",
            title: "Cafe Manegement System",
            desc :"A website to manage cafe staff schedule",
            tools : "Java"
        }
    ];
    return (
        <div className = "bg-gradient-to-b from-orange-100 to-yellow min-h-screen"> 
            <div className="flex justify-center">
                <h1 className="text-6xl font-medium mt-10">Project</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        
            <ProjectCard
                title="Web Portofolio"
                desc="A new experience for customers to submit data."
                tools="Next.JS, Tailwind CSS"
                image="/path/to/image1.png"
                
                bgColor="#D9F8C4" // Light green
                
            />
           
            </div>

        
        </div>

    )
        
    }
